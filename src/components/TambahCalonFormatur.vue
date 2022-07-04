<template>
  <div class="divider mb-3"></div>
  <div class="">
    <form @submit.prevent="tambahkanCalonFormatur">
      <h5>Tambah Calon Formatur</h5>
      <div class="mb-3">
        <label for="namaCalonFormatur" class="form-label d-none">
          nama lengkap
        </label>
        <input
          type="text"
          class="form-control"
          id="namaCalonFormatur"
          placeholder="Nama Lengkap"
          required
          v-model="dataCalonFormatur.nama"
        />
      </div>
      <div class="mb-3">
        <label for="komisariatCalonFormatur" class="form-label d-none">
          asal komisariat
        </label>
        <input
          type="text"
          class="form-control"
          id="komisariatCalonFormatur"
          placeholder="Asal Komisariat"
          v-model="dataCalonFormatur.asalKom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ttlCalonFormatur" class="form-label d-none">
          tempat, tanggal lahir
        </label>
        <input
          type="text"
          class="form-control"
          id="ttlCalonFormatur"
          placeholder="Tempat, Tanggal Lahir"
          required
          v-model="dataCalonFormatur.ttl"
        />
      </div>
      <div class="mb-3">
        <label for="domisiliCalonFormatur" class="form-label d-none">
          alamat domisili
        </label>
        <input
          type="text"
          class="form-control"
          id="domisiliCalonFormatur"
          placeholder="Alamat Domisili"
          required
          v-model="dataCalonFormatur.alamatDomisili"
        />
      </div>
      <div class="mb-3">
        <label for="fotoCalonFormatur" class="form-label d-none">
          foto calon formatur
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          placeholder="Upload foto calon formatur"
          required
          accept="image/x-png,image/jpeg, img/jpg"
          ref="fileInput"
          @change="selectImgFile"
        />
        <div class="d-flex justify-content-center">
          <div
            class="img-preview mt-3 shadow rounded"
            :style="`background-image: url('` + filePreview[0] + `')`"
          >
            <!-- <img v-if="filePreview" :src="filePreview[0]" /> -->
          </div>
        </div>
      </div>
      <div class="mb-3 text-center">
        <button type="submit" class="btn btn-primary">Tambah</button>
      </div>
    </form>
  </div>
  <div class="divider mb-3"></div>
</template>

<script setup>
import { db } from "../firebase";
import { addDoc, collection, deleteDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref as fref,
  uploadBytes,
} from "firebase/storage";
import { ref, reactive } from "@vue/runtime-core";

const dataCalonFormatur = {};
const tambahkanCalonFormatur = () => {
  const storage = getStorage();
  const caketumPhotoRef = fref(
    storage,
    "calon formatur/" + dataCalonFormatur.nama + ".png"
  );
  // 'file' comes from the Blob or File API
  uploadBytes(caketumPhotoRef, filePreview[1], {
    contentType: "image/png",
  }).then((snapshot) => {
    // ambil foto calon Formatur dari storage
    const photoUrl = async () => {
      const url = await getDownloadURL(
        fref(storage, "calon formatur/" + dataCalonFormatur.nama + ".png")
      );
      return url;
    };
    photoUrl().then((x) => {
      dataCalonFormatur.fotoUrl = x;
      dataCalonFormatur.suara = [];
      addDoc(collection(db, "calon formatur"), dataCalonFormatur)
        .then(() => {
          alert(dataCalonFormatur.nama + " berhasil ditambahkan");
        })
        .catch((err) => {
          alert(dataCalonFormatur.nama + " gagal ditambahkan");
        });
    });
  });
};

// upload foto calon Formatur
const filePreview = reactive([
  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
]);
const fileInput = ref(null);

const selectImgFile = (e) => {
  let file = e.target.files[0] || e.dataTransfer.files[0];
  let reader = new FileReader();
  if (file) {
    // let vm = this;
    reader.onload = (e) => {
      filePreview[0] = e.target.result;
      filePreview[1] = file;
    };
  }
  reader.readAsDataURL(file);
};
</script>

<style lang="scss" scoped>
.img-preview {
  text-align: center;
  width: 12rem;
  height: 12rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
