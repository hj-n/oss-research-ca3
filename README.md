# OSS for Research

CA3 retreat · Anton, Marcel, Hyeon, and Arvind

A Slidev presentation with one Markdown subdeck per speaker and one shared design: Inter, white background, bullet points, and compact margins. Project figures and screenshots are stored in `public/`.

## Start

Use Node.js 24 LTS (see `.nvmrc`).

```sh
nvm use
npm ci
npm run dev
```

Published slides: https://hj-n.github.io/oss-research-ca3/

Open http://localhost:3030. Arrow keys move through the slides; `p` opens presenter mode. Speaker notes stay in Markdown comments.

Preview only your own subdeck, with the same theme and styles:

```sh
npm run speaker -- introduction
npm run speaker -- hyeon
npm run speaker -- marcel
npm run speaker -- arvind
npm run speaker -- interactive
```

Previews use port 3030 by default. To run alongside the combined deck, use `PORT=3031 npm run speaker -- hyeon` and open http://localhost:3031. The individual preview creates an ignored temporary entry in the repository root and removes it when stopped.

## Four people, one presentation

| Speaker | Edit this file | Current content |
| --- | --- | --- |
| Hyeon | `parts/2_hyeon.md` | Title + ZADU/DR introduction + GitHub capture + source slides + maintenance and contribution lessons |
| Marcel | `parts/4_marcel.md` | Title + experiences + challenges and learnings |
| Arvind | `parts/5_arvind.md` | Title + content template |
| All | `parts/6_interactive.md` | Speaking Session: project, challenges, and impact |

`slides.md` holds the cover and the order of the parts. After the cover comes the shared opening in `parts/1_introduction.md`: “Software Carries Research Knowledge” → “Research Software We Build On” (Vega-Lite, Webstrates, D3) → “Why Publish Your Research Software?” → “Where to Publish Your Research Software?” → “Document Your Code” → “Make Your Code Ready for Agents” → “Licensing Your Code” → “What Happens After We Publish the Code?” → “Why Bother Building and Maintaining It?”. Speaker sections then follow in the order Hyeon → Marcel → Arvind, and the deck ends with the Speaking Session in `parts/6_interactive.md`.

Each `src` imports a whole part file, and slides appear in the order they are written in that file. Add slides inside your own file using a line containing `---`. Each speaker subdeck starts with a `part-title` block.

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
# Edit parts/2_hyeon.md, then preview.
npm run build
git add parts/2_hyeon.md
git commit -m "Update Hyeon's slides"
git push -u origin slides/hyeon
```

Open a pull request into `main`. Use your own name and path in the commands. Separate files minimize merge conflicts. PRs automatically build the full deck; the build artifact is available as `github-pages` in the workflow run. Every push to `main` automatically deploys the combined deck to https://hj-n.github.io/oss-research-ca3/. Pull requests build without deploying. A failed build should be fixed before merging. Branch protection / required reviews can be configured in GitHub by the repository owner.

## Build and export

```sh
npm run build       # Static website in dist/
npm run preview     # Preview dist/ at http://localhost:4173
npx playwright install chromium  # First PDF export only
npm run export      # output/oss-for-research.pdf
```

For hosting under a repository subpath, use `npm run build -- --base /<repository-name>/`. The GitHub Actions workflow builds with `/oss-research-ca3/` as the base path and deploys pushes to `main` automatically. It runs no tests or PDF exports.

Inter is loaded from Google Fonts in weights 400, 600, and 700. Presenting and exporting require an internet connection to load the font, unless it is installed locally or already cached. A generic sans-serif is used as a fallback.

## Sources

- Hyeon's content: `CA3_Open_Source_as_Research_ZADU_minimal.pdf`, provided by Hyeon. All seven slides are represented. The editable Vue components in `components/` preserve its timeline, download chart, and contribution/responsibility layout. Counts and PR references reproduce that source and are not live repository statistics. The source PDF is not redistributed in this repo.
- ZADU/DR background: current project README at https://github.com/hj-n/zadu, checked 2026-10-26. The real GitHub capture is `public/hyeon/zadu-github.png`; visible counts reflect that capture date.
- Hyeon title illustration: original embedded JPEG extracted unchanged from page 1 of the supplied ZADU PDF, saved as `public/hyeon/zadu-story.jpg`.
- CA3 logo: copied from the existing local `/Users/hj/Downloads/ca3_logo.png`.
- Slidev: https://sli.dev/ — [importing slides](https://sli.dev/features/importing-slides), [hosting](https://sli.dev/guide/hosting).

The project illustrations in `public/examples/` come from the official research pages: [Vega-Lite](https://vis.mit.edu/pubs/vega-lite/), [Webstrates](https://webstrates.net/), and [D3](https://idl.uw.edu/papers/d3). They are shown unchanged in `components/ResearchSoftwareExamples.vue`; the Webstrates example is animated.
