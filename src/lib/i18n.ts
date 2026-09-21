import { getContext } from 'svelte';
import type { Locale } from './locale';

export type { Locale } from './locale';

export type LocaleContext = {
	readonly locale: Locale;
	switchLanguage: () => void;
};

export const localeContextKey = Symbol('locale');

export function getLocaleContext(): LocaleContext {
	return getContext<LocaleContext>(localeContextKey);
}

export const ui = {
	en: {
		portfolio: 'Portfolio',
		pageDescription: (name: string) => `About, selected projects, and interests by ${name}.`,
		skipToContent: 'Skip to content',
		about: 'About',
		projects: 'Projects',
		interests: 'Interests',
		mainNavigation: 'Main navigation',
		identityAbout: (name: string) => `${name} — about`,
		exploreProjects: 'Explore projects',
		profileImagePlaceholder: 'Portrait to be added',
		selectedWork: 'Selected work',
		selectedProjects: 'Selected projects',
		myInterests: 'My interests',
		interestImagePlaceholder: 'Interest image to be added',
		selectInterest: (name: string) => `Show details about ${name}`,
		interestSelected: (name: string) => `${name} selected`,
		technologies: 'Technologies',
		backToTop: 'Back to top',
		allProjects: 'All projects',
		projectImagePlaceholder: 'Project image to be added',
		aboutProject: 'About the project',
		projectDetails: 'Project details',
		links: 'Links',
		viewOnGithub: 'View on GitHub',
		githubPlaceholder: 'GitHub link to be added',
		linkedinPlaceholder: 'LinkedIn link to be added',
		visitProject: 'Visit project',
		switchLabel: 'Switch language to Norwegian Bokmål (Norsk)'
	},
	nb: {
		portfolio: 'Portefølje',
		pageDescription: (name: string) => `Om ${name}, utvalgte prosjekter og interesser.`,
		skipToContent: 'Hopp til innhold',
		about: 'Om meg',
		projects: 'Prosjekter',
		interests: 'Interesser',
		mainNavigation: 'Hovednavigasjon',
		identityAbout: (name: string) => `${name} — om meg`,
		exploreProjects: 'Utforsk prosjekter',
		profileImagePlaceholder: 'Portrett kommer',
		selectedWork: 'Utvalgte arbeider',
		selectedProjects: 'Utvalgte prosjekter',
		myInterests: 'Mine interesser',
		interestImagePlaceholder: 'Interessebilde kommer',
		selectInterest: (name: string) => `Vis detaljer om ${name}`,
		interestSelected: (name: string) => `${name} er valgt`,
		technologies: 'Teknologier',
		backToTop: 'Til toppen',
		allProjects: 'Alle prosjekter',
		projectImagePlaceholder: 'Prosjektbilde kommer',
		aboutProject: 'Om prosjektet',
		projectDetails: 'Prosjektdetaljer',
		links: 'Lenker',
		viewOnGithub: 'Se på GitHub',
		githubPlaceholder: 'GitHub-lenke kommer',
		linkedinPlaceholder: 'LinkedIn-lenke kommer',
		visitProject: 'Besøk prosjektet',
		switchLabel: 'Bytt språk til engelsk'
	}
} satisfies Record<Locale, Record<string, string | ((name: string) => string)>>;
