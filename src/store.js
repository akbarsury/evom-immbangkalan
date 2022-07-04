import { createStore } from "vuex";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  query,
} from "firebase/firestore";
import { getStorage, ref as fref, deleteObject } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
import { db } from "./firebase";

export default createStore({
  state() {
    return {
      caketumList: {},
      formaturList: {},
      tokenList: {},
      komisariatList: {},
      admin: {},
    };
  },
  mutations: {
    //   caketum
    getCaketumList(state) {
      onSnapshot(
        query(collection(db, "calon ketua umum")),
        (caketumSnapshot) => {
          const x = [];
          caketumSnapshot.forEach((doc) => {
            x.push({
              key: doc.id,
              data: doc.data(),
            });
          });
          state.caketumList[0] = x;
        }
      );
    },

    hapusCaketum(state, [id, nama]) {
      const storage = getStorage();
      const fotoUrl = fref(storage, "calon ketua umum/" + nama + ".png");
      deleteObject(fotoUrl)
        .then(() => {
          deleteDoc(doc(db, "calon ketua umum", id));
          alert(`Data ${nama} berhasil dihapus`);
        })
        .catch(() => {
          alert(`Data ${nama} gagal dihapus`);
        });
    },

    //   formatur
    getFormaturList(state) {
      onSnapshot(query(collection(db, "calon formatur")), (caketumSnapshot) => {
        const x = [];
        caketumSnapshot.forEach((doc) => {
          x.push({
            key: doc.id,
            data: doc.data(),
          });
        });
        state.formaturList[0] = x;
      });
    },

    hapusFormatur(state, [id, nama]) {
      const storage = getStorage();
      const fotoUrl = fref(storage, "calon formatur/" + nama + ".png");
      deleteObject(fotoUrl)
        .then(() => {
          deleteDoc(doc(db, "calon formatur", id));
          alert(`Data ${nama} berhasil dihapus`);
        })
        .catch(() => {
          alert(`Data ${nama} gagal dihapus`);
        });
    },

    //   token
    getTokenList(state) {
      onSnapshot(doc(db, "token", "token"), (querySnapshot) => {
        state.tokenList[0] = querySnapshot.data().token;
      });
    },

    createToken(state, [jumlahPimpinanCabang, jumlahPimpinanKomisariat]) {
      if (state.tokenList[0].length <= 0) {
        // token pimpinan cabang
        const tokenArray = [];
        for (let i = 0; i < jumlahPimpinanCabang; i++) {
          tokenArray.push("19" + (11 + i) + "ZZ" + random());
        }
        // token pimpinan komisariat
        const kodeKomisariat = ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH"];
        for (let i = 0; i < kodeKomisariat.length; i++) {
          for (let j = 0; j < jumlahPimpinanKomisariat; j++) {
            tokenArray.push("19" + (11 + j) + kodeKomisariat[i] + random());
          }
        }
        const token = {};
        token.token = tokenArray;
        setDoc(doc(db, "token", "token"), token)
          .then(() => {
            alert("Token berhasil dibuat");
          })
          .catch((err) => {
            alert("Token gagal dibuat");
          });
      } else {
        alert("token sudah dibuat sebelumnya");
      }
    },

    //  komisariat
    getKomisariatList(state) {
      onSnapshot(query(collection(db, "komisariat")), (caketumSnapshot) => {
        const x = [];
        caketumSnapshot.forEach((doc) => {
          x.push({
            key: doc.id,
            data: doc.data(),
          });
        });
        state.komisariatList[0] = x;
      });
    },

    // voting
    async kirimPilihan(state, dipilihList) {
      // kirim ketua umum
      const docTarget = doc(
        db,
        "calon ketua umum",
        dipilihList.dipilih.ketum[0]
      );
      const docSnap = await getDoc(docTarget);
      if (docSnap.exists()) {
        const lastSuara = docSnap.data().suara;
        lastSuara.push(dipilihList.pemilih);
        await updateDoc(docTarget, {
          suara: lastSuara,
        }).then(() => {
          true;
        });
      }

      // kirim formatur
      dipilihList.dipilih.formatur.forEach(async (x) => {
        const docTarget = doc(db, "calon formatur", x);
        const docSnap = await getDoc(docTarget);
        if (docSnap.exists()) {
          const lastSuara = docSnap.data().suara;
          lastSuara.push(dipilihList.pemilih);
          await updateDoc(docTarget, {
            suara: lastSuara,
          }).then(() => {
            true;
          });
        }
      });

      // token digunakan
      const docTokenTarget = doc(db, "token", "used");
      const docTokenSnap = await getDoc(docTokenTarget);
      if (docTokenSnap.exists()) {
        const lastTokenUsed = docTokenSnap.data().lastUsedToken;
        lastTokenUsed.push(dipilihList.pemilih);
        await updateDoc(docTokenTarget, {
          lastUsedToken: lastTokenUsed,
        }).then(() => {
          alert(
            "Terimakasih telah berpartisipasi dalam pemilihan.(Panitia Pemilihan)"
          );
          window.location.reload();
        });
      }
    },

    // user handling
    // login
    tryToLogin(state, [isAdmin, data]) {
      state.admin.data = data;
      state.admin.isAdmin = isAdmin;
    },

    // logout
    tryToLogout(state) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          state.admin.isAdmin = null;
          state.admin.data = auth.currentUser;
          alert("Berhasil logout user");
        })
        .catch(() => {
          alert("Gagal logout user");
        });
    },
  },
});

// helper function
// create random string from
function random(length = 6) {
  // Declare all characters
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let str = "";
  // Pick characers randomly
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
