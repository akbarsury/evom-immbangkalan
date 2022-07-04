<template>
  <div>
    <Header />
    <div class="container-fluid body p-0 mt-5">
      <router-view />
    </div>
    <Footer :class="[isAdmin.nilai ? 'd-none' : 'd-block']" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, onMounted } from "vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const isAdmin = reactive({
  nilai: true,
});

onMounted(() => {
  store.commit("getCaketumList");
  store.commit("getFormaturList");
  store.commit("getKomisariatList");
  store.commit("getTokenList");
  // console.log(store.state);
});

router.beforeEach((to, from, next) => {
  if (to.fullPath.includes("admin")) {
    isAdmin.nilai = true;
  } else {
    isAdmin.nilai = false;
  }
  next();
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic);

// color
$main: #ee8100;

.btn {
  text-transform: uppercase !important;
  font-weight: 500;

  &.btn-main {
    background-color: $main;
    color: white;
  }
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
  font-size: 16px;
  font-family: "Nunito Sans";
  width: 100%;
  overflow-x: hidden;
}
.divider {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  border-bottom: 1px solid #dddddd;
}

.kandidat-img {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  position: relative;
  padding: 15px;
  z-index: 1;

  &::after {
    content: "";
    // background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px;
    border: 20px solid #fff;
    z-index: 0;
  }

  img {
    user-select: none !important;
    -webkit-user-select: none !important;
    position: relative;
    z-index: 1;
  }

  span.nama {
    background-color: #ee8100;
    color: #fff;
    position: absolute;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    text-transform: capitalize;
    width: 90%;
    min-height: 70px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.2rem;
    left: 50%;
    bottom: 20px;
    transform: translatex(-50%);
    border-radius: 0px 30px 0px 30px;
    z-index: 1;
  }
}
</style>
