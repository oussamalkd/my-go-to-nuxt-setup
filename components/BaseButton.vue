<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "Action",
  },
});
</script>

<template lang="pug">
button.main-button.bg-yellow-400 {{ label}}
</template>
