<template>
  <div class="contribution-layout">
    <dl>
      <div v-for="pr in contributions" :key="pr.number">
        <dt>#{{ pr.number }}</dt><dd>{{ pr.title }}</dd>
      </div>
    </dl>
    <div class="responsibility">
      <h2>Success creates<br>scientific<br>responsibility.</h2>
      <ul>
        <li>Test edge cases</li>
        <li>Version releases</li>
        <li>Invite contributions</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const contributions = [
  { number: 11, title: 'New Stress metrics' },
  { number: 14, title: 'Refactoring and tests' },
  { number: 15, title: 'Correcting metric behavior' },
  { number: 17, title: 'Class Angular Distortion Index' },
]
</script>
<style scoped>
.contribution-layout { display: grid; grid-template-columns: 700px 1fr; gap: 35px; margin-top: 47px; }
dl { margin: 0; }
dl > div { display: grid; grid-template-columns: 92px 1fr; gap: 18px; align-items: baseline; margin-bottom: 46px; }
dt { color: #2563a6; font-weight: 700; }
dd { margin: 0; font-size: 29px; }
.responsibility h2 { margin: 8px 0 40px; font-size: 36px; font-weight: 700; line-height: 1.2; }
.responsibility ul { color: #555; font-size: 27px; }
.responsibility li { margin-bottom: 14px; }
</style>
