import type { PageLoad } from './$types';

export const load: PageLoad = ({ url, params: as }) => {
	const params = Object.fromEntries(url.searchParams.entries());
	const hostname = url.hostname;
	return { params, hostname };
};