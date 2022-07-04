<template>
  <div
    class="modal fade"
    id="buatTokenPemilihanModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form @submit.prevent="buatToken">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Buat Token Pemilihan
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Jumlah Peserta Penuh</h5>
            <div class="mb-3">
              <label for="tokenPC" class="form-label d-none">
                Jumlah Peserta Penuh Pimpinan Cabang
              </label>
              <input
                type="number"
                min="1"
                class="form-control"
                id="namaCalonKetuaUmum"
                placeholder="Jumlah Peserta Penuh Pimpinan Cabang"
                required
                v-model="jumlahPimpinanCabang"
              />
            </div>
            <div class="mb-3">
              <label for="komisariatCalonKetuaUmum" class="form-label d-none">
                Jumlah Peserta Penuh Pimpinan Komisariat
              </label>
              <input
                type="number"
                min="1"
                class="form-control"
                id="komisariatCalonKetuaUmum"
                placeholder="Jumlah Peserta Penuh Pimpinan Komisariat"
                required
                v-model="jumlahPimpinanKomisariat"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Buat</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { db } from "../firebase";
import { setDoc, doc, onSnapshot, query, collection } from "firebase/firestore";
import { ref } from "@vue/reactivity";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const jumlahPimpinanCabang = ref(0);
const jumlahPimpinanKomisariat = ref(0);

const token = {};
const buatToken = () => {
  store.commit("createToken", [
    jumlahPimpinanCabang.value,
    jumlahPimpinanKomisariat.value,
  ]);
};
</script>
