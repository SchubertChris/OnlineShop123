<script setup lang="ts">
// Keine komplexen Imports, nur grundlegende Funktionalität
</script>

<template>
  <div class="about-page">
    <!-- Hero-Bereich -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero__content">
          <h1 class="about-hero__title">Über uns</h1>
          <p class="about-hero__subtitle">
            Eine Gemeinschaft für achtsames und spirituelles Leben
          </p>
        </div>
      </div>
    </section>

    <!-- Unsere Geschichte -->
    <section class="about-story">
      <div class="container">
        <div class="about-story__content">
          <h2 class="section-title">Unsere Geschichte</h2>
          <p class="about-story__text">
            ShopOfSpirit wurde aus der Überzeugung heraus gegründet, dass spirituelles Wachstum und nachhaltiges Leben Hand in Hand gehen. 
            Was als kleiner Online-Shop für spirituelle Literatur und Zubehör begann, hat sich zu einer blühenden Gemeinschaft entwickelt, 
            die Menschen auf ihrem individuellen Weg zu mehr Achtsamkeit, Bewusstsein und Harmonie unterstützt.
          </p>
          <p class="about-story__text">
            Unsere Gründerin Elena Müller entdeckte auf ihren Reisen durch Südostasien die tiefe Verbindung zwischen 
            spirituellen Praktiken und dem Respekt für die Natur. Inspiriert von dieser Erfahrung, beschloss sie, 
            ein Unternehmen zu gründen, das hochwertige, ethisch hergestellte Produkte anbietet, die sowohl dem 
            individuellen Wohlbefinden als auch dem Planeten zugutekommen.
          </p>
          <p class="about-story__text">
            Heute sind wir stolz darauf, eine kuratierte Auswahl an Produkten anzubieten, die mit Sorgfalt ausgewählt wurden, 
            um dich auf deinem spirituellen Weg zu unterstützen und gleichzeitig positive Veränderungen in der Welt zu fördern.
          </p>
        </div>
      </div>
    </section>

    <!-- Unsere Werte -->
    <section class="about-values">
      <div class="container">
        <h2 class="section-title">Unsere Werte</h2>
        
        <div class="values-grid">
          <div class="value-card">
            <h3 class="value-card__title">Achtsamkeit</h3>
            <p class="value-card__text">
              Wir handeln bewusst und überlegt in allen Aspekten unseres Geschäfts, von der Produktauswahl bis zum Kundenservice.
            </p>
          </div>
          
          <div class="value-card">
            <h3 class="value-card__title">Nachhaltigkeit</h3>
            <p class="value-card__text">
              Wir setzen auf umweltfreundliche Materialien, ethische Herstellung und nachhaltige Verpackungen für alle unsere Produkte.
            </p>
          </div>
          
          <div class="value-card">
            <h3 class="value-card__title">Authentizität</h3>
            <p class="value-card__text">
              Wir bleiben unseren Werten treu und bieten nur Produkte an, hinter denen wir vollständig stehen und die wir selbst nutzen würden.
            </p>
          </div>
          
          <div class="value-card">
            <h3 class="value-card__title">Gemeinschaft</h3>
            <p class="value-card__text">
              Wir fördern eine unterstützende Gemeinschaft von Gleichgesinnten, die Wert auf spirituelles Wachstum und bewusstes Leben legen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontakt CTA -->
    <section class="about-contact">
      <div class="container">
        <div class="about-contact__inner">
          <h2 class="about-contact__title">Hast du Fragen?</h2>
          <p class="about-contact__text">
            Wir freuen uns, von dir zu hören und dir bei allen Fragen zu helfen.
          </p>
          <router-link to="/contact" class="btn btn-primary">Kontaktiere uns</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../Styles/base/variables.scss';
@import '../Styles/base/mixins.scss';

// Hero-Bereich
.about-hero {
  background-color: $color-primary-dark;
  padding: $spacing-xxl 0;
  color: $color-white;
  
  &__content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  &__title {
    font-size: $font-size-xxxl;
    margin-bottom: $spacing-md;
  }
  
  &__subtitle {
    font-size: $font-size-lg;
  }
}

// Unsere Geschichte
.about-story {
  padding: $spacing-xxl 0;
  
  &__content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  &__text {
    margin-bottom: $spacing-md;
    line-height: $line-height-loose;
  }
}

// Unsere Werte
.about-values {
  padding: $spacing-xxl 0;
  background-color: $color-primary-light;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-lg;
  
  @include media-max($breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.value-card {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  box-shadow: $shadow-md;
  transition: transform $transition-base;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &__title {
    color: $color-primary;
    margin-bottom: $spacing-sm;
    font-size: $font-size-lg;
  }
  
  &__text {
    color: $color-text-muted;
    line-height: $line-height-base;
  }
}

// Kontakt CTA
.about-contact {
  padding: $spacing-xxl 0;
  background-color: $color-secondary;
  
  &__inner {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    color: $color-white;
  }
  
  &__title {
    font-size: $font-size-xxl;
    margin-bottom: $spacing-md;
  }
  
  &__text {
    margin-bottom: $spacing-lg;
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
}

.container {
  @include container;
}
</style>