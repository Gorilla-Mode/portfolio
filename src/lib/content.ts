// Replace these placeholders with your own name, introduction, and projects.
export const profile = {
	name: 'Your name',
	role: 'Your role / specialty',
	bio: 'A few words about you, what you do, and what you care about. Keep it short, make it personal, and let your work tell the rest of the story.'
};

export type Project = {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	href?: `https://${string}` | `http://${string}`;
};

// The titles, descriptions, and technologies below are examples, not real work.
// Add an href to a project when you have a real destination for it.
export const projects: Project[] = [
	{
		id: 'project-one',
		title: 'Project one',
		description:
			'A short overview of something you built. Describe the idea, the problem it solves, and what makes it yours.',
		technologies: ['Svelte', 'TypeScript', 'CSS']
	},
	{
		id: 'project-two',
		title: 'Project two',
		description:
			'A space for another piece of work. Share who it was made for and the part you played in bringing it to life.',
		technologies: ['TypeScript', 'Node.js']
	},
	{
		id: 'project-three',
		title: 'Project three',
		description:
			'An experiment, a side project, or an idea you explored. A few sentences about what you learned along the way.',
		technologies: ['HTML', 'CSS', 'JavaScript']
	}
];
