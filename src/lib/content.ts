import type { Locale } from './i18n';

type Localized<T> = Record<Locale, T>;

export type PortraitFraming = {
	x?: number;
	y?: number;
	scale?: number;
};

export type PortraitContentImage = {
	src: string;
	alt: Localized<string>;
	framing?: PortraitFraming;
};

export type LocalizedPortraitImage = {
	src: string;
	alt: string;
	framing?: PortraitFraming;
};

export type Profile = {
	name: string;
	role: Localized<string>;
	bio: Localized<string>;
	github?: `https://${string}` | `http://${string}`;
	linkedin?: `https://${string}` | `http://${string}`;
	image?: PortraitContentImage;
};

export type LocalizedProfile = Omit<Profile, 'role' | 'bio' | 'image'> & {
	role: string;
	bio: string;
	image?: LocalizedPortraitImage;
};

// Replace these placeholders with your own name, introduction, and projects.
export const profile: Profile = {
	name: 'Tobias Olsen Nodland',
	role: {
		en: 'Backend Developer',
		nb: 'Backend utvikler'
	},
	bio: {
		en: 'A few words about you, what you do, and what you care about. Keep it short, make it personal, and let your work tell the rest of the story.',
		nb: 'Noen ord om deg, hva du gjør, og hva som er viktig for deg. Hold det kort og personlig, og la arbeidet ditt fortelle resten av historien.'
	},
	github: 'https://github.com/Gorilla-Mode',
	linkedin: 'https://www.linkedin.com/in/tobias-olsen-nodland-44b03a3a0/',
	image: {
		src: '/img/other/me.jpg',
		alt: {
			en: 'Your image description in English',
			nb: 'Din bildebeskrivelse i norsk'
		},
		framing: {
			x: 50,
			y: 50,
			scale: 1
		}
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
	image?: PortraitContentImage;
	detailImage?: PortraitContentImage;
};

export type LocalizedInterest = Omit<
	Interest,
	'title' | 'caption' | 'description' | 'image' | 'detailImage'
> & {
	title: string;
	caption: string;
	description: string;
	image?: LocalizedPortraitImage;
	detailImage?: LocalizedPortraitImage;
};

export function localizeProfile(locale: Locale): LocalizedProfile {
	return {
		name: profile.name,
		role: profile.role[locale],
		bio: profile.bio[locale],
		github: profile.github,
		linkedin: profile.linkedin,
		image: profile.image && {
			src: profile.image.src,
			alt: profile.image.alt[locale],
			framing: profile.image.framing
		}
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
		image: interest.image && {
			src: interest.image.src,
			alt: interest.image.alt[locale],
			framing: interest.image.framing
		},
		detailImage: interest.detailImage && {
			src: interest.detailImage.src,
			alt: interest.detailImage.alt[locale],
			framing: interest.detailImage.framing
		}
	};
}

// The titles, descriptions, and technologies below are examples, not real work.
// Add href, github, and image when you have real destinations and an image file.
export const projects: Project[] = [
	{
		id: 'NRL',
		title: 'NRL Obstacle Reporting',
		description: {
			en: '3. Semester project where we as a group developed a system, in partnership with the Norwegian Mapping Auhority and Air-Ambulance, for in-flight reporting of obstacles',
			nb: '3. Semesterprosjekt hvor vi som gruppe utviklet et system, i samarbeid med Karverket og Norsk Luftambulasne, for rapporering av luftfartshindre under flygning'
		},
		longDescription: {
			//TODO
			en: [
				'Use this space to explain the problem behind the project and why you chose to work on it. Give readers enough context to understand who it was for and what success looked like.',
				'Describe your approach, the decisions you made, and the part you built yourself. Close with the result or what you learned from the work.'
			],
			nb: [
				'Bruk denne plassen til å forklare problemet bak prosjektet og hvorfor du valgte å jobbe med det. Gi leserne nok kontekst til å forstå hvem det var for, og hvordan et godt resultat så ut.',
				'Beskriv fremgangsmåten din, valgene du tok, og det du bygde selv. Avslutt med resultatet eller det du lærte av arbeidet.'
			]
		},
		technologies: ['C#', 'MVC', 'mySQL', 'Docker'],
		github: 'https://github.com/Gorilla-Mode/NRL-Obstacle-Reporting'
	},
	{
		id: 'SWRPG',
		title: 'SWRPG Inventory System',
		description: {
			en: 'A work in progress inventory manager for Star Wars RPG, using a inventory grid inspired by games like DayZ and EFT',
			nb: 'Et inventar system for bruk i Star Wars RPG, med en "grid" inventar, inspirert av spill som DayZ og EFT. Fortsatt under utvikling'
		},
		longDescription: {
			//TODO
			en: [
				'Introduce the people or use case behind this project. Explain the need it addressed and the constraints that shaped the work.',
				'Walk through the most important implementation choices and your contribution. Add a concrete outcome, challenge, or lesson once this is a real project.'
			],
			nb: [
				'Presenter menneskene eller bruksområdet bak prosjektet. Forklar behovet det skulle dekke, og rammene som formet arbeidet.',
				'Gå gjennom de viktigste valgene i gjennomføringen og ditt eget bidrag. Legg til et konkret resultat, en utfordring eller en erfaring når dette er et virkelig prosjekt.'
			]
		},
		technologies: ['Odin', 'Raylib'],
		github: 'https://github.com/Gorilla-Mode/SWRPG-Inventory-System'
	},
	{
		id: 'ROC',
		title: 'Resonant Orbit Calculator',
		description: {
			en: 'A TUI program used to calculate resonant orbits around a body. Specifically designed to be used with the game Kerbal Space Program, with a focus on building satellite clusters',
			nb: 'Et TUI program for a kalkulere parameter til baner med baneresonans rundt et legeme. Laget spesielt for bruk med spillet Kerbal Space Program, med fokus på bygning av satellitnett'
		},
		longDescription: {
			//TODO
			en: [
				'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
				'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
			],
			nb: [
				'Forklar spørsmålet eller ideen som startet eksperimentet. Hva ville du teste, lage eller forstå?',
				'Fortell hvordan du utforsket ideen, hva som endret seg underveis, og hva du ville gjort videre. Bytt ut denne teksten med det som gjør prosjektet særegent.'
			]
		},
		github: 'https://github.com/Gorilla-Mode/ROC',
		technologies: ['C', 'PDcurses'],
		image: {
			src: '/img/projects/roc.png',
			alt: {
				en: 'ROC',
				nb: 'ROC'
			}
		}
	},
	{
		id: 'GFP',
		title: 'GeoFlatpack',
		description: {
			en: 'A program that converts GML datasets to flatGeobuffer format with a corresponding stylesheet for symbology',
			nb: 'Et program som konverterer GML-datasett til flatGeobuffer-format med et generert, konfigurerbart stylesheet for symbologi.'
		},
		longDescription: {
			//TODO
			en: [
				'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
				'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
			],
			nb: [
				'Forklar spørsmålet eller ideen som startet eksperimentet. Hva ville du teste, lage eller forstå?',
				'Fortell hvordan du utforsket ideen, hva som endret seg underveis, og hva du ville gjort videre. Bytt ut denne teksten med det som gjør prosjektet særegent.'
			]
		},
		technologies: ['Go', 'FlatGeobuf', 'GDAL'],
		github: 'https://github.com/Gorilla-Mode/GeoFlatpack',
		href: 'https://gorilla-mode.github.io/GeoFlatpack/'
	},
	{
		id: 'GST',
		title: 'GhosttyStatus',
		description: {
			en: 'A collection of software tools developed by Gorilla-Mode.',
			nb: 'En samling av programvareverktøy utviklet av Gorilla-Mode.'
		},
		longDescription: {
			//TODO
			en: [
				'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
				'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
			],
			nb: [
				'Forklar spørsmålet eller ideen som startet eksperimentet. Hva ville du teste, lage eller forstå?',
				'Fortell hvordan du utforsket ideen, hva som endret seg underveis, og hva du ville gjort videre. Bytt ut denne teksten med det som gjør prosjektet særegent.'
			]
		},
		technologies: ['C'],
		github: 'https://github.com/Gorilla-Mode/GST'
	},
	{
		id: '218',
		title: 'GhosttyStatus',
		description: {
			en: 'A collection of software tools developed by Gorilla-Mode.',
			nb: 'En samling av programvareverktøy utviklet av Gorilla-Mode.'
		},
		longDescription: {
			//TODO
			en: [
				'Explain the question or idea that started this experiment. What did you want to test, make, or understand?',
				'Share how you explored it, what changed along the way, and what you would do next. Replace this text with the details that make the project distinctive.'
			],
			nb: [
				'Forklar spørsmålet eller ideen som startet eksperimentet. Hva ville du teste, lage eller forstå?',
				'Fortell hvordan du utforsket ideen, hva som endret seg underveis, og hva du ville gjort videre. Bytt ut denne teksten med det som gjør prosjektet særegent.'
			]
		},
		technologies: ['C'],
		github: 'https://github.com/Gorilla-Mode/GhosttyStatus'
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
		},
		image: {
			src: '/img/interests/river_monster_1.jpg',
			alt: {
				en: 'Fishing',
				nb: 'Fiske'
			},
			framing: {
				x: 25,
				y: 50,
				scale: 1.0
			}
		},
		detailImage: {
			src: '/img/interests/huge_fish_1.jpg',
			alt: {
				en: 'Fishing',
				nb: 'Fiske'
			},
			framing: {
				x: 50,
				y: 50,
				scale: 1.0
			}
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
		},
		image: {
			src: '/img/interests/Cooking_2.jpg',
			alt: {
				en: 'Cooking',
				nb: 'Matlaging'
			},
			framing: {
				x: 40,
				y: 50,
				scale: 1.0
			}
		},
		detailImage: {
			src: '/img/interests/cooking_1.jpg',
			alt: {
				en: 'Cooking',
				nb: 'Matlaging'
			},
			framing: {
				x: 50,
				y: 50,
				scale: 1.0
			}
		}
	},
	{
		id: 'Photography',
		title: {
			en: 'Photography',
			nb: 'Fotografi'
		},
		caption: {
			en: 'Photography',
			nb: 'Fotografi'
		},
		description: {
			en: 'Replace this placeholder with another interest and a short, personal note about why it matters to you.',
			nb: 'Bytt ut denne plassholderen med en annen interesse og en kort, personlig tekst om hvorfor den betyr noe for deg.'
		},
		image: {
			src: '/img/interests/photography_2.jpg',
			alt: {
				en: 'Photography',
				nb: 'Fotografi'
			},
			framing: {
				x: 30,
				y: 50,
				scale: 1.2
			}
		},
		detailImage: {
			src: '/img/interests/photography_1.jpg',
			alt: {
				en: 'Photography',
				nb: 'Fotografi'
			},
			framing: {
				x: 55,
				y: 50,
				scale: 1.0
			}
		}
	}
];
