<template>
    <ion-page>
        <ion-content>
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons>
                        <ion-back-button defaultHref="/"></ion-back-button>
                    </ion-buttons>
                    <ion-title>{{ t('Settings') }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="my-7">
                <ion-list>
  <ion-item>
    <ion-label>{{ t('Font Size') }}</ion-label>
    <div class="flex justify-between">
        <ion-button @click="store.incrementFontSize()">+</ion-button>
        <ion-label class="mt-1 mx-2">{{ store.fontSize }}</ion-label>
        <ion-button @click="store.decrementFontSize()">-</ion-button>
    </div>
  </ion-item>
  <ion-item>
    <ion-select :label="t('Font Weight')" :placeholder="store.fontWeight" @ionChange="store.updateFontWeight($event)">
      <ion-select-option value="light">{{t('light')}}</ion-select-option>
      <ion-select-option value="regular">{{t('regular')}}</ion-select-option>
      <ion-select-option value="bold">{{t('bold')}}</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-select :label="t('language')" :placeholder="store.locale" @ionChange="store.updateLocale($event)">
        <ion-select-option value="ar">العربية</ion-select-option>
        <ion-select-option value="en">English</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item @click="router.push({name:'aboutPage'})" detail="">
    <ion-label>{{  t('About') }}</ion-label>
  </ion-item>
</ion-list>
<h4 class="text-center dark:text-gray-400 my-4 font-semibold">{{ t('version 0.0.1') }}</h4>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonList, IonSelect, IonSelectOption, IonItem, IonLabel, IonTitle, IonHeader, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const {t} = useI18n({useScope: 'global'})
const router = useRouter();
const store = useZikerStore();
</script>