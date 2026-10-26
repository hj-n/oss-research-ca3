# OSS for Research

CA3 retreat · Anton, Marcel, Hyeon, and Arvind

A Slidev presentation with one Markdown subdeck per speaker and one shared design: Arial, white background, bullet points, and compact margins. Only the CA3 logo is used.

## Start

Use Node.js 24 LTS (see `.nvmrc`).

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:3030. Arrow keys move through the slides; `p` opens presenter mode. Speaker notes stay in Markdown comments.

Preview only your own subdeck, with the same theme and styles:

```sh
npm run speaker -- anton
npm run speaker -- marcel
npm run speaker -- hyeon
npm run speaker -- arvind
```

Previews use port 3030 by default. To run alongside the combined deck, use `PORT=3031 npm run speaker -- hyeon` and open http://localhost:3031. The individual preview creates an ignored temporary entry in the repository root and removes it when stopped.

## Four people, one presentation

| Speaker | Edit this file | Current content |
| --- | --- | --- |
| Anton | `parts/anton.md` | Title + content template |
| Marcel | `parts/marcel.md` | Title + content template |
| Hyeon | `parts/hyeon.md` | Title + seven slides adapted from the supplied ZADU PDF |
| Arvind | `parts/arvind.md` | Title + content template |

`slides.md` sets the cover and order: Anton → Marcel → Hyeon → Arvind. Each `src` includes every slide in that speaker's file. Add slides inside your own file using a line containing `---`; no edits to the master are needed. The deck contains 15 slides: the shared cover, a title + content template for each of Anton, Marcel, and Arvind, and a title + seven content slides for Hyeon. Each subdeck starts with a `part-title` block; replace its talk title and keep your name below it.

```md
# One clear message

- First point
- Second point
- Third point

<!-- Optional speaker notes. -->

---

# Next slide

- Another point
```

Keep roughly 3–5 short bullets per slide. Shared typography, margins, and table styling live in `styles/index.css`. Change those centrally, and avoid inline font sizes or slide-specific backgrounds. Put any future assets under `public/<speaker>/` and reference them as `/<speaker>/filename`.

## GitHub collaboration

The shared repository is [hj-n/oss-research-ca3](https://github.com/hj-n/oss-research-ca3), with `main` as the combined presentation branch.

```sh
git clone https://github.com/hj-n/oss-research-ca3.git
cd oss-research-ca3
nvm use
npm ci
npm run dev
```

Give all four people collaborator access in that repository, or use forks. For each contribution:

```sh
git switch main
git pull --ff-only
git switch -c slides/hyeon
# Edit parts/hyeon.md, then preview.
npm run build
git add parts/hyeon.md
git commit -m "Update Hyeon's slides"
git push -u origin slides/hyeon
```

Open a pull request into `main`. Use your own name and path in the commands. Separate files minimize merge conflicts. PRs automatically build the full deck; download `oss-for-research-preview` from the workflow run to inspect the merged result. Extract the artifact and serve it over HTTP (for example, `npx vite preview --outDir <extracted-folder>`); it is a website, so do not open `index.html` directly. A failed build should be fixed before merging. Branch protection / required reviews can be configured in GitHub by the repository owner.

## Build and export

```sh
npm run build       # Static website in dist/
npm run preview     # Preview dist/ at http://localhost:4173
npx playwright install chromium  # First PDF export only
npm run export      # output/oss-for-research.pdf
```

For hosting under a repository subpath, use `npm run build -- --base /<repository-name>/`. This project does not publish anything automatically.

Arial must be installed on the presenting/exporting computer. It is available on this Mac; the font is not redistributed in Git. Other machines fall back to a system sans-serif until Arial is installed.

## Sources

- Hyeon's content: `CA3_Open_Source_as_Research_ZADU_minimal.pdf`, provided by Hyeon. All seven slides are represented. The editable Vue components in `components/` preserve its timeline, download chart, and contribution/responsibility layout. Counts and PR references reproduce that source and are not live repository statistics. The source PDF is not redistributed in this repo.
- Hyeon title illustration: original embedded JPEG extracted unchanged from page 1 of the supplied ZADU PDF, saved as `public/hyeon/zadu-story.jpg`.
- CA3 logo: copied from the existing local `/Users/hj/Downloads/ca3_logo.png`.
- Slidev: https://sli.dev/ — [importing slides](https://sli.dev/features/importing-slides), [hosting](https://sli.dev/guide/hosting).
