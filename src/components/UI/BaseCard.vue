<!--TODO: questo va bene fino a Lg = 992 px. Poi il testo a sinistra non entrerà più!-->

<template>
  <div class="card mb-3 "><!-- prova m3 per quando la lista sarà anche orizzontale-->
    <div class="row p-4 g-3 align-items-center">
      <!-- Sezione di testo a sinistra -->
      <div class="col-4">
        <div class="card-body">
          <!--TODO: <slot name="left-slot"></slot>-->
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">This is a description for the card. You can add more content as needed.</p>
        </div>
      </div>
      <!-- Immagine a destra -->
      <div class="col-8">
        <!--TODO: <slot name="right-slot"></slot>-->
        <p>PROVAPROVAPROVAPROVA
        </p>
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
/*.card-content-image img {
/*  filter: grayscale(100%); /* Bianco e nero per l'immagine */
/*  transition: filter 0.3s ease; /* Aggiunge una transizione morbida per il passaggio */
/*}

/*.card-content-image img:hover {
/*  filter: grayscale(0%); /* Rimuove il bianco e nero al passaggio del mouse */
/*}
</style>

