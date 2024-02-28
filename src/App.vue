<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const {locale} = useI18n({useScope: 'global'})
const store = useZikerStore();
onMounted(() => {
  store.syncSettings();
  locale.value = store.locale;
})
</script>
