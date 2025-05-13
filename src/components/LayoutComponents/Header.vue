<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <!-- Logo -->
        <div class="header__logo">
          <router-link to="/" class="header__logo-link">
            <img :src="logoSrc" alt="ShopOfSpirit Logo" class="header__logo-img" />
            <span class="header__logo-text">ShopOfSpirit</span>
          </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="header__menu-toggle"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen.toString()"
          aria-controls="main-navigation"
          aria-label="Menü öffnen"
        >
          <span class="header__menu-icon" :class="{ 'is-active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Navigation und Aktionen -->
        <div 
          class="header__nav-wrapper" 
          :class="{ 'is-active': isMobileMenuOpen }"
          id="main-navigation"
        >
          <!-- Hauptnavigation -->
          <nav class="header__nav" aria-label="Hauptnavigation">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <router-link 
                  to="/" 
                  class="header__nav-link"
                  :class="{ 'is-active': $route.path === '/' }"
                  @click="closeMobileMenu"
                >
                  Home
                </router-link>
              </li>
              <li class="header__nav-item">
                <router-link 
                  to="/shop" 
                  class="header__nav-link"
                  :class="{ 'is-active': $route.path.includes('/shop') }"
                  @click="closeMobileMenu"
                >
                  Shop
                </router-link>
              </li>
              <li class="header__nav-item">
                <router-link 
                  to="/about" 
                  class="header__nav-link"
                  :class="{ 'is-active': $route.path === '/about' }"
                  @click="closeMobileMenu"
                >
                  Über uns
                </router-link>
              </li>
              <li class="header__nav-item">
                <router-link 
                  to="/contact" 
                  class="header__nav-link"
                  :class="{ 'is-active': $route.path === '/contact' }"
                  @click="closeMobileMenu"
                >
                  Kontakt
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Header-Aktionen (Suche, Account, Warenkorb) -->
          <div class="header__actions">
            <!-- Theme Toggle -->
            <div class="header__action-item header__theme-toggle">
              <ThemeToggle />
            </div>
            
            <!-- Suche -->
            <button class="header__action-item header__search-toggle" aria-label="Suche öffnen">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <!-- Account -->
            <router-link to="/login-register" class="header__action-item header__account" aria-label="Mein Konto">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </router-link>
            
            <!-- Warenkorb -->
            <button @click="toggleCart" class="header__action-item header__cart" aria-label="Warenkorb öffnen">
              <div class="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span v-if="cartItemCount > 0" class="cart-icon__count">{{ cartItemCount }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    ThemeToggle
  },
  emits: ['toggle-cart'],
  setup(props, { emit }) {
    const route = useRoute();
    const isMobileMenuOpen = ref(false);
    const cartItemCount = ref(0); // Dies würde später aus dem Store kommen
    
    // Logo-Quelle
    const logoSrc = ref('/src/assets/images/Logo/Symbol+Logo.png');

    // Toggle für Mobile Menü
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      
      // Body-Scroll sperren, wenn Menü offen ist
      if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    // Mobile Menü schließen
    const closeMobileMenu = () => {
      if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
        document.body.style.overflow = '';
      }
    };

    // Warenkorb öffnen/schließen (wird zum Parent-Component emittet)
    const toggleCart = () => {
      emit('toggle-cart');
    };

    // Event-Listener für Fenstergrößenänderungen
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
        closeMobileMenu();
      }
    };

    // Event-Listener hinzufügen/entfernen
    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      isMobileMenuOpen,
      logoSrc,
      cartItemCount,
      toggleMobileMenu,
      closeMobileMenu,
      toggleCart,
      route
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../Styles/base/variables.scss';
@import '../../Styles/base/mixins.scss';

