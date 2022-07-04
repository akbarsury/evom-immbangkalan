<template>
  <div>
    <h1>Calon Ketua Umum</h1>
    <!-- Tambah Calon Ketua Umum Modal -->
    <tambahCalonKetuaUmumC />
    <div class="table-box">
      <table class="in-admin m-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Asal Komisariat</th>
            <th>Tempat Tanggal Lahir</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody v-if="calonKetuaUmumList[0]">
          <tr
            v-show="calonKetuaUmumList[0].length != 0"
            v-for="(x, i) in calonKetuaUmumList[0]"
            :key="x"
          >
            <td>{{ i + 1 }}</td>
            <td>{{ x.data.nama }}</td>
            <td>{{ x.data.asalKom }}</td>
            <td>{{ x.data.ttl }}</td>
            <td>
              <img
                :src="x.data.fotoUrl"
                style="width: 100px; height: 100px"
                :alt="x.data.nama"
              />
            </td>
            <td>
              <button class="btn btn-primary btn-sm">edit</button>
              <button
                class="btn btn-danger btn-sm"
                @click.prevent="hapusCaketum([x.key, x.data.nama])"
              >
                hapus
              </button>
            </td>
          </tr>
          <tr v-show="calonKetuaUmumList[0].length == 0">
            <td colspan="6">Data tidak ditemukan</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import tambahCalonKetuaUmumC from "/src/components/TambahCalonKetuaUmum.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// init
const store = useStore();
const router = useRouter();

// list data calon ketua umum
const calonKetuaUmumList = store.state.caketumList;

// Hapus data calon ketua umum
const hapusCaketum = (id) => {
  store.commit("hapusCaketum", id);
  alert(
    "Terimakasih telah berpartisipasi dalam pemilihan. Salam hormat. (Panitia Pemilihan)"
  );
  router.push({ name: "landing" });
};
</script>
<style lang="scss" scoped></style>
