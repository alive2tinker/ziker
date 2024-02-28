<template>
  <ion-page>
    <ion-content>
      <div class="w-screen h-screen flex fixed bg-zinc-300 dark:bg-zinc-900 z-50" v-show="store.loading">
        <div class="m-auto">
          <self-building-square-spinner :animation-duration="6000" :size="40" color="#ff1d5e" />
        </div>
      </div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons>
            <ion-back-button defaultHref="/" text=""></ion-back-button>
          </ion-buttons>
          <ion-title class="font-almaraibold">{{ t('Settings') }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="my-7 max-w-5xl mx-auto px-4 rounded-md">
        <ion-list lines="full" class="font-almarai">
          <ion-item>
            <ion-label>{{ t('Font Size') }}</ion-label>
            <div class="flex justify-between">
              <ion-button @click="store.incrementFontSize()">+</ion-button>
              <ion-label class="mt-1 mx-2">{{ store.fontSize }}</ion-label>
              <ion-button @click="store.decrementFontSize()">-</ion-button>
            </div>
          </ion-item>
          <ion-item>
            <ion-select :okText="t('Ok')" :cancelText="t('Cancel')" :label="t('Font Weight')" :value="store.fontWeight" :placeholder="t(store.fontWeight)"
              @ionChange="store.updateFontWeight($event)">
              <ion-select-option value="light">{{ t('light') }}</ion-select-option>
              <ion-select-option value="regular">{{ t('regular') }}</ion-select-option>
              <ion-select-option value="bold">{{ t('bold') }}</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-select :okText="t('Ok')" :cancelText="t('Cancel')" :label="$t('Language')" :value="store.locale" :placeholder="store.locale === 'ar' ? 'العربية' : 'English'"
              @ionChange="store.updateLocale($event)">
              <ion-select-option value="ar">العربية</ion-select-option>
              <ion-select-option value="en">English</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-toggle :checked="store.themeToggle" @ion-change="store.toggleChange">{{ t('Dark Mode') }}</ion-toggle>
          </ion-item>
          <ion-item @click="router.push({ name: 'aboutPage' })" detail="">
            <ion-label>{{ t('About') }}</ion-label>
          </ion-item>
        </ion-list>
        <h4 class="text-center dark:text-gray-400 my-4 font-semibold font-almarai">{{ t('version 0.0.1') }}</h4>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonList, IonSelect, IonToggle, IonSelectOption, IonItem, IonLabel, IonTitle, IonHeader, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { SelfBuildingSquareSpinner } from 'epic-spinners'

const { t } = useI18n({ useScope: 'global' })

const router = useRouter();
const store = useZikerStore();
</script>