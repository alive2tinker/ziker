<template>
<ion-page><ion-content>
    <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons>
                        <ion-back-button defaultHref="/" text=""></ion-back-button>
                    </ion-buttons>
                    <ion-title class="font-almaraibold">{{ t('About') }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="flex h-[90vh] max-w-5xl mx-auto px-4">
                <div class="m-auto">
                    <div class="text-center font-almarai">السلام عليكم</div>
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