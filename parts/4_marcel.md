<div class="part-title">
<h1>Open Source of the Research</h1>
<p>Marcel</p>
</div>

---

# Publishing Systems after the Paper

<p class="context">Some of the systems I worked on that were published on GitHub.<br>There are still more I have not published.</p>

- 2021 — Codestrates v2 (with CAVI)
- 2022 — Varv (with CAVI)
- 2023 — Mirrorverse
- 2024 — DashSpace
- 2025 — Spatialstrates
- 2026 — Stund

---

# Document Your Code

- Document your code with a `README.md` file
- At a minimum, explain the requirements and how to install and run the code
- Ideally, also explain the architecture, the design choices, and why the system works as it does
- Make clear whether the code is actively maintained
- Good documentation can be a lot of work
- AI documentation is not always the solution

---

# Licensing Your Code

- Can become tricky when building on top of other open-source projects
    - Licenses of software you use restrict how you can license your own code
- Common permissive options include MIT and Apache 2.0

---

# Make Your Code Ready for Agents

- Add an `AGENTS.md` file so readers can explore your code with AI agents
- Other options are agent skills or an `llms.txt` file
- For tools consider adding a CLI or MCP interface

---

# Maintain a Publishing Workflow

- If software stays alive for a while, invest in a publishing workflow
- This was especially painful for many Webstrates projects that do not live in a classic version control system
