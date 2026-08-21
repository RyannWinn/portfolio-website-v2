# Ryan Nguyen — portfolio site

One file: `index.html`. Images, the event video, and your résumé PDF are all embedded inside it, so there's nothing else to keep alongside it. Double-click to open it locally, or drop it on any host.

## Put it online

**GitHub Pages** (free, gives you `ryannwinn.github.io`)
1. Make a new public repo named `ryannwinn.github.io`.
2. Upload `index.html` to the root of it.
3. Settings → Pages → Source: `main` branch, `/root`. Live in about a minute.

**Netlify Drop** (fastest, no repo)
Go to app.netlify.com/drop and drag `index.html` in. You get a URL immediately and can attach a custom domain later.

## Editing it

Open `index.html` in VS Code. The structure follows the menu-board system — sections are lettered A–F and items are coded (B1, C6, D2), same as the boards you designed.

- **Text**: everything is plain HTML. Search for a phrase you see on the page and edit it in place.
- **Colors**: the palette lives in `:root` at the top of the `<style>` block. `--leaf` is the R&B green, `--hot` is the neon pink, `--forest` is the dark green used for text-level accents.
- **Adding a project**: copy an entire `<article class="proj">` block, paste it below the last one, bump the code (`B4`), and swap the text.
- **Adding an image**: images are base64 data URIs, which is why the file is self-contained. To add one without encoding it by hand, put the image file next to `index.html` and use a normal path — `<img src="new-poster.jpg">` — then upload both files together.

## The two demo videos

Your FitFindr and Unofficial Guide recordings are 6–7 minutes each, too large to embed. Upload them to your YouTube channel, then replace a screenshot `<figure class="shot">` with:

```html
<figure class="shot">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID"
    title="FitFindr demo" frameborder="0" allowfullscreen></iframe>
  <figcaption>Full walkthrough</figcaption>
</figure>
```

## Before you send it to recruiters

- Check that `github.com/ryannwinn` is public and has the three projects pinned. Right now the site sends people there, so it should have the code behind FitFindr and The Unofficial Guide.
- Swap the placeholder headshot for a higher-resolution version when you have one — it's currently 400×400, which is a little soft on large screens.
- Re-export the résumé PDF whenever you update it and re-embed it, or link it from Google Drive instead.
