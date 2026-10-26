<div class="part-title">
    <h1>Marcel’s Section</h1>
    <p>A Braindump</p>
</div>

---

# Why publish your research software code?

- **Archiving and reproducibility**
    - Research systems and prototypes often have a lifespan of only a few months
    - Making the code open source makes it available for future researchers to build upon
- **Transparency and shared learning**
    - It enables other researchers to inspect how a prototype or algorithm was implemented
    - It enables to learn from others' code and approaches

---

# Where to publish your research software?

- **Supplementary Material of the Paper**
    - For fixed snapshots of the code
    - But might be overlooked by researchers
- **GitHub, GitLab, Bitbucket, etc.**
    - Especially useful for sharing code that evolves over time
    - Link back to your paper(s)

---

# Document Your Code

- Just making code available is not the same as making it accessible
- Document your code with a `README.md` file
- At a bare minimum, explain how to install and run your code and its requirements
- Ideally, also explain the architecture design choices and why the system works as it does

---

# Make Your Code Ready for Agents

- Add an `AGENTS.md` file to allow readers to explore your code with AI agents
- Other options are adding skills for the agent to use or a `llms.txt`

---

# Licensing Your Code

- Can become tricky when building on top of other open-source projects
- Most permissive options include MIT and Apache 2.0

---

# Keep Your Code Alive

- Open-source code is not always a one-time effort
- Some projects are reused by other researchers and require maintenance
- Make clear in the documentation whether the code is actively maintained

---

# Marcel's Experiences So Far

- 2021 — Codestrates v2 (with CAVI)
- 2022 — Varv (with CAVI)
- 2023 — Mirrorverse
- 2024 — DashSpace
- 2025 — Spatialstrates
- 2026 — Stund

<br>
(But there were also various prototypes that are not published.)

---

# Marcel's Challenges and Learnings

- Good documentation ~~is~~ was time-consuming
    - With AI it got faster and more comprehensive, but not necessarily better
- Licensing can be complex
    - It also feels a bit scary as law is involved
- If software stays alive for a while, invest into a publishing workflow
    - This was especially painful with many Webstrates projects that do not live in a classic version control system
