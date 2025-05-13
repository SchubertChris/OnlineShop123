<template>
  <aside 
    class="cart-sidebar" 
    :class="{ 'is-open': isOpen }"
    aria-labelledby="cart-title"
    aria-hidden="!isOpen"
  >
    <div class="cart-sidebar__container">
      <!-- Header -->
      <div class="cart-sidebar__header">
        <h2 id="cart-title" class="cart-sidebar__title">Warenkorb</h2>
        <button 
          class="cart-sidebar__close" 
          @click="closeCart" 
          aria-label="Warenkorb schließen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <!-- Leerer Warenkorb -->
      <div v-if="cartItems.length === 0" class="cart-sidebar__empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p class="cart-sidebar__empty-text">Ihr Warenkorb ist leer</p>
        <router-link to="/shop" class="btn btn-primary" @click="closeCart">
          Jetzt einkaufen
        </router-link>
      </div>
      
      <!-- Befüllter Warenkorb -->
      <div v-else class="cart-sidebar__content">
        <ul class="cart-sidebar__items">
          <li v-for="(item, index) in cartItems" :key="index" class="cart-sidebar__item">
            <div class="cart-sidebar__item-img-container">
              <img :src="item.imageUrl" :alt="item.name" class="cart-sidebar__item-img" />
            </div>
            <div class="cart-sidebar__item-content">
              <h3 class="cart-sidebar__item-title">{{ item.name }}</h3>
              <p class="cart-sidebar__item-variant">Variante: {{ item.variant }}</p>
              <div class="cart-sidebar__item-price-qty">
                <p class="cart-sidebar__item-price">{{ formatPrice(item.price) }}</p>
                <div class="cart-sidebar__item-qty">
                  <button 
                    class="cart-sidebar__item-qty-btn" 
                    @click="updateQuantity(index, -1)"
                    aria-label="Menge verringern"
                    :disabled="item.quantity <= 1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                  <span class="cart-sidebar__item-qty-value">{{ item.quantity }}</span>
                  <button 
                    class="cart-sidebar__item-qty-btn" 
                    @click="updateQuantity(index, 1)"
                    aria-label="Menge erhöhen"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button 
              class="cart-sidebar__item-remove" 
              @click="removeItem(index)"
              aria-label="Artikel entfernen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </li>
        </ul>
        
        <!-- Zusammenfassung -->
        <div class="cart-sidebar__summary">
          <div class="cart-sidebar__summary-row">
            <span>Zwischensumme</span>
            <span>{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="cart-sidebar__summary-row">
            <span>Versand</span>
            <span>{{ shippingCost > 0 ? formatPrice(shippingCost) : 'Kostenlos' }}</span>
          </div>
          <div class="cart-sidebar__summary-row cart-sidebar__summary-total">
            <span>Gesamt</span>
            <span>{{ formatPrice(total) }}</span>
          </div>
          
          <!-- Aktionen -->
          <div class="cart-sidebar__actions">
            <router-link to="/cart" class="btn btn-outline cart-sidebar__btn" @click="closeCart">
              Zum Warenkorb
            </router-link>
            <router-link to="/checkout" class="btn btn-primary cart-sidebar__btn" @click="closeCart">
              Zur Kasse
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Overlay zum Schließen -->
    <div class="cart-sidebar__overlay" @click="closeCart"></div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

// Typdefinition für Warenkorbartikel
interface CartItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default defineComponent({
  name: 'CartSidebarRight',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    // Mock-Daten für Warenkorb (später würde das aus einem Store kommen)
    const cartItems = ref<CartItem[]>([
      // Beispieldaten für Demo-Zwecke
      // {
      //   id: 1,
      //   name: 'Produkt 1',
      //   variant: 'Standard',
      //   price: 29.99,
      //   quantity: 1,
      //   imageUrl: '/placeholder.jpg'
      // }
    ]);
    
    // Berechnet die Zwischensumme
    const subtotal = computed(() => {
      return cartItems.value.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    });
    
    // Versandkosten - kostenlos ab 50€
    const shippingCost = computed(() => {
      return subtotal.value >= 50 ? 0 : 4.95;
    });
    
    // Gesamtsumme
    const total = computed(() => {
      return subtotal.value + shippingCost.value;
    });
    
    // Menge eines Artikels aktualisieren
    const updateQuantity = (index: number, change: number) => {
      const newQuantity = cartItems.value[index].quantity + change;
      if (newQuantity > 0) {
        cartItems.value[index].quantity = newQuantity;
      }
    };
    
    // Artikel entfernen
    const removeItem = (index: number) => {
      cartItems.value.splice(index, 1);
    };
    
    // Warenkorb schließen
    const closeCart = () => {
      emit('close');
    };
    
    // Preis formatieren
    const formatPrice = (price: number): string => {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
      }).format(price);
    };
    
    // Body-Scroll sperren/entsperren wenn der Warenkorb geöffnet/geschlossen wird
    watch(() => props.isOpen, (isOpen) => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    return {
      cartItems,
      subtotal,
      shippingCost,
      total,
      updateQuantity,
      removeItem,
      closeCart,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../Styles/base/index.scss'; // Adjust the path to your SCSS variables file

.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background-color: $color-background;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  z-index: $z-index-modal;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  
  &.is-open {
    transform: translateX(0);
    
    .cart-sidebar__overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }
  
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: $spacing-md;
    overflow-y: auto;
  }
  
  &__header {
    @include flex-row(space-between, center);
    padding-bottom: $spacing-md;
    border-bottom: 1px solid $color-border;
    margin-bottom: $spacing-md;
  }
  
  &__title {
    font-size: $font-size-xl;
    margin: 0;
  }
  
  &__close {
    background: none;
    border: none;
    cursor: pointer;
    color: $color-text;
    
    &:hover {
      color: $color-primary;
    }
  }
  
  // Leerer Warenkorb
  &__empty {
    @include flex-column(center, center);
    flex-grow: 1;
    text-align: center;
    padding: $spacing-xxl 0;
    
    svg {
      color: $color-text-muted;
      margin-bottom: $spacing-md;
    }
    
    &-text {
      font-size: $font-size-lg;
      margin-bottom: $spacing-lg;
      color: $color-text-muted;
    }
  }
  
  // Warenkorb mit Artikeln
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  &__items {
    list-style: none;
    padding: 0;
    margin: 0 0 $spacing-lg;
    flex-grow: 1;
  }
  
  &__item {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: $spacing-sm;
    padding: $spacing-md 0;
    border-bottom: 1px solid $color-border;
    position: relative;
    
    &:last-child {
      border-bottom: none;
    }
    
    &-img-container {
      width: 80px;
      height: 80px;
      border-radius: $border-radius-sm;
      overflow: hidden;
    }
    
    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    &-content {
      display: flex;
      flex-direction: column;
    }
    
    &-title {
      font-size: $font-size-md;
      margin: 0 0 $spacing-xs;
      font-weight: $font-weight-medium;
    }
    
    &-variant {
      font-size: $font-size-sm;
      color: $color-text-muted;
      margin: 0 0 $spacing-xs;
    }
    
    &-price-qty {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    &-price {
      font-weight: $font-weight-bold;
      margin: 0;
    }
    
    &-qty {
      display: flex;
      align-items: center;
      
      &-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid $color-border;
        background-color: transparent;
        color: $color-text;
        cursor: pointer;
        transition: all $transition-base;
        
        &:hover:not(:disabled) {
          border-color: $color-primary;
          color: $color-primary;
        }
        
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      
      &-value {
        min-width: 30px;
        text-align: center;
      }
    }
    
    &-remove {
      background: none;
      border: none;
      color: $color-text-muted;
      cursor: pointer;
      padding: $spacing-xs;
      align-self: flex-start;
      
      &:hover {
        color: $color-error;
      }
    }
  }
  
  // Zusammenfassung
  &__summary {
    padding-top: $spacing-md;
    border-top: 1px solid $color-border;
  }
  
  &__summary-row {
    @include flex-row(space-between, center);
    margin-bottom: $spacing-sm;
    font-size: $font-size-md;
  }
  
  &__summary-total {
    margin-top: $spacing-md;
    padding-top: $spacing-md;
    border-top: 1px solid $color-border;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }
  
  &__actions {
    margin-top: $spacing-lg;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-sm;
  }
  
  &__btn {
    justify-content: center;
  }
  
  // Overlay
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-black, 0.5);
    z-index: $z-index-modal-backdrop;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }
}
</style>