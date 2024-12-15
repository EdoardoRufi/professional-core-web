  <template>
    <li class="mx-auto" style="max-width: 40rem;">
      <base-card @click="navigateToDetail">
        <!--inoltre sarebbe bello che l'immagine è in bianco e nero, ma passando il mouse sull'immagine si colora-->
        <template #left-slot>
          <div v-if="isMain" class="card-content-text">
            <h3>{{ inputProject.projectName }}</h3>
            <p> {{ inputProject.location }}</p>
            <p> {{ inputProject.nation }}</p>
            <p> {{ inputProject.startDate }}</p>
            <p> {{ inputProject.size }} {{ inputProject.sizeUnit }}</p>
          </div>
          <div v-if="!isMain && order" class="card-content-text">
            <p> {{ inputDetail.description }}</p>
          </div>
        </template>
        
        <template #right-slot>
          <div class="card-content-image  border border-1 text-center">
            <img :src="computedImageUrl" 
            alt="Project Image"/>
          </div>
        </template>
      </base-card>
    </li>
  </template>

<script>
import { resolveImageUrl } from '../../util/ImageUtil';

export default {
  props: ['id', 'isMain', 'order'],
  data() {
    return {
      inputProject: null,
      inputDetail: null
    }
  },
  created() {
        console.log("theProject created di the project. id:" + this.id + ", isMain: " + this.isMain + ", order:" + JSON.stringify(this.order));
        const projectId = parseInt(this.id, 10);
        this.inputProject = this.$store.getters['projects/projects'].find((project) => project.id === projectId);
        console.log("theProject  inputProject" + JSON.stringify(this.inputProject));
        if (!this.isMain && this.order) {
          this.inputDetail = this.inputProject.details.find(detail => detail.order === this.order);
          console.log(" theProject inputDetail:" + JSON.stringify(this.inputDetail));
        }
    },
  computed: {
    computedImageUrl() {
      return resolveImageUrl(this.inputProject, this.id, this.isMain, this.order);
    }
  },
  methods: {
    navigateToDetail() {
      if (this.isMain) {
        this.$emit('project-selected', this.id);
        this.$router.push(`/projects/${this.id}`);
      }
    }
  }
};
</script>

<style scoped>

.card-content-text {
  text-align: left;
  word-break: break-word; /* Mantiene il testo leggibile */
}
.card-content-image {
  width: 100%;
  height: 100%; /* Mantiene le proporzioni */
  max-height: 15rem; /* Imposta un'altezza massima (se necessario) */
  overflow: hidden; /* Nasconde eventuali parti eccedenti */
  display: flex; /* Centra il contenuto */
  /*capire con quale combinazione le immagini non vengono distorte*/
  /*justify-content: center; /* Centra orizzontalmente */
  /*align-items: center; /* Centra verticalmente */
}
.card-content-image img {
  max-width: 100%; /* Limita la larghezza all'interno del contenitore */
  max-height: 100%;
  /*capire con quale combinazione le immagini non vengono distorte*/
  /*object-fit: cover; /* Ritaglia l'immagine per riempire lo spazio */
}

h3 {
  font-size: 1.0rem;
  margin-bottom: 10px;
}

p {
  margin-bottom: 1px;
}
</style>