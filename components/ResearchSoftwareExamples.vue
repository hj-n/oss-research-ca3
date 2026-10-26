<template>
  <div class="research-examples">
    <div v-for="project in projects" :key="project.name" class="research-example">
      <div>
        <h2><a :href="project.url">{{ project.name }}</a></h2>
        <p class="venue">{{ project.venue }}</p>
      </div>
      <img :src="project.image" :alt="project.alt" />
      <p class="description">{{ project.description }}</p>
    </div>
  </div>
</template>
<script setup>
const base = import.meta.env.BASE_URL
const projects = [
  {
    name: 'Vega-Lite',
    venue: 'InfoVis / TVCG 2017',
    url: 'https://vis.mit.edu/pubs/vega-lite/',
    image: `${base}examples/vega-lite.png`,
    alt: 'Interactive charts from the Vega-Lite research paper.',
    description: 'A grammar for interactive data visualization.',
  },
  {
    name: 'Webstrates',
    venue: 'UIST 2015',
    url: 'https://webstrates.net/',
    image: `${base}examples/webstrates.gif`,
    alt: 'Official Webstrates demonstration of synchronized collaborative editing across browsers.',
    description: 'Shared, collaborative web-based interactive systems.',
  },
  {
    name: 'D3',
    venue: 'InfoVis / TVCG 2011',
    url: 'https://idl.uw.edu/papers/d3',
    image: `${base}examples/d3.png`,
    alt: 'Maps, charts, and networks from the D3 research paper.',
    description: 'A library for creating interactive visualizations on the web.',
  },
]
</script>
<style scoped>
.research-examples { display: grid; gap: 14px; }
.research-example { display: grid; grid-template-columns: 220px 430px 1fr; gap: 25px; align-items: center; min-height: 136px; }
.research-example h2 { margin: 0 0 10px; font-size: 33px; font-weight: 600; line-height: 1.15; }
.research-example h2 a { color: inherit; border-bottom: 0; }
.research-example .venue { margin: 0; font-size: 20px; color: #666; opacity: 1; }
.research-example img { width: 430px; height: 128px; object-fit: contain; }
.research-example .description { margin: 0; font-size: 27px; line-height: 1.4; opacity: 1; }
</style>
