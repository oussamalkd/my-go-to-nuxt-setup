<script setup lang="ts">
const { myLayer } = useAppConfig();
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>Hello World! {{ name }}</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
