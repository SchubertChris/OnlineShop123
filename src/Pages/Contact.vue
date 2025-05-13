<script setup lang="ts">
import { reactive } from 'vue';

// Einfaches Kontaktformular
const contactForm = reactive({
  name: '',
  email: '',
  message: '',
  submitted: false
});

// Formular absenden
const submitForm = () => {
  // In einer tatsächlichen Implementierung würde hier ein API-Call erfolgen
  console.log('Formular abgesendet:', contactForm);
  
  // Simuliere erfolgreiche Übermittlung
  contactForm.submitted = true;
  
  // Formular zurücksetzen
  contactForm.name = '';
  contactForm.email = '';
  contactForm.message = '';
};
</script>

<template>
  <div class="contact-page">
    <!-- Kontakt Header -->
    <section class="contact-header">
      <div class="container">
        <h1 class="contact-header__title">Kontakt</h1>
        <p class="contact-header__subtitle">Wir freuen uns, von dir zu hören</p>
      </div>
    </section>

    <!-- Kontakt Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-layout">
          <!-- Kontaktinformationen -->
          <div class="contact-info">
            <h2 class="contact-info__title">Kontaktiere uns</h2>
            <p class="contact-info__text">
              Du hast Fragen zu unseren Produkten oder benötigst Unterstützung? 
              Wir helfen dir gerne weiter.
            </p>
            
            <div class="contact-info__details">
              <div class="contact-info__item">
                <h3 class="contact-info__subtitle">Adresse</h3>
                <p class="contact-info__text">
                  Spiritueller Weg 42<br>
                  10115 Berlin<br>
                  Deutschland
                </p>
              </div>
              
              <div class="contact-info__item">
                <h3 class="contact-info__subtitle">E-Mail</h3>
                <p class="contact-info__text">
                  <a href="mailto:info@shopofspirit.de" class="contact-info__link">
                    info@shopofspirit.de
                  </a>
                </p>
              </div>
              
              <div class="contact-info__item">
                <h3 class="contact-info__subtitle">Telefon</h3>
                <p class="contact-info__text">
                  <a href="tel:+4930123456789" class="contact-info__link">
                    +49 30 123456789
                  </a>
                </p>
              </div>
              
              <div class="contact-info__item">
                <h3 class="contact-info__subtitle">Öffnungszeiten</h3>
                <p class="contact-info__text">
                  Mo-Fr: 9:00 - 17:00 Uhr
                </p>
              </div>
            </div>
          </div>

          <!-- Kontaktformular -->
          <div class="contact-form">
            <h2 class="contact-form__title">Schreib uns eine Nachricht</h2>
            
            <div v-if="contactForm.submitted" class="contact-form__success">
              <h3 class="contact-form__success-title">Vielen Dank für deine Nachricht!</h3>
              <p class="contact-form__success-text">
                Wir haben deine Anfrage erhalten und werden uns so schnell wie möglich bei dir melden.
              </p>
            </div>
            
            <form v-else @submit.prevent="submitForm" class="contact-form__form">
              <div class="form-group">
                <label for="name" class="form-label">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="contactForm.name" 
                  class="form-input" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">E-Mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="contactForm.email" 
                  class="form-input" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Nachricht *</label>
                <textarea 
                  id="message" 
                  v-model="contactForm.message" 
                  class="form-textarea" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Nachricht senden</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../Styles/base/variables.scss';
@import '../Styles/base/mixins.scss';

// Kontakt Header
.contact-header {
  background-color: $color-secondary-dark;
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

// Kontakt Layout
.contact-content {
  padding: $spacing-xxl 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xxl;
  
  @include media-max($breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

// Kontaktinformationen
.contact-info {
  &__title {
    font-size: $font-size-xl;
    color: $color-primary;
    margin-bottom: $spacing-md;
  }
  
  &__text {
    color: $color-text;
    margin-bottom: $spacing-md;
  }
  
  &__details {
    margin-top: $spacing-lg;
  }
  
  &__item {
    margin-bottom: $spacing-lg;
  }
  
  &__subtitle {
    font-size: $font-size-md;
    color: $color-primary;
    margin-bottom: $spacing-xs;
  }
  
  &__link {
    color: $color-primary;
    text-decoration: none;
    transition: color $transition-base;
    
    &:hover {
      color: $color-primary-dark;
      text-decoration: underline;
    }
  }
}

// Kontaktformular
.contact-form {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $shadow-md;
  
  &__title {
    font-size: $font-size-xl;
    color: $color-primary;
    margin-bottom: $spacing-lg;
  }
  
  &__success {
    text-align: center;
    padding: $spacing-xl 0;
    
    &-title {
      font-size: $font-size-lg;
      color: $color-success;
      margin-bottom: $spacing-md;
    }
    
    &-text {
      color: $color-text;
    }
  }
}

// Formular Stile
.form-group {
  margin-bottom: $spacing-md;
}

.form-label {
  display: block;
  margin-bottom: $spacing-xs;
  font-weight: $font-weight-medium;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: $spacing-sm;
  border: 1px solid $color-grey-light;
  border-radius: $border-radius-sm;
  transition: border-color $transition-base;
  
  &:focus {
    outline: none;
    border-color: $color-primary;
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