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
            "imageUrl": "TEST_URL"
          },
          {
            "id": 2,
            "projectName": "Giardino di Ercole",
            "location": "Genzano Di Roma",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "TEST_URL"
          },
          {
            "id": 3,
            "projectName": "Loft di brambuzz",
            "location": "Napoli",
            "nation": "Italia",
            "startDate": "2024-06-05",
            "size": 100.00,
            "sizeUnit": "m2",
            "imageUrl": "TEST_URL"
          }
        ]
      };
    },
    mutations,
    actions,
    getters
  };