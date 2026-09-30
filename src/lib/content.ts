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
		nb: 'Backend utvikling'
	},
	bio: {
		en: 'I am Tobias, 24 years old from Tvedestrand and I am very interested in technology and software development. I mainly focus on backend, UX and architecture',
		nb: 'Jeg er Tobias, 24 år fra Tvedestrand og er jeg veldig interessert i teknologi og programvareutvikling. I hovedsak holder jeg på med backend, UX og arkitektur'
	},
	github: 'https://github.com/Gorilla-Mode',
	linkedin: 'https://www.linkedin.com/in/tobias-olsen-nodland-44b03a3a0/',
	image: {
		src: '/img/other/me.jpg',
		alt: {
			en: 'Me',
			nb: 'Meg'
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
		href: 'https://gorilla-mode.github.io/GeoFlatpack/',
		image: {
			src: '/img/projects/gfp_1.png',
			alt: {
				en: 'GeoFlatpack',
				nb: 'GeoFlatpack'
			}
		}
	},
	{
		id: 'GST',
		title: 'GhosttyStatus',
		description: {
			en: 'A small WIP utility to display a status bar in the Ghostty terminal emulator',
			nb: 'Et lite verktøy som viser en status-bar i terminal emulatoren Ghostty. Fortsatt under utvikling'
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
		title: 'ShelterLog',
		description: {
			en: '4. Semester project where we as a group developed a system to route to shelters and supplies in the event of an emergency',
			nb: 'Et 4. semester prosjekt hvor vi som en gruppe utviklet et system for å rute til tilfluktsrom og forsyninger i en nødsituasjon'
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
		technologies: ['Python', 'TypeScript', 'Postgres', 'PostGIS'],
		github: 'https://github.com/sivert-svanes/IS-218-Prosjekt'
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
			en: 'Fishing is one of my favorite activities and hobby when I am not in front of the computer. I mainly fish stillwater, ' +
				   'but whenever im out at sea i bring my rod. I fish mostly for trout, but i have a project of catching a big fish of' +
				   'all the freshwater species in Norway. Currenlty im fishing for a big Pike and Perch',
			nb: 'Fiske er en av mine favoritt aktiviterer og hobby når jeg ikke sitter foran datamaskinen. Jeg fisker så si bare i ferksvann på stang, ' +
				  'men hvis jeg er på sjøen så blir stanga med. Jeg for det meste etter aure, men har et lite prosjekt med å fange' +
				  ' en stor fisk av alle ferksvannsartene i Norge. Så nå er jeg på jakt etter en stor tryte og gjedde'
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
			en: 'I also really enjoy cooking, not fish ironically. For the most part im cooking Italian and French cuisine. From Italy' +
				  ' Bolognese and Carbonara are clear favorites, obviously made with the correct cuts, cheese and wine. From France ' +
				  'I mostly cook meat dishes and sauces, entrecote with sauce financiere(madeira sauce) is hard to beat',
			nb: 'Jeg er også veldig glad i å lage mat, ironisk nok ikke fisk. For det meste så lager jeg Italienske og Franske retter' +
				  ' fra Italia eller Bolognese og Carbonara klare favoritter, og de må da selvfølgelig lages med riktig kjøtt, ost, vin, osv.' +
				  ' Fra Frankrike lager jeg mest kjøttretter og sauser, entrecote med financiere saus(madeira saus) er det ikke mye som slår '
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
			en: 'Photography is also a big interest of mine. For the most part i take pictures of nature, birds and cars, but' +
				  'if i see a good picture i take it. I take my pictures on an analog Nikon F3, i also use a DSLR but i dont have many good lenses for it',
			nb: 'Fotografi er også en stor interesse for meg. Jeg tar for det meste bilder av natur, fugl og biler, men hvis ' +
				  'jeg ser et fint motiv så blir det et bilde. Bildene tar jeg med en analog Nikon F3, jeg bruker også' +
				  'en digital speilrefleks, men har ikke så mange gode linser til den.'
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
