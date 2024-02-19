<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-buttons slot="end">
              <ion-button @click="router.push({name: 'Settings'})">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

              </ion-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <div :style="`font-size:${store.fontSize}px;font-weight:${store.fontWeight}`" :class="`flex h-[65vh] text-center mx-4`">
        <div class="m-auto">
            <div v-for="(step, index) in store.steps" :key="index" v-show="store.currentStep == index">
              {{ step.content }}
            </div>
        </div>
      </div>
      <div class="flex justify-center text-center my-4">
        <p class="text-3xl font-extrabold">{{ store.zikerCount }} / {{ store.steps[store.currentStep].zikerCount }}</p>
      </div>
      <div class="flex justify-center">
        <ion-button size="large" @click="store.nextStep">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonHeader, IonToolbar, IonButton, IonButtons } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { useRouter } from "vue-router";

const store = useZikerStore();
const router = useRouter();


</script>
<style scoped>
ion-toolbar{
  --background: rgba(0,0,0,0);
  --padding-top: 1rem;
  --padding-end: 0.5rem;
}
</style>