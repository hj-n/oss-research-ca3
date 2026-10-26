<p class="speaker">Hyeon · ZADU</p>

# Open source as research

- You don't have to be novel enough at first.
- A recurring problem can be a useful starting point.

<!--
Source: CA3_Open_Source_as_Research_ZADU_minimal.pdf, slide 1.
The second bullet introduces the story developed on the next slide.
-->

---

# It started as a script.

<p class="context">2021 · Eight metrics</p>

- DR evaluation metrics were scattered.
- Reimplementing them was repetitive.
- We bundled eight metrics into one Python script.
- No new metric. Just a recurring problem.

<!--
Source: supplied PDF, slide 2. DR = dimensionality reduction.
-->

---

# Useful—but novel enough?

<p class="context">2023 · IEEE VIS short paper</p>

- We released ZADU with 17 existing metrics.
- One unified API made evaluation easier.
- Reviewers questioned the methodological novelty.
- We published the short paper anyway.

<!-- Source: supplied PDF, slide 3. -->

---

# The paper stopped. The software didn't.

<p class="context">2023–2026 · Growth beyond the publication</p>

| Year | Development | Downloads* |
| --- | --- | ---: |
| 2021 | One script · 8 metrics | — |
| 2023 | VIS short paper · 17 metrics | 1.5K |
| 2024 | First external metric PR | 2.6K |
| 2025 | Tests and EuroVis tutorial | 6.5K |
| 2026 | 22 metrics · acceleration | — |

<p class="metrics"><strong>17 → 22</strong> metrics &nbsp; · &nbsp; <strong>4 → 9</strong> contributors &nbsp; · &nbsp; <strong>0 → 45</strong> citations</p>
<p class="source">*Excluding mirrors. Figures reproduced from the supplied presentation.</p>

<!--
Source: supplied PDF, slide 4. These are source-deck figures, not live counts.
The comparison ranges are reproduced as supplied; do not imply annual totals for them.
-->

---

# A tool became research infrastructure.

<p class="context">Research output → research input</p>

- Shared metrics enabled systematic comparisons.
- Comparisons exposed limitations and blind spots.
- New metrics were developed and contributed back.
- Others built TensorFlow, PyTorch, and JS versions.

<!-- Source: supplied PDF, slide 5. -->

---

# More users. More responsibility.

<p class="context">New metrics, fixes, and tests</p>

- #11: New Stress metrics
- #14: Refactoring and tests
- #15: Correcting metric behavior
- #17: Class Angular Distortion Index

<p class="note">Scientific responsibility: test edge cases, version releases, invite contributions.</p>

<!-- Source: supplied PDF, slide 6. PR numbers are source references, not links. -->

---

# Keep pushing.

1. Find a real problem.
2. Make something useful.
3. Let contributions accumulate.

<p class="note">Some contributions emerge only with time.</p>

<!-- Source: supplied PDF, slide 7. -->
