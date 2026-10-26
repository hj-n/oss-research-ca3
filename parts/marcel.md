<div class="part-title">
    <h1>Marcel’s Braindump</h1>
    <p>A Fancy Subtitle</p>
</div>

---

# Why open source your research software?

- **Archiving and reproducibility**
    - Research systems and prototypes often have a lifespan of only a few months
    - Making the code open source makes it available for future researchers to build upon
- **Transparency and shared learning**
    - It enables other researchers to inspect how a prototype or algorithm was implemented
    - It enables to learn from others' code and approaches

---

# Where to open source your research software?

- **Supplementary Material of the Paper**
    - For fixed snapshots of the code
    - But might be overlooked by researchers
- **GitHub, GitLab, Bitbucket, etc.**
    - Especially useful for sharing code that evolves over time

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
