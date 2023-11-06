<template>
  <div>
    <h2 id="About" class="mb-10 mt-16 custom-title">
      {{ language.translatedText.about.title }}
    </h2>
  </div>
  <div class="flex justify-center items-center w-full">
    <div
      class="flex flex-col lg:flex-row items-center justify-around w-full px-5"
    >
      <img
        class="w-96 rounded-md shadow-xl"
        src="/images/danny.jpg"
        alt="Image of Danny Jager"
      />
      <div>
        <div class="text-center max-w-xl">
          <p class="mt-5 border-colour rounded-md p-4 shadow-lg">
            {{ language.translatedText.about.paragraph_1 }}
          </p>
        </div>
        <div class="text-center max-w-xl">
          <p class="mt-5 border-colour rounded-md p-4 shadow-lg">
            {{ language.translatedText.about.paragraph_2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from "./store/language";

const language = useLanguageStore();
</script>

<style scoped></style>
