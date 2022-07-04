<template>
  <div>
    <h1>Token Pemilihan</h1>
    <button
      class="btn btn-primary btn-sm mb-2 me-2"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#buatTokenPemilihanModal"
    >
      Buat Token
    </button>
    <button
      class="btn btn-danger btn-sm mb-2"
      type="button"
      @click.prevent="hapusToken()"
    >
      Hapus Token
    </button>
    <div class="table-box">
      <table class="in-admin">
        <thead>
          <tr>
            <th>No</th>
            <th>Token</th>
            <th>Pemilik</th>
          </tr>
        </thead>
        <tbody v-if="tokenList[0]">
          <tr
            v-show="tokenList[0].length >= 0"
            v-for="(x, i) in tokenList[0]"
            :key="x"
          >
            <td>{{ i + 1 }}</td>
            <td>{{ x.slice(2, 4) + x.slice(6) }}</td>
            <td>{{ getKomisariatFromToken(x) }}</td>
          </tr>
          <tr v-show="tokenList[0].length <= 0">
            <td colspan="3">Data tidak ditemukan</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Tambah Calon Ketua Umum Modal -->
  <buatTokenPemilihanC />
</template>

<script setup>
import buatTokenPemilihanC from "/src/components/BuatTokenPemilihan.vue";
import { db } from "../../firebase";
import { onSnapshot, query, collection, setDoc, doc } from "firebase/firestore";
import { onMounted, reactive, toRef } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tokenList = reactive(store.state.tokenList);

const komisariatList = reactive({});
onSnapshot(query(collection(db, "komisariat")), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    komisariatList[Object.keys(doc.data())] = Object.values(doc.data())[0];
  });
});

const getKomisariatFromToken = (token) => {
  const init = token.slice(4, 6);
  if (komisariatList[init] == null) {
    return "pimpinan cabang";
  } else {
    return "PK. " + komisariatList[init];
  }
};

// Hapus token
const hapusToken = () => {
  const token = { token: Array() };
  setDoc(doc(db, "token", "token"), token)
    .then(() => {
      alert("Token berhasil dihapus");
    })
    .catch((err) => {
      alert("Token gagal dihapus");
    });
  const lastUsedToken = { lastUsedToken: Array() };
  setDoc(doc(db, "token", "used"), lastUsedToken)
    .then(() => {
      true;
    })
    .catch((err) => {
      true;
    });
};
</script>
<style lang="scss" scoped></style>
