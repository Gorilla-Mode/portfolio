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
	video?: string;
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
			en: 'Semester project(3.) where we as a group developed a system, in partnership with the Norwegian Mapping Auhority and Air-Ambulance, for in-flight reporting of obstacles',
			nb: 'Semesterprosjekt(3.) hvor vi som gruppe utviklet et system, i samarbeid med Karverket og Norsk Luftambulasne, for rapporering av luftfartshindre under flygning'
		},
		longDescription: {
			//TODO
			en: [
				'In collaboration with the Norwegian Mapping Authority and the Norwegian Air Ambulance, we as a group developed a' +
					' system to make it easy to report aviation obstacles during flight. The system we are developing helped us land' +
					' an internship at the Norwegian Mapping Authority, where we are working on the same issue now.',
				'The project was built in C# and ASP.net MVC and runs in a Docker container, it is connected to another container' +
					' that runs the MariaDB database. For ORM we used Dapper which gives us complete control over SQL queries, we also used' +
					' "database first" approach.',
				'A big challenge we had was how to unit test dapper queries? This is easy with EF, but Dapper is raw SQL and cannot' +
					'be easily mocked. Our solution was to start a SQLite database in memory and run the tests against this. The problem was' +
					' that the SQL dialect to MariaDB and SQLite is not exactly the same.'
			],
			nb: [
				'I sammarbeid med Kartverket og Norsk Luftambulanse utviklet vi som gruppe et system med å gjøre det enkelt å' +
					'rapportere luftfartshindre under flygning som mål. Systemet vi utvikler var med på å lande oss en praksisplass hos' +
					'Kartverket, der vi jobber med akkurat samme problemstilling nå.',
				'Prosjektet er bygget i C# og ASP.net mvc og kjører i en Docker container, den er koblet til en annen container som' +
					'kjører MariaDB databasen. For ORM brukte vi Dapper som gir oss fullstendig kontroll over SQl-spørringer, vi kjørte også' +
					'"database first".',
				'En stor utfordring vi hadde var hvordan unit-teste dapper spørringer? Dette er enkelt med f.eks EF, men' +
					' Dapper er rå SQL og en kan ikke bruke mocks på samme måte. Løsningen vår var å starte en egen SQLite database i minne og kjøre' +
					'testene mot denne. Ulepen her var at SQL dialekt til MariaDB og SQLite ikke er helt likt'
			]
		},
		technologies: ['C#', 'MVC', 'mySQL', 'Docker'],
		github: 'https://github.com/Gorilla-Mode/NRL-Obstacle-Reporting',
		image: {
			src: '/img/projects/nrl.png',
			alt: {
				en: 'NRL',
				nb: 'NRL'
			}
		}
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
				'Me and some friends play Star Wars RPG, and we use Tabletop Simulator for this, but Tabletop has a big weakness.' +
					'Items that characters have are cards, these cards in tabletop use textures in the form of a link. Links can change,' +
					' and when they do the texture disappears from the card, and it does not support synchronization across card instances.',
				'Therefore im developing a system that keeps track of items to characters, we have switched to using a grid system' +
					' opposed to the weight-based system in the rules.',
				'The program is written in 100% Odin, basically C with a solid standard library and fantastic buildsystem that is very similar the one' +
					' in Golang. The program uses an "immediate mode" ui and runs on GPU with raylib.'
			],
			nb: [
				'Jeg og noen venner spiller Star Wars RPG, og bruker Tabletop Simulator til dette, men Tabletop har en stor svakhet.' +
					'gjenstander som karakterer har er kort, disse kortene i tabletop bruker textures i form av en link. Linker kan endres,' +
					' og dermerd forsvinner texturen fra kortet, og det støtter ikke synkronisering på tvers av instanser.',
				'Derfor holder jeg på med å utvikle et egent system for å holde styr på gjenstander til karakterer, videre har vi ' +
					'byttet til å bruke et grid system ovenfor vekt systemet i reglene.',
				'Programmet er skrevet i 100% Odin, basically C med et solid standard library og fantastisk buildsystem som er veldig likt Golang sitt.' +
					' Programmet bruker en "immediate mode" ui og kjører på GPU med raylib.'
			]
		},
		technologies: ['Odin', 'Raylib'],
		github: 'https://github.com/Gorilla-Mode/SWRPG-Inventory-System',
		image: {
			src: '/img/projects/swis.png',
			alt: {
				en: 'SWRPG',
				nb: 'SWRPG'
			}
		}
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
				'To embark on missions far from Kerbin(Earth in Kerbal Space Program) it is necessary to create satellite networks' +
					' that guarantee continuous communication with mission control.',
				' This can be achieved by creating a satellite network' +
					' around planets and moons, where at least three relays are placed evenly with the same orbit. Both on an equatorial and ' +
					'polar orbit. For this to be most optimal and time-efficient, multiple relays are carried in the same launch vehicle',
				'The main challenge is to place the relays evenly with respect to each other from the same launch vehicle. My solution is ROC' +
					', a TUI program that calculates an elliptical orbit with a given resonance to the target orbit, based on the number of relays' +
					' to be placed. Then one revolution in the elliptical orbit corresponds to e.g. 10 revolutions in the target orbit, and then by launching a' +
					' relay when the orbits intersect, until all relays are launched, all relays will be placed with equal spacing'
			],
			nb: [
				'For å kunne legge ut på oppdrag lagt i fra Kerbin(Jorda i Kerbal Space Program) er det nødvendig og lage satellittnettverk' +
					'som garanterer kontinuerlig kommunikasjon med mission control.',
				'Dette kan gjøres ved å lage et satellittnettverk rundt planeter og måner, der det går minst tre reler med likt ' +
					'mellomrom i bane. Både på en ekvator og polarbane. For å gjøre dette mest optimalt og tidsbesparende skyter en opp flere' +
					' reler på en gang i samme fartøy.',
				'Utfordingen er å plassere relene med jevnt mellomrom fra samme fartøy. Løsningen min er ROC som kalkulerer en elliptisk' +
					' bane med en gitt resonans til målbanen, basert på antallet reler som skal plasseres. Da tilsvarer en runde i den elliptiske banen' +
					' f.eks 10 runder i målbanen, og da med å skyte ut en rele når banene krysser, til en har skutt ut alle, vil alle relene plasseres med likt' +
					' mellomrom'
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
				'Traditional map services use maps where rasterization and styling occurs on the server(raster maps), the disadvantage of this' +
					' is that PNG or TIFF files are large and use a lot of network to be sent and storage to save. Therefore, vector maps are used ' +
					'to a greater extent' +
					' where the raw vector data is sent to the client along with information to the map engine about how this should be displayed.',
				'GeoFlatpack is a tool that converts GML datasets to flatGeobuf format with GDAL, which is a binary vector format that is much' +
					' smaller than GML. Further, it loads the FGB file into memory and lets a user define and generate a stylesheet for the map engine,' +
					' ensuring that the map is displayed correctly. Currently, only maplibre is supported.',
				'Then both the FGB file and the stylesheet are sent to the map engine and the client renders it. From testing, the reduction in' +
					' file size is significant. A 500Mb GML file is reduced to about a 110 Mb FGB with a stylesheet under a Mb. This does not take into account' +
					' the amount of Gb of PNG files that had been generated and stored on a traditional raster service.'
			],
			nb: [
				'Tradisjonelle karttjenester bruker kart der rasterisering og styling skjer på serveren(raster-kart), ulempen med dette' +
					' er at PNG eller TIFF filer er store og bruker mye nett på å sendes. Derfor brukes vektor kart i større og større grad' +
					' der den rå vektor dataen sendes til klienten sammen med informasjon til kartmotoren om hvordan dette skal vises.',
				'GeoFlatpack er et verktøy som konverterer GML datasett til flatGeobuf format med GDAL, som er et binært vektor ' +
					'format som er mye mindre enn GML. Videre så lastes FGB filen i minne og lar en definere og generere styling til kartmotoren,' +
					' nå støttes kun maplibre.',
				'Da sendes både FGB filen og stylesheetet til kartmotoren og lar klienten rendre det. Fra tester reduseres en omtrent 500Mb GML fil' +
					' ned til 110 Mb FGB med et stylesheet under en Mb. Dette tar ikke høyde for hvor mange Gb med PNG filer som hadde blitt generert' +
					'og lagret på server med en tradisjonell rasterjeneste'
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
				'Ghostty is the terminal emulator I use, and currently does not support a status bar in the same way as in f.eks TMUX.',
				'Therefore im developing a custom status bar for Ghostty that runs in a separate window, and gives information about' +
					' CPU, RAM -usage, etc.'
			],
			nb: [
				'Ghostty er terminal emulatoren jeg bruker, og nå støttes det ikke en status-bar på samme måte som i f.eks TMUX.',
				'Derfor holder jeg på og utvikle en egen status-bar til Ghostty som kjører i ett eget vindu, og gir informasjon om' +
					' CPU, RAM -bruk, osv.'
			]
		},
		technologies: ['C'],
		github: 'https://github.com/Gorilla-Mode/GST',
		image: {
			src: '/img/projects/gst2.png',
			alt: {
				en: 'GhosttyStatus',
				nb: 'GhosttyStatus'
			}
		}
	},
	{
		id: '218',
		title: 'ShelterLog',
		description: {
			en: 'Semester project(4.) where we as a group developed a system to route to shelters and supplies in the event of an emergency',
			nb: 'Et semester prosjekt(4.) hvor vi som en gruppe utviklet et system for å rute til tilfluktsrom og forsyninger i en nødsituasjon'
		},
		longDescription: {
			//TODO
			en: [
				'We developed a system to find the fastest route to the nearest shelter in an emergency situation, where the route' +
					' avoided active emergency areas such as fires, flooding, etc. Further, the program also supported finding the route to' +
					' the nearest supplies from a selected shelter, such as water and medicine.',
				'This was developed as a webapp with a Python backend and a Postgres database with PostGIS.'
			],
			nb: [
				'Vi utviklet et system for å finne raskeste vei til nærmeste tilfuktsrom i en krisesituasjon, der rutingen unngikk kriseområder.' +
					' Som flommer, brann, osv. Videre støttet programmet også å finne vei fra tilfluktsrom til ressurser som manglet, f.eks vann og medisin.',
				'Dette ble utviklet som en webapplikasjon med en Python backend og en Postgres database med PostGIS.'
			]
		},
		technologies: ['Python', 'TypeScript', 'Postgres', 'PostGIS'],
		github: 'https://github.com/sivert-svanes/IS-218-Prosjekt',
		video: 'https://github.com/user-attachments/assets/5c992780-a2aa-41cc-8a2d-52d6fa990b9b'
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
