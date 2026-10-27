<div class="part-title">
<h1>Open Source from the Research</h1>
<p>Arvind</p>
</div>

---

<p class="speaker">Arvind</p>

# Anything Can Be Open Source

- Built something to make your own life easier? Share it.
- The only limits: nothing confidential, nothing proprietary.
- The side project you think is trivial is one someone else is looking for.

---

## Anecdote
# Matercolors: A Tiny Side Project

<p class="context">2020 · built during COVID, before AI coding tools</p>

- I needed Material palettes from any color for my frontend work.
- So I wrote a tiny, zero-dependency palette generator and published it on npm.
- **140,000+ downloads**, still around **2,380 a week**.
- It also became a [Figma plugin](https://www.figma.com/community/plugin/872008431843787391/matercolor).

<p class="source">Source: <a href="https://github.com/arvindcheenu/Matercolors">github.com/arvindcheenu/Matercolors</a> · <a href="https://npm.im/matercolors">npm.im/matercolors</a></p>

<!--
Download figures as quoted by Arvind. The npm API reports 140,475 downloads
for 26 April 2025 – 26 October 2026 alone (it only serves the last 18 months).
Sister repos: figma-matercolor, postcss-matercolor.
-->

---

# Ideas can come from Adjacent Work

<p class="context">Elicitation Lab · a TA need</p>

- As a TA, I played the client so students could practise requirements elicitation for visualization design.
- I wanted to rehearse that role myself.
- So I built a tool for it.

<p class="source">Source: <a href="https://github.com/arvindcheenu/elicitation-lab">github.com/arvindcheenu/elicitation-lab</a></p>

---

# Elicitation Lab: How It Works

- **In:** a client persona and a tone guide, written in Markdown.
- **Once:** a language model compiles them into a rule-based conversation graph.
- **Out:** one offline HTML file, with no AI at runtime, that anyone can navigate, with hints for coverage.
- Hans-Jörg liked it and was open to trying it in future runs of his course.

<!--
The model runs only at build time (Claude API, Chrome's built-in Gemini Nano,
WebLLM, or Ollama). The generated simulator uses a fixed, hand-written matching
engine. The build report says how many nodes were produced and whether every
latent need is reachable.
-->

---

# From Side Projects to Research Tools

<p class="context">GazePlayer · ETRA ETVIS ’26</p>

- Study: mobile eye tracking of a four-person band in rehearsal.
- I built my own player for it: synchronised videos, AOI annotation, gaze metrics.
- After the talk, people asked about the tool, and one asked if I would open-source it.
- I generalised it and released it under the MIT license.

<p class="source">Source: <a href="https://github.com/arvindcheenu/gazeplayer">github.com/arvindcheenu/gazeplayer</a></p>

<!--
GazePlayer plays every participant's Pupil Labs world video side by side,
synchronised on timestamps, with gaze, fixations and scanpaths. AOIs can be
drawn by hand or assisted by YOLO tracking or FastSAM click-to-segment.
Exports dwell-time and transition metrics. Study-specific settings now live
in an optional gazeplayer.json, so nothing is tied to the band study.
-->

---

# Not the Contribution, Still Worth Sharing

- Building tools for your own evaluation feels like routine work.
- To others, the tool can be the most reusable part of the project.
- Releasing it costs some cleanup, and the tool lives on after the paper.

---

# heed: Pulling My Research Into One Toolkit

- An attention-aware toolkit for any web page.
- **Capture** cursor, scroll, typing, actions, and (with a camera) face, expression, and gaze.
- **Record** everything as events.
- **Revisualize** attention on the page, and reduce a session to a factual report.
- Runs in the browser: video never leaves the device.

<p class="source">Source: <a href="https://github.com/arvindcheenu/heed">github.com/arvindcheenu/heed</a> · playground: <a href="https://heed.arvindchee.nu">heed.arvindchee.nu</a></p>

<!--
heed 0.5: heed.js (core, no dependencies), heed-face.js (MediaPipe face mesh,
calibrated gaze that keeps learning from clicks), heed-llm.js (optional
on-device summary written from the report with WebLLM).
-->

---

# One Paper, One Piece of heed

| From | Became in heed |
| --- | --- |
| Attention-Aware Visualization (TVCG ’25) | Capture → record → revisualize; coverage overlay; `reflect` |
| HeedVision (VIS ’26) | `who`: self, peers, all; shared events; `coordinate` |
| Band study + GazePlayer (ETVIS ’26) | Regions, fixations, dwell, transition matrix with refixations |
| Schutz et al. (2026) | Keystroke dynamics: keys, backspaces, pauses |
| ‹paper to confirm› | `verify` claims against evidence; `sample` experience sampling |

<!--
AAV: Srinivasan et al., "Attention-Aware Visualization: Tracking and Responding
to User Perception Over Time", IEEE TVCG 2025. Single viewer; capture, record,
revisualize; triggering.
HeedVision: collaborative AAV; per-user attention, display for coordination.
Band study: gaze-in-AOI dwell and AOI-to-AOI transitions carried over from
GazePlayer; heed counts refixations as self-transitions (matrix diagonal).
Schutz et al. 2026: cited in heed.js for the keystroke plugin.
TODO(Arvind): fill in the source of the verify/sample purposes, and of
webcam gaze and expressions if they come from a paper.
-->

---

# One Spec Ties It Together

- `who`: whose attention to show.
- `when`: live, the last few minutes, or a time range.
- `level`: how much to render, from `trace` to `error`.
- `purpose`: `reflect`, `verify`, `sample`, or `coordinate`, each a preset for the rest.

<p class="note">Each paper answered one question. The toolkit lets them be combined.</p>

<!--
heed.create({ spec: { purpose: 'verify' } }). Purposes are macros: they only
set knobs, and a spec is complete without one. Regions are marked in HTML with
data-heed="<id>", claims with data-heed-cites and data-heed-truth.
-->

---

# Vibe Coding and Open Source Go Hand in Hand

- Agents make the cost of a working tool very low.
- So more side projects are worth finishing and sharing.
- Agents learn from open code, and open code with good docs is easier for agents to extend.

<!-- Link back to Marcel's AGENTS.md slide. -->

---

# Vibe Responsibly

- Read and run what you ship. You are still the author.
- Say what you tested, and what you did not.
- Check the licenses of what you pull in, and add your own.
- Keep data on the device where you can.
- Disclose that AI helped.

<!--
heed's README has a "Tested" section that also lists what was not tested
(real phone, real eye movement, summary on a real GPU, Firefox). It ships
MediaPipe and WebLLM under vendor/ with their Apache 2.0 license noted.
-->

---

# Showcase: Things I Vibe-Coded

| Project | What it does |
| --- | --- |
| [heed](https://heed.arvindchee.nu) | Attention-aware toolkit for any web page |
| [Elicitation Lab](https://github.com/arvindcheenu/elicitation-lab) | Persona → offline elicitation simulator |
| [Scifig](https://scifig.arvindchee.nu/) | CHI-style figure and teaser generator |
| [habitat.css](http://arvindchee.nu/habitat.css/) | CSS that adapts to room light and color |
| [Paper Spatializer](https://paper-spatializer.vercel.app) | Navigate a paper's source files in space |

<!-- TODO(Arvind): confirm these are the projects you want to show. -->
