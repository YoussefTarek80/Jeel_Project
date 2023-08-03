
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from './component/LoginForm/login.vue';
import Dashboard from './component/Dashboard/Dashboard.vue';
import Countries from './component/Dashboard/Pages/Content-pages/Countries/CountriesPages.vue';
import addCountry from './component/Dashboard/Pages/Content-pages/Countries/AddCountryPage.vue';
import EditCountry from './component/Dashboard/Pages/Content-pages/Countries/EditCountry.vue';
import Paths from './component/Dashboard/Pages/Content-pages/Paths/PathPage'; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { 
      path: '/dashboard', 
      component: Dashboard,
      meta: { requiresAuth: true } 
    },
    { 
      path: '/dashboard/countries', 
      component: Countries,
      meta: { requiresAuth: true }
    },
    { 
      path: '/dashboard/countries/AddCountry', 
      component: addCountry,
      meta: { requiresAuth: true } 
    },
    { 
      path: "/dashboard/countries/AddCountry/EditCountry/:id", 
      component: EditCountry,
      meta: { requiresAuth: true } 
    },
    { 
      path: '/dashboard/pathes', 
      component: Paths,
      meta: { requiresAuth: true }
    },
  ],
});

export default router;