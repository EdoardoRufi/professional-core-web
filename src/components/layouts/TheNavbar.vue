<template>

    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <!-- Home Icon (always left) -->
    <router-link to="/projects" class="navbar-brand">home icon</router-link>

    <!-- Center Navbar Content: Visible only on screens larger than md -->
    <div class="d-none d-lg-flex justify-content-center flex-grow-1">
      <span v-for="type in types" :key="type" @click="filterList(type)" style="color: white;" class="mx-5">
        {{ type }}
      </span>
    </div>

    <!-- Always visible Burger Button (aligned to the right) -->
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>

  <!-- Offcanvas Menu -->
  <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-white" id="offcanvasRightLabel">Menu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- Filter Section in Offcanvas -->
      <h6 class="text-white">Filter:</h6>
      <ul class="list-unstyled">
        <li v-for="type in types" :key="type" @click="filterList(type)" class="mx-2" style="cursor: pointer;">
          {{ type }}
        </li>
      </ul>

      <!-- Navigation Links in Offcanvas -->
      <ul class="list-unstyled">
        <li>
          <router-link to="/projects" @click="navigateTo()" class="text-white"> Projects</router-link>
        </li>
        <li>
          <router-link to="/about" @click="navigateTo()" class="text-white"> About</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="navigateTo()" class="text-white"> Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>



</template>

<script>
export default {
    props: ['types'],
    data() {
        return {
        };
    },
    methods: {
        filterList(type) {
            // Aggiungi la logica per filtrare la lista in base al valore di type
            console.log(type);
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        navigate() {
            // Chiusura dell'offcanvas
            const offcanvasElement = document.getElementById('offcanvasNavbar');
            const offcanvasInstance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
            console.log('offcanvasInstance: ' + offcanvasInstance)
            if (offcanvasInstance) {
              offcanvasInstance.hide();  // Chiudi l'offcanvas
            }
        }
    }
}
</script>

<style scoped>

</style>