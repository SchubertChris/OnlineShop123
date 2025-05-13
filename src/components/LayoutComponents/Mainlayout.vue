<template>
  <div class="layout">
    <Header @toggle-cart="toggleCart" />
    <Main />
    <Footer />
    <CartSidebarRight :is-open="isCartOpen" @close="closeCart" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import CartSidebarRight from './CartSidebarRight.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Main,
    Footer,
    CartSidebarRight
  },
  setup() {
    const isCartOpen = ref(false);
    
    const toggleCart = () => {
      isCartOpen.value = !isCartOpen.value;
    };
    
    const closeCart = () => {
      isCartOpen.value = false;
    };
    
    return {
      isCartOpen,
      toggleCart,
      closeCart
    };
  }
});
</script>

<style lang="scss">
// Basisfarben
$color-primary: var(--color-primary);
$color-primary-light: var(--color-primary-light);
$color-primary-dark: var(--color-primary-dark);
$color-secondary: var(--color-secondary);
$color-background: var(--color-background);
$color-text: var(--color-text);
$transition-base: 0.3s ease-in-out;

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $color-background;
  color: $color-text;
  transition: background-color $transition-base, color $transition-base;
}
</style>