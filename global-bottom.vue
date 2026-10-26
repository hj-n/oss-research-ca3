<template>
  <div v-if="$nav.currentPage !== 1" class="page-number">
    {{ $nav.currentPage }}
  </div>
</template>
<style>
.page-number { position: absolute; bottom: 22px; right: 30px; font: 17px Arial, sans-serif; color: #888; }
</style>
