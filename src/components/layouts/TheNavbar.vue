<template>
    <header>
        <h1>
            <span v-for="type in types" :key="type"  @click="filterList(type)"> {{ type }} </span>
        </h1>
    </header>
</template>

<script>
export default {
    props: ['types'],
    methods: {
        filterList(type) {
            //add the logic to filter the list depending by type value
            console.log(type)
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: center; /* Centra orizzontalmente il contenuto */
    align-items: center; /* Centra verticalmente il contenuto all'interno dell'altezza della navbar */
    background-color: black; /* Colore di sfondo nero */
    color: white; /* Testo bianco */
    height: 60px; /* Altezza della navbar */
    width: 100%; /* Larghezza completa della pagina */
    position: fixed; /* Fissa la navbar in alto */
    top: 0; /* Posiziona la navbar in alto */
    left: 0; /* Allinea la navbar al bordo sinistro */
}

h1 {
    display: flex;
    gap: 100px; /* Aggiunge uno spazio tra le stringhe, opzionale */
    margin: 0; /* Rimuove il margine predefinito */
    font-size: 16px; /* Imposta la dimensione del testo a 16px (puoi modificare il valore come desideri) */
}
</style>