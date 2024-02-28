<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-screen h-screen flex fixed bg-zinc-300 dark:bg-zinc-900 z-50" v-show="store.loading">
        <div class="m-auto">
          <self-building-square-spinner :animation-duration="6000" :size="40" color="#ff1d5e" />
        </div>
      </div>
      <div class="max-w-5xl mx-auto px-4">
        <div :style="`font-size:${store.fontSize}px;font-weight:${store.fontWeight}`"
          :class="`${store.getFontFamily()} flex h-[65vh] text-center mx-4`" v-if="store.currentZiker">
          <div class="m-auto">
            <div v-for="(step, index) in store.currentZiker.steps" :key="index" v-show="store.currentStep == index">
              {{ step.content[store.locale] }}
            </div>
          </div>
        </div>
        <div class="flex justify-center text-center my-4" v-if="store.currentZiker">
          <p class="text-3xl font-extrabold">{{ store.zikerCount }} / {{
            store.currentZiker.steps[store.currentStep].zikerCount }}</p>
        </div>
        <div class="flex justify-center">
          <ion-button size="large" @click="store.nextStep">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </ion-button>
        </div>

        <div class="flex justify-between" v-if="store.currentZiker">
          <ion-select :okText="t('Ok')" :cancelText="t('Cancel')" class="mt-2.5" :interface-options="customAlertOptions" :value="store.currentZiker.title" @ion-change="store.updateCurrentZiker($event)">
            <ion-select-option v-for="(ziker, index) in store.azkar" :key="index" :value="ziker.title">{{ ziker.title[store.locale] }}</ion-select-option>
          </ion-select>
          <ion-button fill="clear" @click="router.push({name: 'Settings'})" class="font-almaraibold">{{ t('Settings') }}</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import { SelfBuildingSquareSpinner  } from 'epic-spinners'

const { t } = useI18n({ useScope: 'global' });
const store = useZikerStore();
const router = useRouter();

const customAlertOptions = {
  header: 'Ziker',
  translucent: true,
};

onMounted(() => {
  store.fetchAzkar();
})
</script>
<style scoped>
ion-toolbar {
  --background: rgba(0, 0, 0, 0);
  --padding-top: 1rem;
  --padding-end: 0.5rem;
}
</style>