# acmw-website
The ACM-W website for the University of Cincinnati chapter

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Project structure

```text
public/              Static files copied as-is (Bootstrap, jQuery, images, CNAME, style.css)
src/layouts/
  Layout.astro       Shared <head>, navbar and scripts
src/pages/           One file per page (index, about, involvement, meetings, resources, contact)
```

Pages are built as `about.html`, `contact.html`, etc. (`build.format: 'file'`) so existing URLs keep working.

## Updating content

- **Meetings:** edit the `months` array at the top of `src/pages/meetings.astro`. Add `links` to a meeting to show
  Teams / Recording / Slides links instead of "N/A".
- **Home page event & announcements:** `src/pages/index.astro`.
- **Team members:** `src/pages/about.astro` (headshots go in `public/img/`).
