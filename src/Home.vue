<template>
  <div
    class="flex h-screen items-center justify-center bg-background-image bg-cover bg-center"
  >
    <div class="flex h-screen w-screen items-center justify-center">
      <div
        class="mx-5 rounded-3xl border-2 border-transparent text-center text-white backdrop-blur-sm"
      >
        <h2 class="mb-1 text-xl lg:text-xl">{{language.translatedText.welcome["welcome.text"]}}</h2>
        <h3 class="mb-1 text-2xl text-secondary lg:text-3xl">{{ language.translatedText.welcome["welcome.name"] }}</h3>
        <h1 class="text-4xl text-primary font-bold shadow-2xl lg:text-5xl">
          {{ language.translatedText.welcome["welcome.job"] }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from "./store/language";

const language = useLanguageStore();

</script>

<style scoped></style>
