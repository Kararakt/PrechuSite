import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import Contact from "../src/pages/Contact.vue";
import Services from "../src/pages/Services.vue";
import Products from "../src/pages/Products.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/Contact", component: Contact },
  { path: "/Services", component: Services },
  { path: "/Products", component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;