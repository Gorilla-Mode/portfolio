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
	longDescription: string[];
	technologies: string[];
	href?: `https://${string}` | `http://${string}`;
	github?: `https://${string}` | `http://${string}`;
	image?: {
		src: string;
		alt: string;
	};
};

// The titles, descriptions, and technologies below are examples, not real work.
// Add href, github, and image when you have real destinations and an image file.
export const projects: Project[] = [
	{
		id: 'project-one',
		title: 'Project one',
		description:
			'A short overview of something you built. Describe the idea, the problem it solves, and what makes it yours.',
		longDescription: [
			'Use this space to explain the problem behind the project and why you chose to work on it. Give readers enough context to understand who it was for and what success looked like.',
			'Describe your approach, the decisions you made, and the part you built yourself. Close with the result or what you learned from the work.'
		],
		technologies: ['Svelte', 'TypeScript', 'CSS']
	},
	{
		id: 'project-two',
		title: 'Project two',
		description:
			'A space for another piece of work. Share who it was made for and the part you played in bringing it to life.',
		longDescription: [
			'Introduce the people or use case behind this project. Explain the need it addressed and the constraints that shaped the work.',
			'Walk through the most important implementation choices and your contribution. Add a concrete outcome, challenge, or lesson once this is a real project.'
		],
		technologies: ['TypeScript', 'Node.js']
	},
	{
		id: 'project-three',
		title: 'Project three',
		description:
			'An experiment, a side project, or an idea you explored. A few sentences about what you learned along the way.',
		longDescription: [
			'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
			'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
		],
		technologies: ['HTML', 'CSS', 'JavaScript']
	}
];
