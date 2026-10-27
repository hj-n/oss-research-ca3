# Software Carries Research Knowledge

- HCI research produces interactive systems, prototypes, and tools.
- Software captures interaction behavior and implementation choices.
- Shared implementations become building blocks for future research.

<!--
Opening frame for the shared talk. The CHI submission guide discusses sharing
software and research materials to support verification, reproduction, and extension:
https://chi2026.acm.org/guide-to-a-successful-submission/
-->

---

# Research Software We Build On

<ResearchSoftwareExamples />

<p class="note">Research contributions can become tools that other researchers build on.</p>

<!--
Official project descriptions, research venues, and original illustrations:
Vega-Lite: https://vis.mit.edu/pubs/vega-lite/
Webstrates: https://webstrates.net/
D3: https://idl.uw.edu/papers/d3
Images are reproduced unchanged from those project pages, including the
Webstrates collaborative editing animation. Project names link to the sources.
-->

---

# Why Publish Your Research Software?

- **Archiving and reproducibility**
    - Research systems and prototypes often have a lifespan of only a few months
- **Transparency and shared learning**
    - Others can inspect how a prototype or algorithm was implemented
    - Others can learn from your code and approaches

---

# Where to Publish Your Research Software?

- **Supplementary material of the paper**
    - For fixed snapshots of the code
    - But it might be overlooked by other researchers
- **GitHub, GitLab, Bitbucket, etc.**
    - Especially useful for code that evolves over time
    - Link back to your paper(s)

---

# Document Your Code

- Document your code with a `README.md` file
- At a bare minimum, explain the requirements and how to install and run the code
- Ideally, also explain the architecture, the design choices, and why the system works as it does
- Make clear whether the code is actively maintained

---

# Make Your Code Ready for Agents

- Add an `AGENTS.md` file so readers can explore your code with AI agents
- Other options are agent skills or an `llms.txt` file

---

# Licensing Your Code

- Can become tricky when building on top of other open-source projects
- Common permissive options include MIT and Apache 2.0

---

# What Happens After We Publish the Code?

- Can someone else run and understand it?
- Can it support new studies and systems?
- Who maintains it as users and needs change?

<!-- Common questions to carry into the four speakers' project stories. -->

---

# Why Bother Building and Maintaining It?

- Does useful software count as a research contribution?
- What do we gain beyond the original paper?
- Who does the work, and who gets the credit?
- When is it worth continuing—and when should we stop?

<!--
Discussion frame: recognition of research contributions, long-term value,
maintenance work and credit, and the decision to continue or stop.
-->
