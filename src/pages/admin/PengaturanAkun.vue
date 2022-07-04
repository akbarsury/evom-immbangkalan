<template>
  <div>
    <h1>Pengaturan Akun</h1>
    <div class="col-12 col-md-6">
      <form @submit.prevent="updatePasswordAkun()">
        <div class="mb-3">
          <label for="username" class="form-label d-none"> Username </label>
          <input
            type="username"
            class="form-control"
            id="username"
            required
            v-model="akun.username"
            disabled
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
            placeholder="******"
            required
            v-model="akun.password"
          />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Simpan Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { getAuth, updatePassword } from "firebase/auth";

//  init
const auth = getAuth();

const akun = reactive({
  username: "pcimmbangkalan@gmail.com",
  password: "",
});

const updatePasswordAkun = () => {
  updatePassword(auth.currentUser, akun.password)
    .then(() => {
      alert("Password berhasil diubah");
    })
    .catch((err) => {
      alert(`Password gagal diubah. ${err}`);
    });
};
</script>
<style lang="scss" scoped></style>
