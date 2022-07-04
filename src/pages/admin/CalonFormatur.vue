<template>
  <div>
    <h1>Calon Formatur</h1>
    <!-- Tambah Calon formatur Modal -->
    <tambahCalonFormaturC />
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
        <tbody v-if="calonFormaturList[0]">
          <tr
            v-show="calonFormaturList[0].length >= 0"
            v-for="(x, i) in calonFormaturList[0]"
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
                @click.prevent="hapusFormatur([x.key, x.data.nama])"
              >
                hapus
              </button>
            </td>
          </tr>
          <tr v-show="calonFormaturList[0].length <= 0">
            <td colspan="6">Data tidak ditemukan</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import tambahCalonFormaturC from "/src/components/TambahCalonFormatur.vue";
import { useStore } from "vuex";

const store = useStore();

// list data calon formatur
const calonFormaturList = store.state.formaturList;

// Hapus data calon formatur
const hapusFormatur = (id) => {
  store.commit("hapusFormatur", id);
};
</script>
<style lang="scss" scoped></style>
