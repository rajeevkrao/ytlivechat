import type { RequestHandler } from '@sveltejs/kit';
import { google } from 'googleapis';

const apiKey = process.env.GOOGLE_API_KEY;

export const GET: RequestHandler = async ({ url }) => {
	const searchParams = url.searchParams;
	const query = searchParams.get('q');

	const youtube = google.youtube({
		version: 'v3',
		auth: apiKey
	});

	try {
		const streamingVideos = await youtube.search.list({
			part: 'snippet',
			q: query,
			eventType: 'live',
			type: 'video'
		});

		const upcomingVideos = await youtube.search.list({
			part: 'snippet',
			q: query,
			eventType: 'upcoming',
			type: 'video'
		});

		// Combine live and upcoming videos
		const data = [...streamingVideos.data.items, ...upcomingVideos.data.items];

		if (!data.length) {
			// No live Videos
			return [];
		}

		const liveVideos = data.map((video: any) => {
			return {
				thumbnail: video.snippet.thumbnails.default.url,
				title: video.snippet.title,
				videoId: video.id.videoId,
				url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
				liveChatUrl: `https://www.youtube.com/live_chat?is_popout=1&v=${video.id.videoId}`
			};
		});
		return Response.json(liveVideos);
	} catch (error) {
		return new Response('Error Loading Live Streams', { status: 500 });
	}
};
