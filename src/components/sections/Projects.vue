<template>
  <div class="container mx-auto">
    <div class="mb-5">
      <div class="mb-12 pt-20">
        <h2 id="Projects" class="custom-title">
          {{ language.translatedText.projects.title }}
        </h2>
      </div>
      <div class="mx-5 flex flex-wrap justify-center gap-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="relative border-colour mx-auto my-5 rounded-md p-4 shadow-xl"
        >
          <div class="flex flex-col items-center justify-center">
            <h3 class="mb-4 text-center text-2xl font-bold lg:text-3xl">
              {{ project.title }}
            </h3>
            <a :href="project.urlLive" target="_blank"
              ><img
                class="rounded-lg shadow-[0px_5px_15px] shadow-gray-400 transition-all hover:scale-105 sm:max-w-sm"
                :src="project.img"
                alt="Example of project for mobile, tablet and desktop. Responsive design."
            /></a>
          </div>
          <div
            class="mx-auto mb-20 flex items-center px-2 pt-8 text-center sm:max-w-sm"
          >
            <p>
              {{ project.description }}
            </p>
          </div>
          <div class="absolute bottom-0 left-0 mb-5 flex w-full justify-around">
            <div>
              <a :href="project.urlLive" target="_blank">
                <CustomButton :icon="['fas', 'arrow-up-right-from-square']" 
                  >website</CustomButton
                ></a
              >
            </div>
            <div>
              <a :href="project.urlGithub" target="_blank"
                ><CustomButton :icon="['fab', 'square-github']" size="lg"
                  >github</CustomButton
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script setup lang="ts">
import CustomButton from "../../components/CustomButton.vue";
import { useLanguageStore } from "../../store/language";
import { computed } from "vue";

const language = useLanguageStore();

interface Projecten {
  id: number;
  title: string;
  img: string;
  description: string;
  urlLive: string;
  urlGithub: string;
}

const projects = computed(() => {
  const projecten: Projecten[] = language.translatedText.projecten;
  return projecten.map((project) => ({
    ...project,
  }));
});
</script>

<style scoped></style>
