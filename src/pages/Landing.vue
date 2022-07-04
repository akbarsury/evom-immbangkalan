<template>
  <div class="container-fluid p-0">
    <section class="banner">
      <div class="background">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="heading-musycab">
                <h1>MUSYCAB XIII</h1>
                <h1>PC IMM BANGKALAN</h1>
                <h3 class="fw-normal">"Amerta Adiwidia, Eka Karsa Nirmala"</h3>
              </div>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-end">
              <div class="form-token-voting text-center">
                <form @submit.prevent="voteAccess()">
                  <select
                    v-model="kodePK"
                    :class="[
                      kodePK == '' ? 'text-secondary' : '',
                      'w-100 text-uppercase',
                    ]"
                    id="komisariat"
                    name="komisariat"
                    required
                  >
                    <option value="" hidden>Delegasi</option>
                    <option value="ZZ" class="text-uppercase text-dark">
                      PC. IMM Bangkalan
                    </option>
                    <option
                      v-for="kom in komisariatList[0]"
                      :key="kom"
                      :value="Object.keys(kom.data)"
                      class="text-uppercase text-dark"
                    >
                      {{ `PK. ${Object.values(kom.data)[0]}` }}
                    </option>
                  </select>
                  <input
                    v-model="initToken"
                    class="w-100"
                    type="text"
                    placeholder="TOKEN"
                    required
                  />
                  <button type="submit" class="btn btn-success">voting</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center m-0">
          <div class="col-11 col-md-7 text-center foto-pengurus">
            <img
              class="img-fluid"
              src="/public/img/pengurus.png"
              alt="pengurus"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="calon-ketua-umum mt-5">
      <div class="container">
        <h2>calon ketua umum</h2>
        <div class="container m-4">
          <div class="row justify-content-center">
            <div
              class="col-8 col-md-6 col-lg-4"
              v-for="x in calonKetuaUmumList[0]"
              :key="x"
            >
              <div
                class="kandidat-img"
                :style="`background-image: url(` + x.data.fotoUrl + `)`"
              >
                <img
                  class=""
                  style="width: 100%"
                  src="/public/img/kandidat-layout.png"
                  alt=""
                />
                <span class="nama shadow"> {{ x.data.nama }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="calon-formatur mt-5">
      <div class="container">
        <h2>calon formatur</h2>
        <div class="container m-4">
          <div class="row justify-content-center">
            <div
              class="col-6 col-md-4 col-lg-3"
              v-for="x in calonFormaturList[0]"
              :key="x"
            >
              <div
                class="kandidat-img"
                :style="`background-image: url('` + x.data.fotoUrl + `')`"
              >
                <img
                  class=""
                  style="width: 100%"
                  src="/public/img/kandidat-layout.png"
                  alt=""
                />
                <span class="nama">
                  {{ x.data.nama }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "../router";

//  init
const store = useStore();

//  variable
//  list data calon ketua umum
const calonKetuaUmumList = store.state.caketumList;
//  list data calon formatur
const calonFormaturList = store.state.formaturList;
//  list data komisariat
const komisariatList = store.state.komisariatList;

// voteAccess
const kodePK = ref("");
const initToken = ref("");
const voteAccess = async () => {
  const token = ref(
    "19" + initToken.value.slice(0, 2) + kodePK.value + initToken.value.slice(2)
  );
  const validToken = store.state.tokenList[0].includes(
    token.value.toUpperCase()
  );
  if (validToken) {
    const docTokenTarget = doc(db, "token", "used");
    const docTokenSnap = await getDoc(docTokenTarget);
    if (docTokenSnap.exists()) {
      const lastTokenUsed = docTokenSnap.data().lastUsedToken;
      if (lastTokenUsed.includes(token.value.toUpperCase())) {
        alert("Token anda telah digunakan sebelumnya");
      } else {
        router.push({ name: "vote", params: { token: token.value } });
      }
    }
  } else {
    if (initToken.value == "TESTING") {
      router.push({ name: "vote", params: { token: initToken.value } });
    } else {
      alert("Ups,, Token tidak ditemukan");
    }
  }
};
</script>

<style lang="scss" scoped>
section.banner {
  & div.background {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.74) 38%,
      rgba(255, 251, 251, 1) 63%
    );
    position: relative;
    min-height: 90%;
    height: auto;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-image: url("../../public/img/theme-background.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }
  }

  .heading-musycab {
    margin-top: 60px;
    h1 {
      font-weight: 900;
      font-size: 4rem;
    }
  }

  .form-token-voting {
    width: 90%;
    select,
    input {
      font-size: 18px;
      margin: 15px 0;
      padding: 0 10px;
      height: 36px;
      border: 1px solid green;
      border-radius: 5px;
      background-color: #fff;

      &:focus,
      &:se {
        border: 2px solid green;
      }
    }
  }

  .foto-pengurus {
    padding-top: 30px;
    position: relative;
    bottom: 0;
  }
}

section:not(.banner) {
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-transform: capitalize;
    font-weight: 700;
    text-align: center;
  }
}
</style>
