<div class="part-title with-art">
<h1>Novelty Comes with Time</h1>
<p>Hyeon · ZADU</p>
<img src="/hyeon/zadu-story.jpg" alt="The story of ZADU: a short paper grows from a seedling into a tree through new metrics, contributors, fixes, tests, implementations, and adoption." />
</div>

---

# What Is ZADU?

- **Dimensionality reduction (DR):** mapping high-dimensional data into a 2D or 3D embedding.
- **DR evaluation metrics:** measuring distortions in neighborhoods, distances, or clusters.
- **ZADU:** a Python library bringing these measures together through one API.
- **Goal:** evaluate and compare embeddings without reimplementing each metric.

<p class="source">Source: <a href="https://github.com/hj-n/zadu">github.com/hj-n/zadu</a></p>

<!--
Source: live ZADU README, checked 2026-10-26, https://github.com/hj-n/zadu.
DR reduces the number of dimensions; 2D/3D is the visualization use case here.
Metrics compare a projection with the original data. Different measures assess
local, cluster-level, or global structure; no single measure captures everything.
Examples include trustworthiness/continuity and stress.
-->

---

# ZADU on GitHub

<p class="context"><a href="https://github.com/hj-n/zadu">github.com/hj-n/zadu</a></p>

<img class="github-capture" src="/hyeon/zadu-github.png" alt="Actual ZADU GitHub repository page showing source code and the project description." />

<p class="source">Repository screenshot · 26 October 2026</p>

<!-- Real public GitHub page captured with Chromium; no UI elements or counts were edited. -->

---

<p class="speaker">Hyeon · ZADU</p>

# Open Source as Research

- You don’t have to be novel enough at first.
- A recurring problem can be a useful starting point.

<!--
Source: CA3_Open_Source_as_Research_ZADU_minimal.pdf, slide 1.
The second bullet introduces the story developed on the next slide.
-->

---

# It Started as a Script.

<p class="context">2021 · Eight metrics</p>

- DR evaluation metrics were scattered.
- Reimplementing them was repetitive.
- We bundled eight metrics into one Python script.
- No new metric. Just a recurring problem.

<!--
Source: supplied PDF, slide 2. DR = dimensionality reduction.
-->

---

# Useful—but Novel Enough?

<p class="context">2023 · IEEE VIS short paper</p>

- We released ZADU with 17 existing metrics.
- One unified API made evaluation easier.
- Reviewers questioned the methodological novelty.
- We published the short paper anyway.

<!-- Source: supplied PDF, slide 3. -->

---

# The Paper Stopped. The Software Didn’t.

<p class="context">2023–2026 · Growth beyond the publication</p>

<ZaduGrowth />

<!--
The timeline, download bars, and growth figures recreate the original PDF graphic.
-->

<!--
Source: supplied PDF, slide 4. These are source-deck figures, not live counts.
The comparison ranges are reproduced as supplied; do not imply annual totals for them.
-->

---

# A Tool Became Research Infrastructure.

<p class="context">Research output → research input</p>

- Shared metrics enabled systematic comparisons.
- Comparisons exposed limitations and blind spots.
- New metrics were developed and contributed back.
- Others built TensorFlow, PyTorch, and JS versions.

<!-- Source: supplied PDF, slide 5. -->

---

# More Users. More Responsibility.

<p class="context">Real contributions—new metrics, fixes, and tests</p>

<ZaduContributions />

<!-- Source: supplied PDF, slide 6. PR numbers are source references, not links. -->

---

# Open Source Is Not Free

- More users bring more maintenance work.
- Maintenance competes with new research.
- Design for a future without the original maintainer.

<!--
Source: supplied manuscript, Democratizing Dimensionality Reduction Evaluation
with ZADU, section 5.2 (pages 7–8).
Maintenance includes documentation, backward compatibility, dependency changes,
and different hardware environments. Authors have limited maintenance capacity.
-->

---

# Contributions Keep Us Going

- Contributions show that someone finds the software worth improving.
- Share useful fixes upstream.
- Distribute knowledge and ownership beyond the original authors.
- Recognize contributors who improved that version.

<!--
Source: supplied manuscript, sections 5.3 and 5.5 (page 8).
Contributions provide motivation as well as practical help. In the last bullet,
“that version” refers to the software release being used: acknowledge the people
whose improvements are included in that release.
-->

---

# Keep Pushing.

1. Find a real problem.
2. Make something useful.
3. Let contributions accumulate.

<p class="note">Some contributions emerge only with time.</p>

<!-- Source: supplied PDF, slide 7. -->
