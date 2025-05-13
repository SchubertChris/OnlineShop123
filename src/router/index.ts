import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Seiten importieren
import LandingPage from '../Pages/Landingpage.vue';
import Shop from '../Pages/Shop.vue';
import About from '../Pages/About.vue';
import Legal from '../Pages/Legal.vue';
import Contact from '../Pages/Contact.vue';
import LoginRegister from '../Pages/LoginRegister.vue';
import Cart from '../Pages/Cart.vue';
import AdminDashboard from '../Pages/AdminDashboard.vue';

// Routen definieren
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landingpage',
    component: LandingPage,
    meta: {
      title: 'ShopOfSpirit - Willkommen'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: 'ShopOfSpirit - Alle Produkte'
    }
  },
  {
    path: '/shop/:category',
    name: 'ShopCategory',
    component: Shop,
    meta: {
      title: 'ShopOfSpirit - Kategorie'
    },
    beforeEnter: (to: any, _from: any, next: any) => {
      const allowedCategories = ['damen', 'herren', 'unisex'];
      if (to.params.category && allowedCategories.includes(to.params.category as string)) {
        // Dynamischer Meta-Title
        to.meta.title = `ShopOfSpirit - ${(to.params.category as string).charAt(0).toUpperCase() + (to.params.category as string).slice(1)}`;
        next();
      } else {
        // Bei ungültiger Kategorie zum Shop umleiten
        next('/shop');
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'ShopOfSpirit - Über uns'
    }
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
    meta: {
      title: 'ShopOfSpirit - Rechtliches'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'ShopOfSpirit - Kontakt'
    }
  },
  {
    path: '/login-register',
    name: 'LoginRegister',
    component: LoginRegister,
    meta: {
      title: 'ShopOfSpirit - Anmelden / Registrieren'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: 'ShopOfSpirit - Warenkorb'
    }
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      title: 'ShopOfSpirit - Admin Dashboard',
      requiresAuth: true, // Diese Route erfordert Authentifizierung
      adminOnly: true // Diese Route erfordert Admin-Rechte
    }
  },
  // 404-Seite - Weiterleitung zur Homepage
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

// Router erstellen
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, _from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

router.beforeEach((to: any, from: any, next: any) => {
  // Hier könnte später die Authentifizierungsprüfung implementiert werden
  // Beispiel:
  // if (to.meta.requiresAuth && !isAuthenticated()) {
  //   next('/login-register');
  // } else if (to.meta.adminOnly && !isAdmin()) {
  //   next('/');
  // } else {
  //   next();
  // }
  
  next();
});

export default router; 