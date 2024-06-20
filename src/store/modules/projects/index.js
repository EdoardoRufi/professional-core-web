import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
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
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
            "imageUrl": "assets/{id}/frontMockImage.jpg"
          },
          {
            "id": 3,
            "projectName": "Loft di brambuzz",
            "location": "Napoli",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "assets/{id}/frontMockImage.jpg"
          }
        ]
      };
    },
    mutations,
    actions,
    getters
  };