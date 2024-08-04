import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	const params = Object.fromEntries(url.searchParams.entries());
	const hostname = url.hostname;
	return { params, hostname };
};