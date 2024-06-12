<template>
    <div>
        <header>
            <div class="hamburger" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="top-menu" >
                <h1>
                   <span v-for="type in types" :key="type" @click="filterList(type)"> {{ type }} </span>
                </h1>
            </div>

        </header>
        <div v-if="menuOpen" class="side-menu">
            <ul>
                <li @click="navigateTo('Projects')">Projects</li>
                <li @click="navigateTo('About')">About</li>
                <li @click="navigateTo('Contact')">Contact</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['types'],
    data() {
        return {
            menuOpen: false
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
        navigateTo(section) {
            // Aggiungi la logica per navigare alla sezione desiderata
            console.log(section);
            this.menuOpen = false; // Chiudi il menu dopo la navigazione
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

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}

.hamburger {
    position: absolute;
    left: 20px; /* Distanza dal bordo sinistro */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    cursor: pointer;
}

.hamburger span {
    background-color: white;
    height: 4px; /* Righe più spesse */
    width: 100%;
}

.top-menu h1 {
    display: flex;
    gap: 100px; /* Aggiunge uno spazio tra le stringhe, opzionale */
    margin: 0; /* Rimuove il margine predefinito */
    font-size: 16px; /* Imposta la dimensione del testo a 16px (puoi modificare il valore come desideri) */
}

.top-menu span {
    cursor: pointer; /* Cambia il cursore in pointer per indicare cliccabilità */
}

.top-menu span:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Cambia il colore di sfondo al passaggio del mouse */
}

.side-menu {
    position: fixed; /* Fissa la posizione del menu rispetto alla finestra del browser */
    top: 60px; /* Posiziona il menu sotto la navbar */
    left: 0; /* Allinea il menu al bordo sinistro */
    width: 200px; /* Larghezza del menu laterale */
    height: 100%; /* Altezza completa della finestra del browser */
    background-color: black; /* Colore di sfondo nero */
    color: white; /* Colore del testo bianco */
    padding: 20px; /* Spazio interno del menu */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); /* Aggiunge un'ombra a destra del menu per effetto di profondità */
}

.side-menu ul {
    list-style: none; /* Rimuove i puntini o numeri di default dagli elenchi */
    padding: 0; /* Rimuove il padding predefinito */
    margin: 0; /* Rimuove il margine predefinito */
}

.side-menu li {
    padding: 10px 0; /* Spazio interno verticale per ogni elemento di lista */
    cursor: pointer; /* Cambia il cursore in pointer per indicare cliccabilità */
}

.side-menu li:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Cambia il colore di sfondo al passaggio del mouse */
}
</style>