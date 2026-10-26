<template>
  <svg class="zadu-growth" viewBox="0 0 1164 450" role="img" aria-labelledby="growth-title growth-desc">
    <title id="growth-title">ZADU growth after publication</title>
    <desc id="growth-desc">Timeline from eight metrics in 2021 to twenty-two in 2026. Annual downloads excluding mirrors: 1.5K in 2023, 2.6K in 2024, 6.5K in 2025. Metrics grew from 17 to 22, contributors from 4 to 9, and citations from 0 to 45, as reported in the source presentation.</desc>
    <path d="M40 38 H1100" stroke="#b8c6d4" stroke-width="3" />
    <g v-for="(event, i) in events" :key="event.year" :transform="`translate(${40 + i * 265},38)`" text-anchor="middle">
      <circle r="10" :fill="i === 1 || i === 4 ? '#2563a6' : '#fff'" :stroke="i === 1 || i === 4 ? '#2563a6' : '#9caec2'" stroke-width="2" />
      <text y="48" class="year">{{ event.year }}</text>
      <text y="80" class="milestone">{{ event.first }}</text>
      <text y="106" class="detail">{{ event.second }}</text>
    </g>
    <text x="16" y="193" class="chart-label">Downloads by year (excluding mirrors)</text>
    <path d="M45 397 H520" stroke="#cbd5e1" stroke-width="2" />
    <g v-for="(bar, i) in downloads" :key="bar.year" :transform="`translate(${88 + i * 150},0)`" text-anchor="middle">
      <rect x="0" :y="392 - bar.value / 6.5 * 160" width="72" :height="bar.value / 6.5 * 160" fill="#2563a6" />
      <text x="36" :y="377 - bar.value / 6.5 * 160" class="value">{{ bar.value }}K</text>
      <text x="36" y="430" class="detail">{{ bar.year }}</text>
    </g>
    <g v-for="(stat, i) in stats" :key="stat.label" :transform="`translate(${674 + i * 184},0)`" text-anchor="middle">
      <text y="295" class="stat" :fill="i === 2 ? '#2563a6' : '#181818'">{{ stat.value }}</text>
      <text y="342" class="chart-label">{{ stat.label }}</text>
    </g>
  </svg>
</template>
<script setup>
const events = [
  { year: '2021', first: '8 metrics', second: 'One script' },
  { year: '2023', first: '17 metrics', second: 'VIS short paper' },
  { year: '2024', first: 'First external', second: 'metric PR' },
  { year: '2025', first: 'Tests and', second: 'EuroVis tutorial' },
  { year: '2026', first: '22 metrics', second: 'Acceleration' },
]
const downloads = [{ year: '2023', value: 1.5 }, { year: '2024', value: 2.6 }, { year: '2025', value: 6.5 }]
const stats = [{ value: '17 → 22', label: 'metrics' }, { value: '4 → 9', label: 'contributors' }, { value: '0 → 45', label: 'citations' }]
</script>
<style scoped>
.zadu-growth { width: 100%; height: auto; display: block; overflow: visible; font-family: Inter, sans-serif; fill: #181818; }
.year, .value { font-size: 23px; font-weight: 700; }
.milestone { font-size: 20px; font-weight: 700; }
.detail { font-size: 19px; fill: #555; }
.chart-label { font-size: 22px; fill: #555; }
.stat { font-size: 35px; font-weight: 700; }
</style>
