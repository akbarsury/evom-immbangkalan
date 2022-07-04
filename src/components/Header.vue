<template>
  <header class="shadow-sm">
    <div class="container">
      <div class="row">
        <div class="col-auto brand">
          <img src="/img/evom.png" alt="" />
        </div>
        <div class="col navigation">
          <button class="btn navigation-toggle">
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul>
            <li>
              <router-link :to="{ name: 'landing' }">voting</router-link>
            </li>
            <li>
              <router-link
                class="btn btn-main btn-sm me-2"
                :to="{ name: 'admin' }"
                >admin</router-link
              >
              <button
                v-if="admin.isAdmin"
                @click.prevent="logOut()"
                class="btn btn-danger btn-sm"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// init
const store = useStore();
const router = useRouter();

// variable
const admin = reactive(store.state.admin);

//Logout
const logOut = () => {
  store.commit("tryToLogout");
  router.push({ name: "admin" });
};
</script>

<style lang="scss" scoped>
header {
  height: 48px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0px;
  align-items: center;
  z-index: 1000;
  background-color: #fff;

  a,
  i {
    color: black;
    text-transform: capitalize;
  }

  div.navigation {
    .btn {
      padding: 5px 15px;
    }
    display: flex;
    justify-content: end;

    i {
      display: none;
    }

    ul {
      margin: 0;
      padding: 0;
      background-color: #fff;

      li {
        list-style: none;
        display: inline-block;

        a {
          text-decoration: none;
          padding: 10px 15px;
        }
      }
    }
  }
}
// @media screen and (max-width: 425px) {
//   header {
//     div.navigation {
//       i {
//         display: inline-block;
//       }

//       ul {
//         z-index: -1;
//         position: absolute;
//         height: 100vh;

//         li {
//           display: block;
//         }
//       }
//     }
//   }
// }
</style>
