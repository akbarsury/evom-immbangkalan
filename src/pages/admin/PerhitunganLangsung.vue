<template>
  <div>
    <h1>Perhitungan Langsung</h1>
    <div class="border rounded shadow-sm text-center p-3 mb-3">
      <div>
        <button
          @click.prevent="gantiStatusPemilihan()"
          class="btn btn-danger m-2"
        >
          {{
            pengaturanPemilihan.isAktif
              ? "Sudahi Pemilihan"
              : "Lanjutkan Pemilihan"
          }}
        </button>
        <button
          @click.prevent="gantiJumlahFormatur()"
          class="btn btn-primary m-2"
        >
          Ganti jumlah formatur : {{ pengaturanPemilihan.jumlahFormatur }}
        </button>
      </div>
    </div>
    <div
      v-if="pengaturanPemilihan.isAktif"
      class="pemilihan-berlangsung border rounded shadow-sm text-center mb-3"
    >
      <p class="counter">
        <span class="suara-digunakan">{{ jumlahTokenDigunakan.data }}</span> /
        <span class="suara-keseluruhan">{{ jumlahToken.data }}</span>
      </p>
      <p>Suara digunakan</p>
    </div>
    <grafik v-else />
  </div>
</template>

<script setup>
import grafik from "../../components/grafik.vue";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { reactive, ref } from "vue";

const jumlahToken = reactive({});
onSnapshot(doc(db, "token", "token"), (tokenSnapshot) => {
  jumlahToken.data = tokenSnapshot.data().token.length;
});
const jumlahTokenDigunakan = reactive({});
onSnapshot(doc(db, "token", "used"), (tokenUsedSnapshot) => {
  jumlahTokenDigunakan.data = tokenUsedSnapshot.data().lastUsedToken.length;
});

const pengaturanPemilihan = reactive({});
onSnapshot(doc(db, "pengaturan", "pemilihan"), (pengaturanSnapshot) => {
  pengaturanPemilihan.isAktif = pengaturanSnapshot.data().isAktif;
  pengaturanPemilihan.jumlahFormatur = pengaturanSnapshot.data().jumlahFormatur;
});

const gantiJumlahFormatur = async () => {
  const pengaturanPemilihanDoc = doc(db, "pengaturan", "pemilihan");
  const jumlahFormatur = prompt("Jumlah formatur yang harus dipilih:");
  await updateDoc(pengaturanPemilihanDoc, {
    jumlahFormatur: jumlahFormatur,
  }).then(() => {
    alert("Jumlah formatur diubah");
  });
};

const gantiStatusPemilihan = async () => {
  const pengaturanPemilihanDoc = doc(db, "pengaturan", "pemilihan");
  await updateDoc(pengaturanPemilihanDoc, {
    isAktif: !pengaturanPemilihan.isAktif,
  });
};
</script>
<style lang="scss" scoped>
.pemilihan-berlangsung {
  padding: 3em;
  p {
    margin: 0;
    &.counter {
      font-size: 7rem;
      font-weight: 900;
      line-height: 7rem;
    }
  }
}
</style>
