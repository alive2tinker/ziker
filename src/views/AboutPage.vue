<template>
<ion-page><ion-content>
    <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons>
                        <ion-back-button defaultHref="/"></ion-back-button>
                    </ion-buttons>
                    <ion-title>{{ t('About') }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="flex h-[90vh] max-w-5xl mx-auto px-4">
                <div class="m-auto">
                    <div class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo aliquam ab incidunt dolores reprehenderit et doloribus iure nobis illum totam vel quibusdam, quae quos officiis sunt velit, dicta eveniet!</div>
                </div>
            </div>
</ion-content></ion-page>
</template>
<script setup>
import {IonPage, IonContent, IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle} from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n({useScope: 'global'})
</script>
<style scoped></style>