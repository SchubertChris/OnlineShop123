<script setup lang="ts">
// Keine komplexen Imports, nur grundlegende Funktionalität
</script>

<template>
  <div class="landingpage">
    <!-- Hero/Banner-Bereich -->
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">ShopOfSpirit</h1>
          <p class="hero__subtitle">Entdecke hochwertige Produkte für Körper und Geist</p>
          <router-link to="/shop" class="btn btn-primary">
            Jetzt einkaufen
          </router-link>
        </div>
      </div>
    </section>

    <!-- Kategorien -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">Unsere Kategorien</h2>
        
        <div class="categories__grid">
          <div class="category-card">
            <div class="category-card__content">
              <h3 class="category-card__title">Meditation</h3>
              <p class="category-card__text">Produkte für deine Meditationspraxis</p>
              <router-link to="/shop" class="btn btn-outline btn-sm">Entdecken</router-link>
            </div>
          </div>
          
          <div class="category-card">
            <div class="category-card__content">
              <h3 class="category-card__title">Naturkosmetik</h3>
              <p class="category-card__text">Natürliche Pflege für Körper und Seele</p>
              <router-link to="/shop" class="btn btn-outline btn-sm">Entdecken</router-link>
            </div>
          </div>
          
          <div class="category-card">
            <div class="category-card__content">
              <h3 class="category-card__title">Räucherwerk</h3>
              <p class="category-card__text">Für spirituelle Reinigung und Entspannung</p>
              <router-link to="/shop" class="btn btn-outline btn-sm">Entdecken</router-link>
            </div>
          </div>
          
          <div class="category-card">
            <div class="category-card__content">
              <h3 class="category-card__title">Edelsteine</h3>
              <p class="category-card__text">Energetische Begleiter für deinen Alltag</p>
              <router-link to="/shop" class="btn btn-outline btn-sm">Entdecken</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Über uns -->
    <section class="about-teaser">
      <div class="container">
        <div class="about-teaser__content">
          <h2 class="section-title">Über uns</h2>
          <p class="about-teaser__text">
            ShopOfSpirit steht für nachhaltige, achtsam ausgewählte Produkte, die dein spirituelles
            Wohlbefinden fördern. Unsere Mission ist es, dir Produkte anzubieten, die Körper und 
            Geist in Einklang bringen.
          </p>
          <router-link to="/about" class="btn btn-primary">Mehr erfahren</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../Styles/base/variables.scss';
@import '../Styles/base/mixins.scss';

// Hero-Bereich
.hero {
  background-color: $color-primary-light;
  padding: $spacing-xxl 0;
  
  &__content {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
  }
  
  &__title {
    font-size: $font-size-xxxl;
    margin-bottom: $spacing-md;
    color: $color-primary-dark;
  }
  
  &__subtitle {
    font-size: $font-size-lg;
    margin-bottom: $spacing-lg;
    color: $color-text;
  }
}

// Kategorien
.categories {
  padding: $spacing-xxl 0;
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-lg;
    
    @include media-max($breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include media-max($breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
}

.category-card {
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
  
  &__title {
    font-size: $font-size-lg;
    margin-bottom: $spacing-sm;
    color: $color-primary;
  }
  
  &__text {
    color: $color-text-muted;
    margin-bottom: $spacing-md;
  }
}

// Über uns Teaser
.about-teaser {
  background-color: $color-primary-dark;
  color: $color-white;
  padding: $spacing-xxl 0;
  
  &__content {
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
  }
  
  .section-title {
    color: $color-white;
    
    &::after {
      background-color: $color-white;
    }
  }
  
  &__text {
    margin-bottom: $spacing-lg;
    line-height: $line-height-loose;
  }
}

// Allgemeine Bereichs-Titel
.section-title {
  text-align: center;
  font-size: $font-size-xxl;
  margin-bottom: $spacing-xl;
  position: relative;
  padding-bottom: $spacing-sm;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: $color-primary;
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
  
  &-outline {
    background-color: transparent;
    border: 1px solid $color-primary;
    color: $color-primary;
    
    &:hover, &:focus {
      background-color: $color-primary;
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