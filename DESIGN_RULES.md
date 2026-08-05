# EZHire Release Page Design Rules

- Keep the current visual style across the whole page and all future milestones.
- Use the milestone dropdown to control the full page content.
- Keep the milestone control matched to the Figma design: red `Milestone:` label, white 342px custom dropdown, red border, 16px radius, and local arrow asset.
- Use the custom milestone dropdown menu for styled white options, soft open/close animation, keyboard navigation, and no mouse-click outline on the dropdown container.
- Keep selected milestones shareable through the `?milestone=<milestone-id>` URL query parameter.
- Do not duplicate HTML pages for each milestone.
- Add new milestones as data objects in `script.js`.
- Use release card counts as the source of truth for issue counts.
- Sync tab counts, the donut chart, and the issue distribution legend from the number of cards in each tab.
- Keep the donut chart as SVG arc `<path>` segments.
- Preserve the current donut hover, tooltip, keyboard focus, and active segment behavior.
- Keep issue distribution labels and colors configured in `issueDistribution`.
- Preserve the current spacing, card style, colors, typography, and button interactions.
- Use `stgUrl` and `ticketUrl` fields for feature card external links, with links opening in a new tab.
- Use `showBadge: true` on a card to show the non-clickable `Deployed` badge; use `showBadge: false` or omit it to hide the badge.
- Store milestone-specific images in milestone folders under `images/`, such as `images/23-7-2026/`.
