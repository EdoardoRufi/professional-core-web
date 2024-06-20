  <template>
    <li>
      <base-card @click="navigateToDetail"><!--aggiungere onClick così che si può cliccare l'intera card per andare alla pagina del dettaglio
        inoltre sarebbe bello che l'immagine è in bianco e nero, ma passando il mouse sull'immagine si colora-->
        <div class="card-content">
          <div class="info">
            <h3>{{ inputProject.projectName }}</h3>
            <p> {{ inputProject.location }}</p>
            <p> {{ inputProject.nation }}</p>
            <p> {{ inputProject.startDate }}</p>
            <p> {{ inputProject.size }} {{ inputProject.sizeUnit }}</p>
          </div>
          <div class="image">
            <img :src="computedImageUrl" alt="Project Image" />
          </div>
        </div>
      </base-card>
    </li>
  </template>
  
  <script>

  export default {
    props: ['id'],
    data() {
      return {
        inputProject: null
      }
    },
    created() {
      this.inputProject = this.$store.getters['projects/projects'].find((project) => project.id === this.id)
    },
    computed: {
      computedImageUrl() {
        try {
        return require('@/'+ this.inputProject.imageUrl.replace('{id}', this.id));
      } catch (e) {
        console.error('Image not found at path:', e);
        return ''; // Ritorna un percorso di immagine predefinito o lascialo vuoto
      }
      }
    },
    methods: {
      navigateToDetail() {
        this.$emit('project-selected', this.id);
        this.$router.push(`/projects/${this.id}`);
        }
    }
  };
  </script>
  
  <style scoped>
  li {
    margin: auto;
    max-width: 40rem;
  }
  
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer; /* Change cursor to pointer to indicate the card is clickable */
  }
  
  .info {
    font-size: 0.875rem; /* Small and light font */
    font-weight: 300;
    text-align: right; /* Align text to the right */
    flex-shrink: 0; /* Prevents the info section from shrinking */
  }
  
  .image img {
    max-width: 25rem; /* Adjust the size of the image as needed */
    max-height: 25rem;
    flex-grow: 1; /* Let the image take the remaining space */
    object-fit: cover;
    margin-left: 1rem;
  }

  h3 {
    font-size: 1.0rem;
    margin: 0.5rem 0;
  }
  
  p {
    margin: 0.25rem 0; /* Adjusted margin for a more compact look */
  }
  
  a {
    text-decoration: none;
    color: #ce5c00;
  }
  
  a:hover,
  a:active {
    color: #c89300;
  }
  </style>