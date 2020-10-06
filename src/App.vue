<template>
  <router-view />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

#main {
  flex: 1;
  overflow: auto;
}
</style>
