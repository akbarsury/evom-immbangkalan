<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="vote col-11 col-md-8 p-0 shadow">
        <div class="header">
          <div class="row align-items-center">
            <div class="col-2">
              <img src="/img/imm-bangkalan.png" alt="IMM Bangkalan" />
            </div>
            <div class="col-8 mt-4">
              <h1>MUSYCAB XIII PC IMM BANGKALAN</h1>
              <p>Pemilihan Ketua Umum dan Formatur</p>
            </div>
            <div class="col-2">
              <img src="/img/musycab-XIII.png" alt="Musycab XII" />
            </div>
          </div>
        </div>
        <div class="content p-5">
          <img
            class="mb-3"
            src="/img/basmalah.png"
            style="width: 40%"
            alt="bismillahirrahmanirrahim"
          />
          <blockquote class="fw-bold">
            "Sesuatu yang dilakukan dari dan oleh hati, akan sampai juga ke
            hati." (Bagus Rifani)
          </blockquote>
          <div class="divider my-3"></div>
          <h3 class="fw-bold">Calon Ketua Umum</h3>
          <div class="row justify-content-center">
            <div
              class="col-11 col-md-8 col-lg-6 mb-3"
              v-for="x in calonKetuaUmumList[0]"
              :key="x"
            >
              <div
                class="kandidat-img mb-2"
                :style="`background-image: url('` + x.data.fotoUrl + `')`"
              >
                <img
                  class=""
                  style="width: 100%"
                  src="/public/img/kandidat-layout.png"
                  alt=""
                />
                <div class="data shadow">
                  <span class="nama"> {{ x.data.nama }} </span>
                </div>
              </div>
              <button
                :class="[
                  dipilihList.ketum.includes(x.key) ? 'selected' : '',
                  'btn btn-secondary btn-pilih-ketum',
                ]"
                @click.prevent="pilihKetuaUmum(x.key)"
              >
                pilih
              </button>
            </div>
            <div class="text-center mt-3" id="selected-ketum-count">
              <span>{{ dipilihList.ketum.length }}</span
              >/1 Dipilih
            </div>
          </div>
          <div class="divider my-3"></div>
          <h3 class="fw-bold">Calon Formatur</h3>
          <div class="vote-formatur row">
            <div
              v-for="(x, i) in calonFormaturList[0]"
              :key="x"
              class="col-12 col-md-6"
            >
              <div
                :class="[
                  dipilihList.formatur.includes(x.key) ? 'selected' : '',
                  'btn-select-formatur',
                ]"
                @click.prevent="pilihFormatur(x.key)"
              >
                <span class="">{{ i + 1 }}</span>
                <span>{{ x.data.nama }}</span>
              </div>
            </div>
            <div class="text-center mt-3" id="selected-formatur-count">
              <span>{{ dipilihList.formatur.length }}</span
              >/{{ pengaturanPemilihan.jumlahFormatur }} Dipilih
            </div>
          </div>
          <div class="divider my-3"></div>
          <button class="btn btn-primary" @click.prevent="kirimPilihan">
            kirim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, onBeforeUpdate, onMounted, ref } from "vue";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// init
const store = useStore();
const router = useRouter();

// variable
// list data calon ketua umum
const calonKetuaUmumList = store.state.caketumList;
// list data calon formatur
const calonFormaturList = store.state.formaturList;
// token
const token = ref();
// pengaturanPemilihan
const pengaturanPemilihan = reactive({});

onBeforeMount(() => {
  onSnapshot(doc(db, "pengaturan", "pemilihan"), (pengaturanSnapshot) => {
    pengaturanPemilihan.isAktif = pengaturanSnapshot.data().isAktif;
    pengaturanPemilihan.jumlahFormatur =
      pengaturanSnapshot.data().jumlahFormatur;
  });
});
onSnapshot(doc(db, "pengaturan", "pemilihan"), (pengaturanSnapshot) => {
  pengaturanPemilihan.isAktif = pengaturanSnapshot.data().isAktif;
  pengaturanPemilihan.jumlahFormatur = pengaturanSnapshot.data().jumlahFormatur;
  if (
    !pengaturanPemilihan.isAktif ||
    pengaturanPemilihan.jumlahFormatur < dipilihList.formatur.length
  ) {
    alert("Tidak dalam masa pemilihan.(Panlih)");
    router.push({ name: "landing" });
  }
});

