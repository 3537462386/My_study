<template>
  <div>topPage</div>
</template>

<script setup lang="ts">
import { useNewStore } from "../stores/news";

const { topNewsList, fetchAllNEws } = useNewStore();
</script>

<style scoped></style>
