<template>
  <!-- <Suspense>
    <template #default> -->
  <div v-if="admin.isAdmin" class="admin-layout">
    <div class="sidebar">
      <AdminSidebar />
    </div>
    <div class="content p-5">
      <router-view />
    </div>
  </div>
  <!-- </template>
    <template #fallback> -->
  <div v-else>
    <div class="d-flex justify-content-center pt-5">
      <div class="col-11 col-md-4 text-center">
        <h1>LOGIN APLIKASI EVOM</h1>
        <form @submit.prevent="tryToLogin()">
          <div class="mb-3">
            <label for="username" class="form-label d-none"> Username </label>
            <input
              type="username"
              class="form-control"
              id="username"
              required
              placeholder="username"
              v-model="loginAkses.username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label d-none">
              Jumlah Peserta Penuh Pimpinan Cabang
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              required
              v-model="loginAkses.password"
            />
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- </template> -->
  <!-- </Suspense> -->
</template>

<script setup>
import AdminSidebar from "../components/AdminSidebar.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

const store = useStore();
const router = useRouter();
const auth = getAuth();
const admin = reactive(store.state.admin);

const loginAkses = reactive({
  username: "pcimmbangkalan",
  password: null,
});

const tryToLogin = () => {
  const x = reactive({});
  // rubah username menjadi email
  if (loginAkses.username == "pcimmbangkalan") {
    x.email = "pcimmbangkalan@gmail.com";
    x.password = loginAkses.password;
  } else {
    x.email = null;
  }

  // login with firebaseauth email and password

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, x.email, x.password)
        .then(() => {
          store.commit("tryToLogin", [true, auth.currentUser]);
          router.push({ name: "adminDataCalonKetuaUmum" });
        })
        .catch((err) => {
          alert("Proses login gagal " + err.code);
        });
    })
    .catch((err) => {
      alert("Proses login gagal dengan session gagal " + err.code);
    });
};

auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit("tryToLogin", [true, auth.currentUser]);
    router.push({ name: "adminDataCalonKetuaUmum" });
  }
});

if (admin.isAdmin) {
  router.push({ name: "adminDataCalonKetuaUmum" });
} else {
  router.push({ name: "admin" });
}
</script>
<style lang="scss">
.admin-layout {
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: 200px auto;
  .sidebar {
    grid-area: sidebar;
    ///
    position: fixed;
    top: 0px;
  }
  .content {
    grid-area: content;
    min-height: 100vh;
  }
}

table.in-admin {
  display: inline-block;
  border: 1px solid #909090;
  border-radius: 0.2rem;
  td,
  th {
    border: 1px solid #909090;
    color: #303030;
    padding: 0.5em;
    text-transform: capitalize;
    button {
      margin: 0.5em;
    }
  }
  th {
    background-color: #dddddd;
  }
  td:first-child {
    text-align: center;
  }
}
</style>
