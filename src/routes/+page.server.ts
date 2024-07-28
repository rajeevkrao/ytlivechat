import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getLiveVideos } from '../utils/google';

export const load: PageServerLoad = async () => {
	try {
		const channelId = process.env.YOUTUBE_CHANNEL_ID;
		const liveVideos = await getLiveVideos(channelId);
		return { liveVideos };
	} catch (err: any) {
		error(404, err.message);
	}
};
