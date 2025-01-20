<template>
  <div class="container mx-auto bg-green-300 h-dvh">
    <HelloWorld name="layer" />
    <BaseButton label="create" />
    <p>{{ $t("welcome") }}</p>
    <pre>{{ locale }}</pre>
  </div>
</template>
<script setup lang="ts">
const { locale, locales } = useI18n();
</script>
