import { createRouter, createWebHistory } from "vue-router";
const landingP = () => import("./pages/Landing.vue");
const voteP = () => import("./pages/Vote.vue");
const adminP = () => import("./pages/Admin.vue");
const calonKetuaUmumP = () => import("./pages/admin/CalonKetuaUmum.vue");
const calonFormaturP = () => import("./pages/admin/CalonFormatur.vue");
const tokenPemilihanP = () => import("./pages/admin/TokenPemilihan.vue");
const perhitunganLangsungP = () =>
  import("./pages/admin/PerhitunganLangsung.vue");
const pengaturanAkunP = () => import("./pages/admin/PengaturanAkun.vue");

const routes = [
  {
    name: "landing",
    path: "/",
    component: landingP,
  },
  {
    name: "vote",
    path: "/vote",
    component: voteP,
  },
  {
    name: "admin",
    path: "/admin",
    component: adminP,
    children: [
      {
        name: "adminDataCalonKetuaUmum",
        path: "calon-ketua-umum",
        component: calonKetuaUmumP,
      },
      {
        name: "adminDataCalonFormatur",
        path: "calon-formatur",
        component: calonFormaturP,
      },
      {
        name: "adminTokenPemilihan",
        path: "token-pemilihan",
        component: tokenPemilihanP,
      },
      {
        name: "adminPerhitunganLangsung",
        path: "perhitungan-langsung",
        component: perhitunganLangsungP,
      },
      {
        name: "adminPengaturanAkun",
        path: "pengaturan-akun",
        component: pengaturanAkunP,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

// router.beforeEach((to, from, next) => {
//   console.log(to.fullPath);
//   next();
// });
