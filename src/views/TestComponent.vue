<template>
  <div>
    Home page
    <div>{{ testData }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TestType } from "@/appTypes";

@Component({})
export default class TestComponent extends Vue {
  testData: TestType = "test";
}
</script>
