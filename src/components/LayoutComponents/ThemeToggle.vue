<template>
  <button 
    class="theme-toggle"
    :class="{ 'theme-toggle--dark': isDarkMode }"
    @click="toggleTheme"
    :aria-label="isDarkMode ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'"
  >
    <span class="theme-toggle__icon">
      <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-toggle__sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-toggle__moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </span>
    <span class="theme-toggle__label">{{ isDarkMode ? 'Hell' : 'Dunkel' }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
  name: 'ThemeToggle',
  setup() {
    const isDarkMode = ref(false);

    // Prüft den bevorzugten Modus des Nutzers
    const checkUserPreference = (): boolean => {
      // Prüft zuerst gespeicherte Einstellung
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      
      // Fällt auf Systempräferenz zurück
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    // Aktualisiert den Theme-Modus im DOM und speichert die Präferenz
    const setTheme = (isDark: boolean): void => {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      isDarkMode.value = isDark;
    };

    // Funktion zum Umschalten des Themes
    const toggleTheme = (): void => {
      setTheme(!isDarkMode.value);
    };

    // Überwacht Änderungen an den Systempräferenzen
    const setupMediaQueryListener = (): void => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Nur wenn keine gespeicherte Präferenz existiert, auf Systemänderungen reagieren
      const handleChange = (e: MediaQueryListEvent): void => {
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches);
        }
      };
      
      // Event Listener für Änderungen hinzufügen
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      } else {
        // Fallback für ältere Browser
        mediaQuery.addListener(handleChange);
      }
    };

    // Bei Initialisierung
    onMounted(() => {
      // Theme auf Basis der Nutzerpräferenz setzen
      setTheme(checkUserPreference());
      
      // Media Query Listener einrichten
      setupMediaQueryListener();
    });

    return {
      isDarkMode,
      toggleTheme
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../Styles/base/variables.scss';
@import '../../Styles/base/mixins.scss';

.theme-toggle {
  display: flex;
  align-items: center;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-full;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid $color-border;
  color: $color-text;
  transition: all $transition-base;

  &:hover, &:focus {
    background-color: rgba($color-primary, 0.1);
    border-color: $color-primary;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $spacing-xs;
    color: $color-text;
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
  }

  // Animation für den Wechsel
  &__sun, &__moon {
    transition: transform 0.5s ease;
  }
  
  &--dark {
    .theme-toggle__sun {
      transform: rotate(180deg);
    }
  }
  
  &:not(&--dark) {
    .theme-toggle__moon {
      transform: rotate(-180deg);
    }
  }
}
</style>