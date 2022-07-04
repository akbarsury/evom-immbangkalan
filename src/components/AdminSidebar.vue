<template>
  <aside>
    <h3 class="sidebar-title p-3">ADMIN DASHBOARD</h3>
    <ul>
      <li class="menu-heading">data</li>
      <li>
        <router-link :to="{ name: 'adminDataCalonKetuaUmum' }">
          Calon Ketua Umum
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'adminDataCalonFormatur' }">
          Calon Formatur
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'adminTokenPemilihan' }">
          Token Pemilihan
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'adminPerhitunganLangsung' }">
          Perhitungan Langsung
        </router-link>
      </li>
      <li class="menu-heading">pengaturan</li>
      <li>
        <router-link :to="{ name: 'adminPengaturanAkun' }"> Akun </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px #dddddd;
  ///
  position: fixed;
  width: 200px;
  height: 100vh;
  top: 50px;
  color: #303030 !important;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  ul,
  li {
    list-style: none;
    padding: 0 0.5rem;
    // margin: 0;
    text-transform: capitalize;
    font-weight: 700;
    .menu-heading {
      padding: 0.5rem;
      border-bottom: 1px solid #dddddd;
      border-top: 1px solid #dddddd;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
    a {
      text-decoration: none;
      color: #303030;
      font-weight: 300;
    }
  }
}
</style>
