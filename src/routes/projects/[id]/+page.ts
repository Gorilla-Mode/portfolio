import { error } from '@sveltejs/kit';
import { projects } from '$lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((item) => item.id === params.id);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
