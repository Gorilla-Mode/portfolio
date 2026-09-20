# Portfolio design

A quiet, monochrome portfolio: short About and Projects sections on one scrolling page.
Large typography, generous spacing, thin borders, and square shapes give the work room to breathe.

- **Palette:** Every UI color is defined exclusively in `src/app.css`. Components use its CSS
  variables for backgrounds, surfaces, text, borders, links, focus, and selection. The accent is a
  darker gray, keeping the entire page monochrome. Change colors there, never in component styles.
- **Shape:** All corners are square. Project cards and the header mark have a solid backing shape
  offset equally **6px down and 6px right**, using `--color-accent`. Use `--shadow-offset` with no
  blur or spread; leave room around the shape so it is never clipped.
- **Typography:** System sans-serif for headings and body copy; system monospace for section
  numbers and technology labels. Large, tightly spaced headings contrast with relaxed body text.
- **Layout:** A centered column up to 960px wide. Compact header, spacious introduction, two-column
  project grid, and a small footer. At 640px and below, projects stack into a single column.
- **Interaction:** Native section links, underlined hover states, visible keyboard focus, and a
  skip link. Smooth scrolling only when reduced motion is not requested. No decorative animations.
- **Content:** Edit the name, role, biography, and typed project list in `src/lib/content.ts`.
  All initial content is placeholder content. An optional HTTP(S) project `href` adds a title link; omit it
  until a real URL exists. Replace the placeholder note in the Projects section when adding real work.

Keep shared tokens and base styles in global CSS, layout styles in scoped Svelte components,
and the page dark-only. No rounded corners, gradients, imagery, external fonts, or extra UI libraries.
