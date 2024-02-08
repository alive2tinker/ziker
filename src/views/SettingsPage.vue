<template>
    <ion-page>
        <ion-content>
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-buttons>
                        <ion-back-button defaultHref="/"></ion-back-button>
                    </ion-buttons>
                    <ion-title>Settings</ion-title>
                </ion-toolbar>
            </ion-header>
            <div class="my-7">
                <ion-list>
  <ion-item>
    <ion-label>Pokémon Yellow</ion-label>
  </ion-item>
</ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonTitle, IonHeader, IonToolbar, IonBackButton, IonButtons } from '@ionic/vue';
</script>