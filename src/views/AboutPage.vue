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
</ion-content></ion-page>
</template>
<script setup>
import {IonPage, IonContent, IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle} from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n({useScope: 'global'})
</script>
<style scoped></style>