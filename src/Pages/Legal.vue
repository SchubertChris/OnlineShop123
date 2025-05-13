<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Aktuelle Route für Tab-Navigation
const route = useRoute();

// Aktiver Tab basierend auf URL-Parameter
const activeTab = ref('agb');

// Tabs beim Laden der Komponente aus URL-Parameter setzen
onMounted(() => {
  // Überprüfe, ob in der URL ein 'page' Parameter vorhanden ist
  if (route.query.page && typeof route.query.page === 'string') {
    activeTab.value = route.query.page;
  }
});

// Tab ändern
const changeTab = (tab: string) => {
  activeTab.value = tab;
};

// Inhalte für die einzelnen Tabs
const tabContents = computed(() => {
  return {
    agb: {
      title: 'Allgemeine Geschäftsbedingungen',
      content: `
        <h3>1. Geltungsbereich</h3>
        <p>1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der ShopOfSpirit GmbH (nachfolgend "Verkäufer"), gelten für alle Verträge, die ein Verbraucher oder Unternehmer (nachfolgend "Kunde") mit dem Verkäufer hinsichtlich der vom Verkäufer in seinem Online-Shop dargestellten Waren und/oder Leistungen abschließt.</p>
        <p>1.2 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</p>
        
        <h3>2. Vertragsschluss</h3>
        <p>2.1 Die im Online-Shop des Verkäufers dargestellten Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
        <p>2.2 Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde nach Eingabe seiner persönlichen Daten und durch Klicken des Buttons "Zahlungspflichtig bestellen" im abschließenden Schritt des Bestellprozesses ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.</p>
        
        <h3>3. Preise und Zahlungsbedingungen</h3>
        <p>3.1 Die vom Verkäufer angegebenen Preise sind Gesamtpreise und enthalten die gesetzliche Umsatzsteuer. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung gesondert angegeben.</p>
        <p>3.2 Dem Kunden stehen verschiedene Zahlungsmöglichkeiten zur Verfügung, die im Online-Shop des Verkäufers angegeben werden.</p>
        
        <h3>4. Liefer- und Versandbedingungen</h3>
        <p>4.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist.</p>
        <p>4.2 Sendet das Transportunternehmen die versandte Ware an den Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war, trägt der Kunde die Kosten für den erfolglosen Versand.</p>
      `
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      content: `
        <h3>1. Datenschutz auf einen Blick</h3>
        <h4>Allgemeine Hinweise</h4>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
        
        <h4>Datenerfassung auf unserer Website</h4>
        <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
        
        <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4>Datenschutz</h4>
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
        
        <h3>3. Datenerfassung auf unserer Website</h3>
        <h4>Cookies</h4>
        <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
        <p>Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
      `
    },
    impressum: {
      title: 'Impressum',
      content: `
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          ShopOfSpirit GmbH<br>
          Spiritueller Weg 42<br>
          10115 Berlin
        </p>
        
        <h3>Vertreten durch</h3>
        <p>Elena Müller, Geschäftsführerin</p>
        
        <h3>Kontakt</h3>
        <p>
          Telefon: +49 30 123456789<br>
          E-Mail: info@shopofspirit.de
        </p>
        
        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br>
          Registergericht: Amtsgericht Berlin-Charlottenburg<br>
          Registernummer: HRB 123456
        </p>
        
        <h3>Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
          DE 123456789
        </p>
      `
    },
    widerrufsrecht: {
      title: 'Widerrufsrecht',
      content: `
        <h3>Widerrufsbelehrung</h3>
        <h4>Widerrufsrecht</h4>
        <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p>
        <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (ShopOfSpirit GmbH, Spiritueller Weg 42, 10115 Berlin, Tel.: +49 30 123456789, E-Mail: info@shopofspirit.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
        
        <h4>Folgen des Widerrufs</h4>
        <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
      `
    }
  };
});
</script>

<template>
  <div class="legal-page">
    <!-- Legal Header -->
    <section class="legal-header">
      <div class="container">
        <h1 class="legal-header__title">Rechtliches</h1>
      </div>
    </section>

    <!-- Legal Navigation -->
    <section class="legal-nav">
      <div class="container">
        <div class="legal-nav__tabs">
          <button 
            class="legal-nav__tab" 
            :class="{ 'is-active': activeTab === 'agb' }"
            @click="changeTab('agb')"
          >
            AGB
          </button>
          <button 
            class="legal-nav__tab" 
            :class="{ 'is-active': activeTab === 'datenschutz' }"
            @click="changeTab('datenschutz')"
          >
            Datenschutz
          </button>
          <button 
            class="legal-nav__tab" 
            :class="{ 'is-active': activeTab === 'impressum' }"
            @click="changeTab('impressum')"
          >
            Impressum
          </button>
          <button 
            class="legal-nav__tab" 
            :class="{ 'is-active': activeTab === 'widerrufsrecht' }"
            @click="changeTab('widerrufsrecht')"
          >
            Widerrufsrecht
          </button>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="legal-content">
      <div class="container">
        <div class="legal-card">
          <h2 class="legal-card__title">{{ tabContents[activeTab as keyof typeof tabContents].title }}</h2>
          <div class="legal-card__content" v-html="tabContents[activeTab as keyof typeof tabContents].content"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../Styles/base/variables.scss';
@import '../Styles/base/mixins.scss';

// Legal Header
.legal-header {
  background-color: $color-grey-light;
  padding: $spacing-xl 0;
  text-align: center;
  
  &__title {
    font-size: $font-size-xxl;
    color: $color-text;
  }
}

// Legal Navigation
.legal-nav {
  background-color: $color-white;
  box-shadow: $shadow-sm;
  padding: $spacing-md 0;
  position: sticky;
  top: 0;
  z-index: $z-index-sticky;
  
  &__tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing-sm;
  }
  
  &__tab {
    padding: $spacing-sm $spacing-md;
    background: none;
    border: none;
    color: $color-text;
    cursor: pointer;
    font-weight: $font-weight-medium;
    border-radius: $border-radius-sm;
    transition: all $transition-base;
    
    &:hover {
      background-color: rgba($color-primary, 0.1);
    }
    
    &.is-active {
      background-color: $color-primary;
      color: $color-white;
    }
  }
}

// Legal Content
.legal-content {
  padding: $spacing-xxl 0;
}

.legal-card {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $shadow-md;
  
  &__title {
    font-size: $font-size-xl;
    color: $color-primary;
    margin-bottom: $spacing-lg;
    padding-bottom: $spacing-sm;
    border-bottom: 1px solid $color-border;
  }
  
  &__content {
    // Überschreiben von v-html-Styling 
    :deep(h3) {
      font-size: $font-size-lg;
      color: $color-primary-dark;
      margin: $spacing-lg 0 $spacing-sm;
    }
    
    :deep(h4) {
      font-size: $font-size-md;
      color: $color-text;
      margin: $spacing-md 0 $spacing-xs;
    }
    
    :deep(p) {
      margin-bottom: $spacing-md;
      line-height: $line-height-base;
    }
  }
}

.container {
  @include container;
}
</style>