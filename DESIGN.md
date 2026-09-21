# Portfolio design

A quiet, monochrome portfolio: short About, Projects, and Interests sections on one scrolling page,
with a dedicated detail page for each project.
Large typography, compact and consistent spacing, thin borders, and square shapes give the work room to breathe.

- **Palette:** Every UI color is defined exclusively in `src/app.css`. Components use its CSS
  variables for backgrounds, surfaces, text, borders, links, focus, and selection. The accent is a
  darker gray, keeping the entire page monochrome. Change colors there, never in component styles.
- **Shape:** All corners are square. Project cards and the header mark have a solid backing shape
  offset equally **6px down and 6px right**, using `--color-accent`. Use `--shadow-offset` with no
  blur or spread; leave room around the shape so it is never clipped. The About portrait is the sole
  exception: its 2:3 frame has a Gothic-window top, rounded by default with a pointed variant available.
- **Portrait sizing:** `PortraitImage` accepts optional `width` and `height` props containing any
  valid CSS size, including lengths, viewport units, percentages, and `min()`, `max()`, `clamp()`, or
  `calc()` expressions. Without either prop it remains responsive with a 2:3 aspect ratio. The props
  act independently: `height="600px"` and `height="100dvh"` retain the current width,
  `width="24rem"` retains the 2:3 ratio, and both can be supplied for exact dimensions. Images
  continue to cover and crop within the configured frame rather than distort. The Gothic top keeps
  its proportions relative to the portrait width, so changing the height only changes the straight
  body below it. If the frame is shorter than the arch, the arch depth is capped to the frame height.

Example with exact dimensions:

```svelte
<PortraitImage
	{image}
	placeholder={profileImagePlaceholder}
	shape="pointed"
	width="18rem"
	height="100dvh"
/>
```

- **Typography:** Jacquard 24 for headings, Jersey 20 for body copy, and Atkinson Hyperlegible Mono
  for section numbers and technology labels, each with a system font fallback. Large, tightly spaced
  headings contrast with relaxed body text. All text uses pretty wrapping and automatic hyphenation
  according to the active language when the browser has a dictionary. The homepage biography,
  selected-interest description, project detail summary, and first long-description paragraph start
  with a bright, two-line drop cap in the heading font. Role text, headings, project cards, metadata,
  and later description paragraphs do not use drop caps.
- **Layout:** A centered column up to 960px wide. Compact header and introduction, two-column
  project grid, and a small footer. Project detail pages use the same column, with a large image area
  and a text-and-metadata layout. Detail pages start with an “All projects” back link instead of the
  site header. The detail page back-link row shares the homepage header's height, without its border.
  A language button sits at the far right of the homepage header and beside the detail page back
  link. It reads like a header link, with bright text and no box. On narrow screens, it stays right
  aligned with room for the navigation. The About portrait sits to the right of the introduction,
  with its top aligned to the name heading. At 640px and below, it moves above the text, and projects
  and detail content stack into one column.
- **Spacing:** Shared spacing variables in `src/app.css` define section top/bottom padding of
  2rem/3rem, reducing to 1.5rem/2rem at 640px and below. Section headings have no extra top margin
  and use a 1.5rem gap before their content. Major content and column gaps are 2rem, reducing to
  1.5rem at 640px and below; text blocks use 1rem. Cards use 1.5rem padding, interest captions use
  a 0.75rem top gap, and the footer uses 1.5rem vertical padding. The homepage header and project
  back-link row share a 5.5rem minimum height and 1rem vertical padding, reducing to 4.5rem and
  0.75rem at 480px and below. Keep page gutters, control heights, drop-cap adjustments, and 6px
  shadow clearance independent of this spacing rhythm.
- **Interests:** The Interests section follows Projects and uses the same section-heading treatment.
  Three equal-width, pointed `PortraitImage` frames stay in one horizontal row at every viewport
  width, with responsive gaps and no horizontal scrolling. Frames are `55dvh` tall above 640px and
  `50dvh` tall at 640px and below. A caption always identifies each interest. Selecting a portrait
  updates one shared article below the row; the first entry is selected initially. The article places
  its title and drop-cap description beside a separate, default-size rounded portrait. At 640px and
  below, that portrait moves beneath the text and is centered. Portraits are native-button controls
  with visible focus, pressed state, and polite selection announcements. The selected state uses
  existing text and border colors and does not animate.
- **Background:** The dither shader is fixed to the visible viewport and fills its `100dvw` by
  `100dvh` wrapper at every screen size. Its canvas resizes with the viewport while the existing
  shader appearance, animation, and render budget remain unchanged; it does not grow with the
  scrollable document.
- **Interaction:** Native section links, dotted underlines on hovered links by default, visible keyboard focus, and a
  skip link. The entire project card links to its detail page. Smooth scrolling only when reduced
  motion is not requested. No decorative animations.
- **Content:** Edit the name, role, biography, optional portrait and social links, typed project list,
  and typed interest list in `src/lib/content.ts`.
  English (`en`) and Norwegian Bokmål (`nb`) copy lives there and in `src/lib/i18n.ts`; language
  preference matching lives in `src/lib/locale.ts`. Names, project IDs, technology names, and URLs
  stay the same in both languages. All initial content is placeholder content. Each project has a
  longer description for its detail page. Each interest has a stable ID and localized title,
  caption, shared-detail description, selector image, and separate detail image.
  Optional profile `github` and `linkedin` HTTP(S) URLs add social links beneath the biography;
  localized placeholders remain visible when they are omitted. Optional project `github` and `href`
  URLs add links on project detail pages. Optional profile, project, selector, and interest detail
  images use a source and alt text in both languages, replacing their visible placeholders. Omit
  these fields until real destinations and assets exist.
- **Language:** The button shows the destination language: `NOR` for Norsk (Bokmål) on English pages,
  `ENG` for English on Norwegian pages. The first response uses a valid `portfolio_lang` cookie or
  the browser language preference, falling back to English. Switching updates page copy, metadata,
  and the HTML language immediately, and saves the choice for one year. URLs are shared across languages.

Keep shared tokens and base styles in global CSS, layout styles in scoped Svelte components,
and the page dark-only. No rounded corners beyond the documented portrait frames, gradients, imagery
outside the About, Interests, and project detail areas, external fonts, or extra UI libraries.
