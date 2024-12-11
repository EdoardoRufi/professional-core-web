<!--TODO: questo va bene fino a Lg = 992 px. Poi il testo a sinistra non entrerà più!-->

<template>
  <div class="card mb-3 fixed-size-card" @click="$emit('click')"><!-- prova m3 per quando la lista sarà anche orizzontale-->
    <div class="row p-4 g-3 align-items-center">
      <!-- Sezione di testo a sinistra -->
      <div class="col-4">
        <div class="card-body">
          <slot name="left-slot"></slot>
        </div>
      </div>
      <!-- Immagine a destra -->
      <div class="col-8">
        <slot name="right-slot"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  cursor: pointer; /* Fa sembrare la card cliccabile */
}
/* Card con larghezza e altezza fisse */
.fixed-size-card {
  width: 800px; /* Larghezza fissa per la card */
  height: 300px; /* Altezza fissa per la card */
  max-width: 100%; /* Per evitare che sfori su schermi piccoli */
}
/*.card-content-image img {
/*  filter: grayscale(100%); /* Bianco e nero per l'immagine */
/*  transition: filter 0.3s ease; /* Aggiunge una transizione morbida per il passaggio */
/*}

/*.card-content-image img:hover {
/*  filter: grayscale(0%); /* Rimuove il bianco e nero al passaggio del mouse */
/*}*/
</style>

