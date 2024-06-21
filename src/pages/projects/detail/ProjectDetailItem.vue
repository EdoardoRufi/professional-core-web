<template>
    <li>
        <base-card>
            <div class="card-content">
                <div class="info">
                    <p> {{ inputDetail.description }}</p>
                </div>
                <div class="image">
                    <img :src="computedImageUrl" alt="Project Image" />
                </div>
            </div>
        </base-card>
    </li>
</template>

<script>
import { resolveImageUrl } from '../../../util/ImageUtil';

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        order: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            inputProject: null,
            inputDetail: null
        }
    },
    created() {
        //console.log("projectDetailItem created di the project. id:" + this.id + ", order:" + JSON.stringify(this.order));
        const projectId = parseInt(this.id, 10);
        this.inputProject = this.$store.getters['projects/projects'].find((project) => project.id === projectId);
        //console.log("inputProject" + JSON.stringify(this.inputProject));
        this.inputDetail = this.inputProject.details.find(detail => detail.order === this.order);
        //console.log("inputDetail" + JSON.stringify(this.inputDetail));
    },
    computed: {
        computedImageUrl() {
            return resolveImageUrl(this.inputProject, this.id, this.isMain, this.order);
        }
    },

}
</script>

<style scoped>
.info {
  font-size: 0.875rem;
  /* Small and light font */
  font-weight: 300;
  text-align: right;
  /* Align text to the right */
  flex-shrink: 0;
  /* Prevents the info section from shrinking */
}

.image img {
  max-width: 25rem;
  /* Adjust the size of the image as needed */
  max-height: 25rem;
  flex-grow: 1;
  /* Let the image take the remaining space */
  object-fit: cover;
  margin-left: 1rem;
}

h3 {
  font-size: 1.0rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.25rem 0;
  /* Adjusted margin for a more compact look */
}

a {
  text-decoration: none;
  color: #ce5c00;
}

</style>