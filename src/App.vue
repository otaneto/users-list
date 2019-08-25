<template>
  <div id="app column">
    <topbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'App',
  components: {
    Topbar,
  },
};
</script>