.header {
  position: sticky;
  top: 0;
  z-index: $z-index-sticky;
  width: 100%;
  background-color: $color-background;
  border-bottom: 1px solid $color-border;
  transition: background-color $transition-base, border-color $transition-base;
  
  &__wrapper {
    @include flex-row(space-between, center);
    height: 80px;
    position: relative;
    
    @include media-max($breakpoint-sm) {
      height: 70px;
    }
  }
  
  // Logo-Bereich
  &__logo {
    display: flex;
    align-items: center;
    margin-right: $spacing-md;
    
    &-link {
      display: flex;
      align-items: center;
      color: $color-text;
      text-decoration: none;
      font-weight: $font-weight-bold;
      
      &:hover, &:focus {
        color: $color-primary;
      }
    }
    
    &-img {
      height: 40px;
      width: auto;
      margin-right: $spacing-xs;
      
      @include media-max($breakpoint-sm) {
        height: 30px;
      }
    }
    
    &-text {
      font-size: $font-size-lg;
      font-family: $font-secondary;
      font-weight: $font-weight-bold;
      
      @include media-max($breakpoint-sm) {
        display: none;
      }
    }
  }
  
  // Mobile Menü-Toggle
  &__menu-toggle {
    display: none;
    padding: $spacing-xs;
    background: transparent;
    border: none;
    cursor: pointer;
    
    @include media-max($breakpoint-md) {
      display: block;
      z-index: $z-index-above;
    }
  }
  
  &__menu-icon {
    width: 24px;
    height: 18px;
    position: relative;
    
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: $color-text;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      
      &:nth-child(1) {
        top: 0px;
      }
      
      &:nth-child(2) {
        top: 8px;
      }
      
      &:nth-child(3) {
        top: 16px;
      }
    }
    
    &.is-active {
      span:nth-child(1) {
        top: 8px;
        transform: rotate(135deg);
      }
      
      span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      
      span:nth-child(3) {
        top: 8px;
        transform: rotate(-135deg);
      }
    }
  }
  
  // Navigation Wrapper
  &__nav-wrapper {
    @include flex-row(space-between, center);
    flex: 1;
    
    @include media-max($breakpoint-md) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: $color-background;
      flex-direction: column;
      justify-content: flex-start;
      padding: 100px $spacing-lg $spacing-lg;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      z-index: $z-index-modal;
      
      &.is-active {
        transform: translateX(0);
      }
    }
  }
  
  // Hauptnavigation
  &__nav {
    margin-right: $spacing-md;
    
    @include media-max($breakpoint-md) {
      width: 100%;
      margin-right: 0;
      margin-bottom: $spacing-xl;
    }
  }
  
  &__nav-list {
    @include flex-row(center, center);
    list-style: none;
    padding: 0;
    margin: 0;
    
    @include media-max($breakpoint-md) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  
  &__nav-item {
    margin: 0 $spacing-md;
    
    @include media-max($breakpoint-md) {
      margin: $spacing-sm 0;
      width: 100%;
    }
  }
  
  &__nav-link {
    position: relative;
    display: inline-block;
    padding: $spacing-xs 0;
    color: $color-text;
    text-decoration: none;
    font-weight: $font-weight-medium;
    transition: color $transition-base;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $color-primary;
      transition: width $transition-base;
    }
    
    &:hover, &:focus, &.is-active {
      color: $color-primary;
      
      &::after {
        width: 100%;
      }
    }
    
    @include media-max($breakpoint-md) {
      display: block;
      padding: $spacing-sm;
      font-size: $font-size-lg;
      width: 100%;
      
      &::after {
        display: none;
      }
      
      &:hover, &:focus, &.is-active {
        background-color: rgba($color-primary, 0.1);
      }
    }
  }
  
  // Header Aktionen
  &__actions {
    @include flex-row(flex-end, center);
    
    @include media-max($breakpoint-md) {
      width: 100%;
      justify-content: space-around;
    }
  }
  
  &__action-item {
    margin-left: $spacing-md;
    color: $color-text;
    transition: color $transition-base;
    cursor: pointer;
    
    &:hover, &:focus {
      color: $color-primary;
    }
    
    @include media-max($breakpoint-md) {
      margin: 0;
      padding: $spacing-md;
    }
  }
  
  &__theme-toggle {
    // Spezifische Stile für Theme Toggle falls nötig
  }
  
  &__cart {
    position: relative;
  }
}

// Warenkorb Icon mit Zähler
.cart-icon {
  position: relative;
  
  &__count {
    position: absolute;
    top: -8px;
    right: -8px;
    height: 18px;
    min-width: 18px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary;
    color: $color-white;
    border-radius: 50%;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    line-height: 1;
  }
}
</style>