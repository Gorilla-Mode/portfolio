import type { Locale } from './i18n';

type Localized<T> = Record<Locale, T>;

export type Profile = {
	name: string;
	role: Localized<string>;
	bio: Localized<string>;
	github?: `https://${string}` | `http://${string}`;
	linkedin?: `https://${string}` | `http://${string}`;
	image?: {
		src: string;
		alt: Localized<string>;
	};
};

export type LocalizedProfile = Omit<Profile, 'role' | 'bio' | 'image'> & {
	role: string;
	bio: string;
	image?: { src: string; alt: string };
};

// Replace these placeholders with your own name, introduction, and projects.
export const profile: Profile = {
	name: 'Your name',
	role: {
		en: 'Your role / specialty',
		nb: 'Din rolle / ditt fagområde'
	},
	bio: {
		en: 'A few words about you, what you do, and what you care about. Keep it short, make it personal, and let your work tell the rest of the story.',
		nb: 'Noen ord om deg, hva du gjør, og hva som er viktig for deg. Hold det kort og personlig, og la arbeidet ditt fortelle resten av historien.'
	}
};

export type Project = {
	id: string;
	title: string;
	description: Localized<string>;
	longDescription: Localized<string[]>;
	technologies: string[];
	href?: `https://${string}` | `http://${string}`;
	github?: `https://${string}` | `http://${string}`;
	image?: {
		src: string;
		alt: Localized<string>;
	};
};

export type LocalizedProject = Omit<Project, 'description' | 'longDescription' | 'image'> & {
	description: string;
	longDescription: string[];
	image?: { src: string; alt: string };
};

export type Interest = {
	id: string;
	title: Localized<string>;
	caption: Localized<string>;
	description: Localized<string>;
	image?: {
		src: string;
		alt: Localized<string>;
	};
	detailImage?: {
		src: string;
		alt: Localized<string>;
	};
};

export type LocalizedInterest = Omit<
	Interest,
	'title' | 'caption' | 'description' | 'image' | 'detailImage'
> & {
	title: string;
	caption: string;
	description: string;
	image?: { src: string; alt: string };
	detailImage?: { src: string; alt: string };
};

export function localizeProfile(locale: Locale): LocalizedProfile {
	return {
		name: profile.name,
		role: profile.role[locale],
		bio: profile.bio[locale],
		github: profile.github,
		linkedin: profile.linkedin,
		image: profile.image && { src: profile.image.src, alt: profile.image.alt[locale] }
	};
}

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
	return {
		...project,
		description: project.description[locale],
		longDescription: project.longDescription[locale],
		image: project.image && { src: project.image.src, alt: project.image.alt[locale] }
	};
}

export function localizeInterest(interest: Interest, locale: Locale): LocalizedInterest {
	return {
		...interest,
		title: interest.title[locale],
		caption: interest.caption[locale],
		description: interest.description[locale],
		image: interest.image && { src: interest.image.src, alt: interest.image.alt[locale] },
		detailImage: interest.detailImage && {
			src: interest.detailImage.src,
			alt: interest.detailImage.alt[locale]
		}
	};
}

// The titles, descriptions, and technologies below are examples, not real work.
// Add href, github, and image when you have real destinations and an image file.
export const projects: Project[] = [
	{
		id: 'project-one',
		title: 'Project one',
		description: {
			en: 'A short overview of something you built. Describe the idea, the problem it solves, and what makes it yours.',
			nb: 'En kort oversikt over noe du har laget. Beskriv ideen, problemet det løser, og hva som gjør det til ditt.'
		},
		longDescription: {
			en: [
				'Use this space to explain the problem behind the project and why you chose to work on it. Give readers enough context to understand who it was for and what success looked like.',
				'Describe your approach, the decisions you made, and the part you built yourself. Close with the result or what you learned from the work.'
			],
			nb: [
				'Bruk denne plassen til å forklare problemet bak prosjektet og hvorfor du valgte å jobbe med det. Gi leserne nok kontekst til å forstå hvem det var for, og hvordan et godt resultat så ut.',
				'Beskriv fremgangsmåten din, valgene du tok, og det du bygde selv. Avslutt med resultatet eller det du lærte av arbeidet.'
			]
		},
		technologies: ['Svelte', 'TypeScript', 'CSS']
	},
	{
		id: 'project-two',
		title: 'Project two',
		description: {
			en: 'A space for another piece of work. Share who it was made for and the part you played in bringing it to life.',
			nb: 'Plass til et annet arbeid. Fortell hvem det ble laget for, og hvilken rolle du hadde i å gjøre det til virkelighet.'
		},
		longDescription: {
			en: [
				'Introduce the people or use case behind this project. Explain the need it addressed and the constraints that shaped the work.',
				'Walk through the most important implementation choices and your contribution. Add a concrete outcome, challenge, or lesson once this is a real project.'
			],
			nb: [
				'Presenter menneskene eller bruksområdet bak prosjektet. Forklar behovet det skulle dekke, og rammene som formet arbeidet.',
				'Gå gjennom de viktigste valgene i gjennomføringen og ditt eget bidrag. Legg til et konkret resultat, en utfordring eller en erfaring når dette er et virkelig prosjekt.'
			]
		},
		technologies: ['TypeScript', 'Node.js']
	},
	{
		id: 'project-three',
		title: 'Project three',
		description: {
			en: 'An experiment, a side project, or an idea you explored. A few sentences about what you learned along the way.',
			nb: 'Et eksperiment, et sideprosjekt eller en idé du utforsket. Noen setninger om det du lærte underveis.'
		},
		longDescription: {
			en: [
				'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
				'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
			],
			nb: [
				'Forklar spørsmålet eller ideen som startet eksperimentet. Hva ville du teste, lage eller forstå?',
				'Fortell hvordan du utforsket ideen, hva som endret seg underveis, og hva du ville gjort videre. Bytt ut denne teksten med det som gjør prosjektet særegent.'
			]
		},
		technologies: ['HTML', 'CSS', 'JavaScript']
	}
];

// These entries are placeholders. Add image or detailImage with localized alt text when ready.
export const interests: Interest[] = [
	{
		id: 'fishing',
		title: {
			en: 'Fishing',
			nb: 'Fiske'
		},
		caption: {
			en: 'Fishing',
			nb: 'Fiske'
		},
		description: {
			en: 'Use this space to share what fishing means to you, where you enjoy it, or a memorable experience on the water.',
			nb: 'Bruk denne plassen til å fortelle hva fiske betyr for deg, hvor du liker å fiske, eller om en minneverdig opplevelse på vannet.'
		}
	},
	{
		id: 'cooking',
		title: {
			en: 'Cooking',
			nb: 'Matlaging'
		},
		caption: {
			en: 'Cooking',
			nb: 'Matlaging'
		},
		description: {
			en: 'Use this space to describe what you like to cook, the traditions you return to, or how you enjoy bringing people together around food.',
			nb: 'Bruk denne plassen til å beskrive hva du liker å lage, tradisjonene du vender tilbake til, eller hvordan du samler mennesker rundt mat.'
		}
	},
	{
		id: 'interest-three',
		title: {
			en: 'Interest three',
			nb: 'Interesse tre'
		},
		caption: {
			en: 'Interest three',
			nb: 'Interesse tre'
		},
		description: {
			en: 'Replace this placeholder with another interest and a short, personal note about why it matters to you.',
			nb: 'Bytt ut denne plassholderen med en annen interesse og en kort, personlig tekst om hvorfor den betyr noe for deg.'
		}
	}
];
