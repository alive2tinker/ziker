<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-screen h-screen flex fixed bg-zinc-300 dark:bg-zinc-900 z-50" v-show="store.loading">
        <div class="m-auto">
          <self-building-square-spinner :animation-duration="6000" :size="40" color="#ff1d5e" />
        </div>
      </div>
      <div class="max-w-5xl mx-auto px-4">
        <div v-if="store.currentZiker">
          <div :style="`font-size:${store.fontSize}px;font-weight:${store.fontWeight}`"
            :class="`${store.getFontFamily()} flex h-[65vh] text-center mx-4`">
            <div class="m-auto">
              <div v-for="(step, index) in store.currentZiker.steps" :key="index" v-show="store.currentStep == index">
                {{ step.content }}
              </div>
            </div>
          </div>
          <div class="flex justify-center text-center my-4">
            <p class="text-3xl font-extrabold">{{ store.zikerCount }} / {{
      store.currentZiker.steps[store.currentStep].zikerCount }}</p>
          </div>
          <div class="flex justify-center">
            <ion-button size="large" @click="router.push({name: 'Settings'})">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </ion-button>
          </div>
          <IonButton @click="router.push({name: 'Settings'})">{{ t('Settings') }}</IonButton>
        </div>
        <div v-else>
          <div class="flex h-screen">
            <div class="m-auto">
              <div class="bg-red-400 rounded-full w-10 h-10 p-3 text-white text-center">
                <p class="text-2xl font-bold">X</p>
              </div>
              <h1 class="text-xl text-center">Error</h1>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useZikerStore } from '@/stores/zikerStore';
import { onMounted } from 'vue';
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { SelfBuildingSquareSpinner } from 'epic-spinners';
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';

const store = useZikerStore();
const router = useRouter();
const { t } = useI18n({ useScope: 'global' });
onMounted(() => {
  store.fetchAzkar();
})
</script>