# Ryan Nguyen's Portfolio Website

Welcome to my Portfolio Website. In my portfolio, you will see many projects, certifications, social media posts, videos, and description about myself. If you want to use this template, here's how.

## To Get Started

1. Click on the Code Button next to Add File.
2. Copy the HTTPS web URL after clicking on the Code Button.
3. Type in "git clone https://github.com/RyannWinn/portfolio-website-v2.git" on the terminal of your IDE of choice.

## Put it online

**GitHub Pages** (free)
1. Make a new public repo named to whatever you want.
2. Upload `index.html` to the root of it.
3. Settings → Pages → Source: `main` branch, `/root`. Live in about a minute.

## Editing it

Open `index.html` in VS Code. The structure follows the menu-board system — sections are lettered A–F and items are coded (B1, C6, D2).

- **Text**: everything is plain HTML. Search for a phrase you see on the page and edit it in place.
- **Colors**: the palette lives in `:root` at the `styles.css` file. `--leaf` is a green color, `--hot` is the neon pink, `--forest` is the dark green used for text-level accents.
- **Adding a project**: copy an entire `<article class="proj">` block, paste it below the last one, bump the code (`B4`), and swap the text.