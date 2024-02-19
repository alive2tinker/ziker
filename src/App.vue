<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useZikerStore } from '@/stores/zikerStore';
import { onMounted } from 'vue';
const store = useZikerStore();
onMounted(() => {
  store.syncSettings();
})
</script>
