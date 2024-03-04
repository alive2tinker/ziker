import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { Preferences } from "@capacitor/preferences";
import { useI18n } from "vue-i18n";
import axios from 'axios';
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useZikerStore = defineStore("ziker", () => {
  // other options...
  const router = useRouter();
  const { locale } = useI18n({useScope: 'global'})
  const fontSize = ref(12);
  const fontWeight = ref("regular");
  const azkar = ref([]);
  const currentStep = ref(0);
  const currentZiker = ref(azkar.value[0]);
  const zikerCount = ref(1);
  const loading = ref(false);

  function nextStep() {
    if(zikerCount.value < currentZiker.value.steps[currentStep.value].zikerCount){
      zikerCount.value++;
    }else{
      zikerCount.value = 1;
      const nxtStep = currentStep.value + 1;
     try{
      console.log(currentZiker.value.steps[nxtStep].zikerCount)
      currentStep.value++;
     }catch(e){
      currentStep.value = 0;
     }
    }
  }

  async function incrementFontSize() {
    fontSize.value++;
    await Preferences.set({
      key: "fontSize",
      value: JSON.stringify(fontSize.value),
    });
  }

  async function decrementFontSize() {
    fontSize.value--;
    await Preferences.set({
      key: "fontSize",
      value: JSON.stringify(fontSize.value),
    });
  }

  async function updateFontWeight(ev) {
    fontWeight.value = ev.detail.value;
    await Preferences.set({
      key: "fontWeight",
      value: ev.detail.value,
    });
  }

  function updateLocale(ev) {
    loading.value = true;
    setTimeout(async () => {
      locale.value = ev.detail.value;
      await Preferences.set({
        key: "locale",
        value: ev.detail.value,
      });
      document.body.setAttribute("dir", locale.value === "ar" ? "rtl" : "ltr");
      loading.value = false;
    }, 3000);
  }

  async function getData(key) {
    return (await Preferences.get({ key: key })).value;
  }

  /*
   *
   * Dark Mode Section
   *
   * */

  const themeToggle = ref(false);

  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  // Check/uncheck the toggle and update the theme based on isDark
  const initializeDarkTheme = (isDark) => {
    themeToggle.value = isDark;
    toggleDarkTheme(isDark);
  };

  // Initialize the dark theme based on the initial
  // value of the prefers-color-scheme media query
  // initializeDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addEventListener("change", (mediaQuery) =>
    initializeDarkTheme(mediaQuery.matches)
  );

  // Listen for the toggle check/uncheck to toggle the dark theme
  const toggleChange = async (ev) => {
    await Preferences.set({ key: "darkMode", value: ev.detail.checked });
    toggleDarkTheme(ev.detail.checked);
  };

  const getFontFamily = () => {
    switch (fontWeight.value) {
      case "light":
        return "font-almarailight";
      case "regular":
        return "font-almarai";
      case "bold":
        return "font-almaraibold";
    }
  };

  const updateCurrentZiker = (e) => {
    const index = azkar.value.findIndex((s) => s.title === e.detail.value);
    currentStep.value = 0;
    zikerCount.value = 1;
    currentZiker.value = azkar.value[index];
  };

  const fetchAzkar = () => {
    loading.value = true;
    axios.get(`${import.meta.env.VITE_APP_PRODUCTION_URL}/azkar`, {
      headers: {
        'Accept':'Application/json',
        'X-App-Locale': locale.value
      }
    }).then((res) => {
      azkar.value = res.data;
      currentZiker.value = azkar.value[0]
      loading.value = false;
    }).catch((e) => {
      alert('Connection failed');
      loading.value = false;
    });
  }

  async function syncSettings() {
    // sync language settings
    locale.value = await getData("locale");
    document.body.setAttribute("dir", locale.value === "ar" ? "rtl" : "ltr");
    fontSize.value = (await getData("fontSize")) ?? 12;
    fontWeight.value = (await getData("fontWeight")) ?? "bold";
    themeToggle.value = await getData("darkMode");
    toggleDarkTheme(themeToggle.value)
  }

  return {
    router,
    fontSize,
    fontWeight,
    azkar,
    currentStep,
    zikerCount,
    nextStep,
    incrementFontSize,
    decrementFontSize,
    updateFontWeight,
    locale,
    updateLocale,
    syncSettings,
    toggleChange,
    themeToggle,
    loading,
    getFontFamily,
    currentZiker,
    updateCurrentZiker,
    fetchAzkar
  };
});
