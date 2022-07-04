<template>
  <div class="container">
    <div
      class="d-flex justify-content-center pemilihan-berlangsung border rounded shadow-sm text-center mb-3"
    >
      <div class="col-4">
        <canvas id="ketumGrafik" width="100%" height="100%"></canvas>
      </div>
    </div>
    <div
      class="d-flex justify-content-center pemilihan-berlangsung border rounded shadow-sm text-center mb-3"
    >
      <div class="col-12">
        <canvas id="formaturGrafik" width="100%" height="50%"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import Chart from "chart.js/auto";
import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "../firebase";

onMounted(() => {
  onSnapshot(
    query(collection(db, "calon ketua umum")),
    async (caketumSnapshot) => {
      const label = [];
      const data = [];
      await caketumSnapshot.forEach((doc) => {
        label.push(doc.data().nama);
        data.push(doc.data().suara.length);
      });
      const ctx = document.getElementById("ketumGrafik");

      const ketumChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: label,
          datasets: [
            {
              label: "Hasil pemilihan ketum",
              data: data,
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
        },
      });
    }
  );

  onSnapshot(
    query(collection(db, "calon formatur")),
    async (caketumSnapshot) => {
      const data = [];
      // const label = [];
      // const data = [];
      await caketumSnapshot.forEach((doc) => {
        // label.push(doc.data().nama);
        // data.push(doc.data().suara.length);
        // label.push(doc.data().nama);
        data.push([doc.data().suara.length, doc.data().nama]);
      });
      data.sort().reverse();
      const toGrafikLabel = [];
      const toGrafikData = [];
      data.forEach((value) => {
        toGrafikData.push(value[0]);
        toGrafikLabel.push(value[1]);
      });
      const ctx = document.getElementById("formaturGrafik");

      const ketumChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: toGrafikLabel,
          datasets: [
            {
              label: "Hasil pemilihan formatur",
              data: toGrafikData,
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
        },
      });
    }
  );
});
</script>
