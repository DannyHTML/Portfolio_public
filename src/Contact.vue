<template>
  <div class="px-5 mt-16">
    <h2 class="custom-title mb-5" id="Contact">
      {{ language.translatedText.contact.title }}
    </h2>
    <div class="border-colour m-auto max-w-md p-2 shadow-xl">
      <form @submit.prevent="submitForm">
        <label class="mb-1 inline-block" for="name">{{
          language.translatedText.contact.name
        }}</label
        ><br />
        <div class="relative">
          <input
            type="text"
            name="name"
            :placeholder="language.translatedText.contact.name_placeholder"
            class="w-full rounded-md border-2 p-1 pl-2 focus:outline-primaryOutline"
            :class="{ 'border-red-600': isNameHidden }"
            v-model="formData.name"
            @focus="isNameHidden = false"
          />
          <div class="absolute -bottom-6 ml-2">
            <Transition name="fade-form">
              <p v-if="isNameHidden" :class="{ 'text-red-600': isNameHidden }">
                {{ language.translatedText.contact.name_error }}
              </p>
            </Transition>
          </div>
        </div>
        <br />
        <label class="mb-1 inline-block" for="email">{{
          language.translatedText.contact.email_name
        }}</label
        ><br />
        <div class="relative">
          <Transition name="fade-form">
            <input
              type="email"
              name="email"
              :placeholder="
                language.translatedText.contact.email_name_placeholder
              "
              class="w-full rounded-md border-2 p-1 pl-2 focus:outline-primaryOutline"
              :class="{ 'border-red-600': isEmailHidden }"
              v-model="formData.email"
              @focus="isEmailHidden = false"
            />
          </Transition>
          <div class="absolute -bottom-6 ml-2">
            <Transition name="fade-form">
              <p
                v-if="isEmailHidden"
                :class="{ 'text-red-600': isEmailHidden }"
              >
                {{ language.translatedText.contact.email_name_error }}
              </p>
            </Transition>
          </div>
        </div>
        <br />
        <label class="mb-1 inline-block" for="message">{{
          language.translatedText.contact.message_name
        }}</label
        ><br />
        <div class="relative">
          <textarea
            class="h-40 w-full resize-none rounded-md border-2 pl-2 focus:outline-primaryOutline"
            :class="{ 'border-red-600': isMessageHidden }"
            name="message"
            :placeholder="
              language.translatedText.contact.message_name_placeholder
            "
            v-model="formData.message"
            @focus="isMessageHidden = false"
          ></textarea>
          <div class="absolute -bottom-4 ml-2">
            <Transition name="fade-form">
              <p
                v-if="isMessageHidden"
                :class="{ 'text-red-600': isMessageHidden }"
              >
                {{ language.translatedText.contact.message_name_error }}
              </p>
            </Transition>
          </div>
        </div>
        <br />

        <div class="relative flex justify-center">
          <TransitionGroup name="fade-form">
            <div v-if="isSubmittingMessage" class="absolute bottom-0">
              <p class="md:text-lg">
                {{ language.translatedText.contact.message_sending }}
              </p>
            </div>
            <div v-if="submitConfirmed" class="absolute bottom-0">
              <p class="md:text-lg">
                {{ language.translatedText.contact.message_sent }}
              </p>
            </div>
          </TransitionGroup>
        </div>

        <div class="mb-3 mt-3 flex justify-center">
          <CustomButton
            :disabled="submitting"
            :icon="['far', 'paper-plane']"
            :size="'lg'"
            class="w-3/5 disabled:hover:scale-100"
          >
            <span class="text-lg font-medium md:mr-3"
              >{{ language.translatedText.contact.contact_sent_btn }}
            </span>
          </CustomButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLanguageStore } from "./store/language";
import CustomButton from "./components/CustomButton.vue";

const language = useLanguageStore();

const isNameHidden = ref<boolean>(false);
const isEmailHidden = ref<boolean>(false);
const isMessageHidden = ref<boolean>(false);
const submitConfirmed = ref<boolean>(false);
const submitting = ref<boolean>(false);
const isSubmittingMessage = ref<boolean>(false);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formData = ref<FormData>({
  name: "",
  email: "",
  message: "",
});

const resetFormData = (): void => {
  formData.value.name = "";
  formData.value.email = "";
  formData.value.message = "";
};

const submitForm = (e: Event) => {
  e.preventDefault();

  isSubmittingMessage.value = true;

  if (!formData.value.name) {
    isNameHidden.value = true;
    isSubmittingMessage.value = false;
  }

  if (!formData.value.email) {
    isEmailHidden.value = true;
    isSubmittingMessage.value = false;
  }

  if (!formData.value.message) {
    isMessageHidden.value = true;
    isSubmittingMessage.value = false;
  }

  fetch("https://www.dannyjager.com/mail/mail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then((response) => {
      isSubmittingMessage.value = false;

      if (!response.ok) {
        throw new Error("Network response error");
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === "error") {
        console.error("Error:", data.message);
      } else {
        console.log("Success:", data);
        if (data) {
          resetFormData();

          submitConfirmed.value = true;
          submitting.value = true;

          setTimeout(() => {
            submitConfirmed.value = false;
            submitting.value = false;
          }, 3000);
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style scoped></style>
