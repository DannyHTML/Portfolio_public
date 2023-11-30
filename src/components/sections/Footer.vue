<template>
  <div class="bg-black">
    <div class="mt-20 container mx-auto flex h-20 items-center justify-around">
      <div class="w-16 text-center">
        <a href="https://www.github.com/DannyHTML" target="_blank">
          <font-awesome-icon
            class="text-primary"
            :icon="['fab', 'square-github']"
            size="2xl"
          />
        </a>
      </div>
      <div class="text-center text-white">
        <div>
          <p class="mb-[2px] text-sm">
            {{ language.translatedText.footer.title }}
          </p>
          <a href="https://github.com/DannyHTML" target="_blank"
            ><p class="-rotate-3">
              <span
                class="uppercase text-primary underline underline-offset-4 md:font-medium"
                >{{ language.translatedText.footer.author }}</span
              >
            </p>
          </a>
        </div>
      </div>
      <div class="w-16 text-right text-lg">
        <p class="ml text-white">
          <span class="mr-1 inline">&copy;</span>{{ currentYear }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLanguageStore } from "../../store/language";

const language = useLanguageStore();
const currentYear = computed<number>(() => new Date().getFullYear());
</script>

<style scoped></style>
