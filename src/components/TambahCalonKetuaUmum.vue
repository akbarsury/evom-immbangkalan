<template>
  <div class="divider mb-3"></div>
  <div class="">
    <form @submit.prevent="tambahkanCalonKetuaUmum">
      <h5>Tambah Calon Ketua Umum</h5>
      <div class="mb-3">
        <label for="namaCalonKetuaUmum" class="form-label d-none">
          Nama Lengkap
        </label>
        <input
          type="text"
          class="form-control"
          id="namaCalonKetuaUmum"
          placeholder="Nama Lengkap"
          required
          v-model="dataCalonKetuaUmum.nama"
        />
      </div>
      <div class="mb-3">
        <label for="komisariatCalonKetuaUmum" class="form-label d-none">
          Asal komisariat
        </label>
        <input
          type="text"
          class="form-control"
          id="komisariatCalonKetuaUmum"
          placeholder="Asal Komisariat"
          v-model="dataCalonKetuaUmum.asalKom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ttlCalonKetuaUmum" class="form-label d-none">
          Tempat, Tanggal Lahir
        </label>
        <input
          type="text"
          class="form-control"
          id="ttlCalonKetuaUmum"
          placeholder="Tempat, Tanggal Lahir"
          required
          v-model="dataCalonKetuaUmum.ttl"
        />
      </div>
      <div class="mb-3">
        <label for="domisiliCalonKetuaUmum" class="form-label d-none">
          Alamat Domisili
        </label>
        <input
          type="text"
          class="form-control"
          id="domisiliCalonKetuaUmum"
          placeholder="Alamat Domisili"
          required
          v-model="dataCalonKetuaUmum.alamatDomisili"
        />
      </div>
      <div class="mb-3">
        <label for="fotoCalonKetuaUmum" class="form-label d-none">
          foto calon ketua umum
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          placeholder="Upload foto calon ketua umum"
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

// Add a new document with a generated id.

const dataCalonKetuaUmum = {};
const tambahkanCalonKetuaUmum = () => {
  const storage = getStorage();
  const caketumPhotoRef = fref(
    storage,
    "calon ketua umum/" + dataCalonKetuaUmum.nama + ".png"
  );
  // 'file' comes from the Blob or File API
  uploadBytes(caketumPhotoRef, filePreview[1], {
    contentType: "image/png",
  }).then((snapshot) => {
    // ambil foto calon ketua umum dari storage
    const photoUrl = async () => {
      const url = await getDownloadURL(
        fref(storage, "calon ketua umum/" + dataCalonKetuaUmum.nama + ".png")
      );
      return url;
    };
    photoUrl().then((x) => {
      dataCalonKetuaUmum.fotoUrl = x;
      dataCalonKetuaUmum.suara = [];
      addDoc(collection(db, "calon ketua umum"), dataCalonKetuaUmum)
        .then(() => {
          alert(dataCalonKetuaUmum.nama + " berhasil ditambahkan");
        })
        .catch((err) => {
          alert(dataCalonKetuaUmum.nama + " gagal ditambahkan");
        });
    });
  });
};

// upload foto calon ketua umum
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