// list dipilih
const dipilihList = reactive({ ketum: [], formatur: [], pemilih: null });
const kirimPilihan = (data) => {
  data.dipilih = dipilihList;
  data.pemilih = token.data;
  if (
    data.dipilih.ketum.length < 1 ||
    data.dipilih.formatur.length < pengaturanPemilihan.jumlahFormatur
  ) {
    alert(
      `harus memilih 1 ketua umum dan ${pengaturanPemilihan.jumlahFormatur} formatur`
    );
  } else {
    // alert("berhasil");
    if (data.pemilih == "TESTING") {
      alert("Testing berhasil");
      window.location.reload();
    } else {
      store.commit("kirimPilihan", data);
    }
  }
};

// tambah ketua umum ke array
const pilihKetuaUmum = (x) => {
  if (dipilihList.ketum.length == 1 && dipilihList.ketum.includes(x)) {
    dipilihList["ketum"].pop();
  } else if (dipilihList.ketum.length == 1 && !dipilihList.ketum.includes(x)) {
    true;
  } else {
    dipilihList["ketum"].push(x);
  }
};

// tambah formatur ke array
const pilihFormatur = (x) => {
  if (
    dipilihList.formatur.length < pengaturanPemilihan.jumlahFormatur &&
    dipilihList.formatur.includes(x)
  ) {
    const toRemove = dipilihList.formatur.indexOf(x);
    if (toRemove != -1) {
      dipilihList.formatur.splice(toRemove, 1);
    }
  } else if (
    dipilihList.formatur.length < pengaturanPemilihan.jumlahFormatur &&
    !dipilihList.formatur.includes(x)
  ) {
    dipilihList["formatur"].push(x);
  } else if (
    dipilihList.formatur.length == pengaturanPemilihan.jumlahFormatur &&
    dipilihList.formatur.includes(x)
  ) {
    const toRemove = dipilihList.formatur.indexOf(x);
    if (toRemove != -1) {
      dipilihList.formatur.splice(toRemove, 1);
    }
  } else {
    true;
  }
};

token.data = useRoute().params.token;
// url handling
onBeforeMount(() => {
  if (!token.data) {
    router.push({ name: "landing" });
  }

  store.commit("getCaketumList");
  store.commit("getFormaturList");
});
</script>

<style lang="scss" scoped>
.vote {
  border-radius: 10px;
  .header {
    background-color: rgba(255, 255, 255, 0.8);
    position: relative;
    text-align: center;
    padding: 1em 1.5em;
    &::before {
      border-radius: 10px 10px 0 0;
      content: "";
      background-image: url("/img/theme-background.png");
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
    img {
      height: 75px;
      text-shadow: 1px 1px 5px #000;
    }
    h1 {
      font-size: 26px;
      font-weight: 800;
    }
    p {
      font-weight: 700;
      font-size: 18px;
    }
  }
  .content {
    text-align: center;

    .vote-formatur {
      text-align: left;
      .btn-select-formatur {
        text-align: left;
        background-color: #fff;
        ///
        margin: 0.5rem;
        padding: 0 !important;
        border: 1px solid #909090;
        border-radius: 0.3rem;
        ///
        width: 100%;
        display: flex;
        ///
        cursor: pointer;
        span {
          font-weight: bolder;
          color: #909090;
          ///
          padding: 0 0.5rem;
          ///
          width: 100%;
          display: inline-flex !important;
          align-items: center;
          // bottom: 0;
          &:first-child {
            text-align: center;
            background-color: #909090;
            font-size: 150%;
            font-weight: bold;
            color: #fff;
            ///
            width: auto;
          }
        }
        &:hover,
        &.selected {
          border: 1px solid #188251;
          outline: 5px solid #1882517e;
          span {
            color: #188251;
            &:first-child {
              background-color: #188251;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

button.btn-pilih-ketum {
  &:hover,
  &.selected {
    border: 1px solid #188251;
    outline: 5px solid #1882517e;
    background-color: #188251;
  }
}
</style>
