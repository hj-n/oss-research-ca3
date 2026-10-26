import { readFile, writeFile, unlink } from 'node:fs/promises'
import { spawn } from 'node:child_process'
const speaker = process.argv[2]?.toLowerCase()
if (!['anton', 'marcel', 'hyeon', 'arvind'].includes(speaker)) {
  console.error('Usage: npm run speaker -- anton|marcel|hyeon|arvind')
  process.exit(1)
}
// Reuse the master configuration so individual decks share the exact design.
const master = await readFile(new URL('../slides.md', import.meta.url), 'utf8')
const head = master.match(/^---\n([\s\S]*?)\n---/)[1].replace('class: cover\n', '')
const content = await readFile(new URL(`../parts/${speaker}.md`, import.meta.url), 'utf8')
const entry = `.speaker-${speaker}.md`
await writeFile(entry, `---\n${head}\n---\n\n${content}`)
const child = spawn('slidev', [entry, '--port', process.env.PORT || '3030'], { stdio: 'inherit', shell: false })
const clean = async () => { await unlink(entry).catch(() => {}) }
child.on('exit', async code => { await clean(); process.exit(code ?? 0) })
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal))
