  <template>
    <li>
      <base-card><!--aggiungere onClick così che si può cliccare l'intera card per andare alla pagina del dettaglio
        inoltre sarebbe bello che l'immagine è in bianco e nero, ma passando il mouse sull'immagine si colora-->
        <div class="card-content">
          <div class="info">
            <h3>{{ projectName }}</h3>
            <p> {{ location }}</p>
            <p> {{ nation }}</p>
            <p> {{ startDate }}</p>
            <p> {{ size }} {{ sizeUnit }}</p>
          </div>
          <div class="image">
            <img :src="imageUrl" alt="Project Image" />
          </div>
        </div>
      </base-card>
    </li>
  </template>
  
  <script>
  export default {
    props: ['id', 'projectName', 'location', 'nation', 'startDate', 'size', 'sizeUnit', 'imageUrl'],
    methods: {
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
  }
  
  .info {
    font-size: 0.875rem; /* Small and light font */
    font-weight: 300;
    text-align: right; /* Align text to the right */
  }
  
  .image img {
    max-width: 10rem; /* Adjust the size of the image as needed */
    max-height: 10rem;
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