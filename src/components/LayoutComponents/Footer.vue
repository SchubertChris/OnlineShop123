<template>
  <footer class="footer">
    <div class="container">
      <!-- Footer Top: Newsletter und Social Media -->
      <div class="footer__top">
        <div class="footer__newsletter">
          <h3 class="footer__heading">Newsletter abonnieren</h3>
          <p class="footer__text">Bleiben Sie informiert über neue Produkte und Angebote.</p>
          <form class="footer__form" @submit.prevent="subscribeToNewsletter">
            <div class="footer__form-group">
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Ihre E-Mail-Adresse"
                class="footer__input"
                aria-label="E-Mail für Newsletter"
                required
              />
              <button type="submit" class="btn btn-primary footer__btn">
                Abonnieren
              </button>
            </div>
          </form>
        </div>
        <div class="footer__social">
          <h3 class="footer__heading">Folgen Sie uns</h3>
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <a href="#" class="footer__social-link" aria-label="Besuchen Sie uns auf Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#" class="footer__social-link" aria-label="Besuchen Sie uns auf Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#" class="footer__social-link" aria-label="Besuchen Sie uns auf Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#" class="footer__social-link" aria-label="Besuchen Sie uns auf Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Hauptbereich mit Links -->
      <div class="footer__main">
        <div class="footer__column">
          <div class="footer__logo">
            <img :src="logoSrc" alt="ShopOfSpirit Logo" class="footer__logo-img" />
            <span class="footer__logo-text">ShopOfSpirit</span>
          </div>
          <p class="footer__text">
            Entdecken Sie hochwertige Produkte, die Körper und Geist in Einklang bringen.
          </p>
        </div>
        
        <div class="footer__column">
          <h3 class="footer__heading">Shop</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link to="/shop" class="footer__link">Alle Produkte</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/shop?category=damen" class="footer__link">Damen</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/shop?category=herren" class="footer__link">Herren</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/shop?category=unisex" class="footer__link">Unisex</router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h3 class="footer__heading">Unternehmen</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link to="/about" class="footer__link">Über uns</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/contact" class="footer__link">Kontakt</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/legal?page=faq" class="footer__link">FAQ</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/legal?page=careers" class="footer__link">Karriere</router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h3 class="footer__heading">Rechtliches</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <router-link to="/legal?page=terms" class="footer__link">AGB</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/legal?page=privacy" class="footer__link">Datenschutz</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/legal?page=shipping" class="footer__link">Versand & Rückgabe</router-link>
            </li>
            <li class="footer__item">
              <router-link to="/legal?page=imprint" class="footer__link">Impressum</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom mit Copyright und Zahlungsarten -->
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>&copy; {{ currentYear }} ShopOfSpirit. Alle Rechte vorbehalten.</p>
        </div>
        <div class="footer__payment">
          <span class="footer__payment-text">Zahlungsarten:</span>
          <div class="footer__payment-icons">
            <span class="footer__payment-icon" aria-label="PayPal">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13l2.5-8h3.5c1.7 0 3 .3 3 2.5 0 2.8-2.3 4.5-5 4.5h-2l-.5 1"></path>
                <path d="M8 19l2.3-7"></path>
                <path d="M6.5 16.5h5.5"></path>
                <path d="M16 19l2.3-7"></path>
                <path d="M14.5 16.5h5.5"></path>
              </svg>
            </span>
            <span class="footer__payment-icon" aria-label="Kreditkarte">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </span>
            <span class="footer__payment-icon" aria-label="Überweisung">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
                <line x1="7" y1="15" x2="9" y2="15"></line>
                <line x1="12" y1="15" x2="17" y2="15"></line>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  setup() {
    const newsletterEmail = ref('');
    const logoSrc = ref('/src/assets/images/Logo/Logo.png');
    
    // Aktuelles Jahr für Copyright
    const currentYear = computed(() => new Date().getFullYear());
    
    // Newsletter-Anmeldung (würde normalerweise einen API-Call tätigen)
    const subscribeToNewsletter = () => {
      // Implementierung eines API-Calls für Newsletter-Anmeldung
      console.log(`Newsletter-Anmeldung für: ${newsletterEmail.value}`);
      newsletterEmail.value = '';
      // Hier könnte ein Erfolgsdialog oder Toast angezeigt werden
    };
    
    return {
      newsletterEmail,
      logoSrc,
      currentYear,
      subscribeToNewsletter
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../Styles/base/variables.scss';
@import '../../Styles/base/mixins.scss';

.footer {
  background-color: $color-background;
  border-top: 1px solid $color-border;
  padding: $spacing-xl 0;
  margin-top: $spacing-xxl;
  color: $color-text;
  transition: background-color $transition-base, border-color $transition-base;
  
  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-xl;
    margin-bottom: $spacing-xl;
    padding-bottom: $spacing-xl;
    border-bottom: 1px solid $color-border;
    
    @include media-max($breakpoint-md) {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
    }
  }
  
  &__main {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: $spacing-xl;
    margin-bottom: $spacing-xl;
    padding-bottom: $spacing-xl;
    border-bottom: 1px solid $color-border;
    
    @include media-max($breakpoint-md) {
      grid-template-columns: 1fr 1fr;
      gap: $spacing-lg;
    }
    
    @include media-max($breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
  
  &__bottom {
    @include flex-row(space-between, center);
    
    @include media-max($breakpoint-md) {
      flex-direction: column;
      align-items: flex-start;
      gap: $spacing-md;
    }
  }
  
  // Logo
  &__logo {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-md;
    
    &-img {
      height: 50px;
      width: auto;
      margin-right: $spacing-xs;
    }
    
    &-text {
      font-size: $font-size-lg;
      font-family: $font-secondary;
      font-weight: $font-weight-bold;
    }
  }
  
  // Überschriften und Text
  &__heading {
    font-size: $font-size-md;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -$spacing-xs;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: $color-primary;
    }
  }
  
  &__text {
    margin-bottom: $spacing-md;
    line-height: $line-height-base;
    color: $color-text-muted;
  }
  
  // Newsletter
  &__form {
    margin-top: $spacing-md;
  }
  
  &__form-group {
    display: flex;
    
    @include media-max($breakpoint-sm) {
      flex-direction: column;
    }
  }
  
  &__input {
    flex: 1;
    padding: $spacing-sm;
    border: 1px solid $color-border;
    border-radius: $border-radius-md 0 0 $border-radius-md;
    background-color: $color-background;
    color: $color-text;
    
    @include media-max($breakpoint-sm) {
      border-radius: $border-radius-md;
      margin-bottom: $spacing-xs;
    }
    
    &:focus {
      border-color: $color-primary;
      outline: none;
    }
  }
  
  &__btn {
    border-radius: 0 $border-radius-md $border-radius-md 0;
    
    @include media-max($breakpoint-sm) {
      border-radius: $border-radius-md;
      width: 100%;
    }
  }
  
  // Social Media
  &__social-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  &__social-item {
    margin-right: $spacing-md;
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  &__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba($color-primary, 0.1);
    color: $color-primary;
    transition: all $transition-base;
    
    &:hover, &:focus {
      background-color: $color-primary;
      color: $color-white;
      transform: translateY(-3px);
    }
  }
  
  // Link-Listen
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  &__item {
    margin-bottom: $spacing-sm;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__link {
    color: $color-text-muted;
    text-decoration: none;
    transition: color $transition-base;
    
    &:hover, &:focus {
      color: $color-primary;
      text-decoration: none;
    }
  }
  
  // Copyright und Zahlungsarten
  &__copyright {
    font-size: $font-size-sm;
    color: $color-text-muted;
  }
  
  &__payment {
    display: flex;
    align-items: center;
    
    &-text {
      font-size: $font-size-sm;
      margin-right: $spacing-sm;
      color: $color-text-muted;
    }
    
    &-icons {
      display: flex;
    }
    
    &-icon {
      margin-right: $spacing-sm;
      color: $color-text-muted;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>