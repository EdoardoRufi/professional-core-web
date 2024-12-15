import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import filters from './filters';
export default {
    namespaced: true,
    modules: {
      filters
    },
    state() {
      return {
        projects: [
          {
            "id": 1,
            "projectName": "Casa di Peppuccio",
            "location": "Lanuvio",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "assets/{id}/frontMockImage.jpg",
            "type": "Engineering",
            "details" : [ {
              "order" : "001",
              "description": "A beautiful house",
              "imageUrl": "assets/{id}/001_detailImage.jpg"
              },
              {
              "order" : "002",
              "description": "Maremm che bellezz",
              "imageUrl": "assets/{id}/002_detailImage.jpg"
              },
              {
              "order" : "003",
              "description": "è fantascientifica, ma veramente lo dico.Si tratta di fantascienza.",
              "imageUrl": "assets/{id}/003_detailImage.jpg"
              },
              {
              "order" : "004",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "imageUrl": "assets/{id}/003_detailImage.jpg"
              },
            ]
          },
          {
            "id": 2,
            "projectName": "Giardino di Ercole",
            "location": "Genzano Di Roma",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "assets/{id}/frontMockImage.jpg",
            "type": "Landscape"
          },
          {
            "id": 3,
            "projectName": "Loft di brambuzzzzzzzzzzzzzzzzzzzzzzz",
            "location": "Napoli",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "assets/{id}/frontMockImage.jpg",
            "type": "Architecture"
          }
        ]
      };
    },
    mutations,
    actions,
    getters
  };