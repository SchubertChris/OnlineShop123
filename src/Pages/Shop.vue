<script setup lang="ts">
// Einfache Produkt-Array für die Shop-Seite
const products = [
  {
    id: 1,
    name: 'Meditationskissen',
    price: 49.99,
    category: 'Meditation'
  },
  {
    id: 2,
    name: 'Bio-Gesichtsöl',
    price: 29.99,
    category: 'Naturkosmetik'
  },
  {
    id: 3,
    name: 'Palo Santo Holz',
    price: 12.99,
    category: 'Räucherwerk'
  },
  {
    id: 4,
    name: 'Amethyst Cluster',
    price: 39.99,
    category: 'Edelsteine'
  },
  {
    id: 5,
    name: 'Yogamatte aus Kork',
    price: 79.99,
    category: 'Yoga'
  },
  {
    id: 6,
    name: 'Buch: Achtsamkeit im Alltag',
    price: 19.99,
    category: 'Bücher'
  },
  {
    id: 7,
    name: 'Bio-Lippenbalsam',
    price: 8.99,
    category: 'Naturkosmetik'
  },
  {
    id: 8,
    name: 'Rosenquarz',
    price: 24.99,
    category: 'Edelsteine'
  }
];

// Formatieren des Preises
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

// Einfache Warenkorb-Funktion (keine tatsächliche Implementierung)
const addToCart = (productId: number) => {
  console.log(`Produkt mit ID ${productId} zum Warenkorb hinzugefügt`);
  alert(`Produkt wurde zum Warenkorb hinzugefügt`);
};
</script>

<template>
  <div class="shop-page">
    <!-- Shop Header -->
    <section class="shop-header">
      <div class="container">
        <h1 class="shop-header__title">Unser Shop</h1>
        <p class="shop-header__subtitle">Entdecke unsere spirituellen Produkte</p>
      </div>
    </section>

    <!-- Shop Content -->
    <section class="shop-content">
      <div class="container">
        <div class="shop-layout">
          <!-- Sidebar mit Kategorien -->
          <aside class="shop-sidebar">
            <div class="shop-sidebar__section">
              <h3 class="shop-sidebar__title">Kategorien</h3>
              <ul class="shop-sidebar__list">
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Alle Produkte</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Meditation</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Naturkosmetik</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Räucherwerk</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Edelsteine</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Yoga</a>
                </li>
                <li class="shop-sidebar__item">
                  <a href="#" class="shop-sidebar__link">Bücher</a>
                </li>
              </ul>
            </div>
          </aside>

          <!-- Produkt-Grid -->
          <div class="shop-products">
            <div class="shop-products__grid">
              <div v-for="product in products" :key="product.id" class="product-card">
                <div class="product-card__content">
                  <span class="product-card__category">{{ product.category }}</span>
                  <h3 class="product-card__title">{{ product.name }}</h3>
                  <div class="product-card__price">{{ formatPrice(product.price) }}</div>
                  <button @click="addToCart(product.id)" class="btn btn-primary btn-sm product-card__btn">
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../Styles/base/variables.scss';
@import '../Styles/base/mixins.scss';

// Shop Header
.shop-header {
  background-color: $color-primary;
  color: $color-white;
  padding: $spacing-xxl 0;
  text-align: center;
  
  &__title {
    font-size: $font-size-xxl;
    margin-bottom: $spacing-md;
  }
  
  &__subtitle {
    font-size: $font-size-lg;
  }
}

// Shop Layout
.shop-content {
  padding: $spacing-xxl 0;
}

.shop-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: $spacing-xl;
  
  @include media-max($breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

// Shop Sidebar
.shop-sidebar {
  @include media-max($breakpoint-md) {
    display: none; // Auf Mobilgeräten ausblenden
  }
  
  &__section {
    margin-bottom: $spacing-lg;
    padding-bottom: $spacing-lg;
    border-bottom: 1px solid $color-border;
  }
  
  &__title {
    font-size: $font-size-md;
    margin-bottom: $spacing-md;
    color: $color-primary;
  }
  
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  &__item {
    margin-bottom: $spacing-sm;
  }
  
  &__link {
    color: $color-text;
    text-decoration: none;
    transition: color $transition-base;
    
    &:hover {
      color: $color-primary;
    }
  }
}

// Shop Products
.shop-products {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
    
    @include media-max($breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include media-max($breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
}

// Product Card
.product-card {
  border-radius: $border-radius-lg;
  background-color: $color-white;
  box-shadow: $shadow-md;
  overflow: hidden;
  transition: transform $transition-base, box-shadow $transition-base;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
  
  &__content {
    padding: $spacing-lg;
    text-align: center;
  }
  
  &__category {
    display: block;
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin-bottom: $spacing-xs;
  }
  
  &__title {
    font-size: $font-size-md;
    margin-bottom: $spacing-sm;
    color: $color-text;
  }
  
  &__price {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin-bottom: $spacing-md;
  }
  
  &__btn {
    width: 100%;
  }
}

// Button Styles
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-sm $spacing-lg;
  border-radius: $border-radius-md;
  font-weight: $font-weight-medium;
  transition: all $transition-base;
  text-decoration: none;
  border: none;
  cursor: pointer;
  
  &-primary {
    background-color: $color-primary;
    color: $color-white;
    
    &:hover, &:focus {
      background-color: darken($color-primary, 10%);
      color: $color-white;
      transform: translateY(-2px);
      text-decoration: none;
    }
  }
  
  &-sm {
    padding: $spacing-xs $spacing-md;
    font-size: $font-size-sm;
  }
}

.container {
  @include container;
}
</style>