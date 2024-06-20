export function resolveImageUrl(inputProject, id, isMain, order = null) {
    let image = null;
  
    if (isMain) {
      // Main case: used in the list, shows main image
      image = inputProject.imageUrl;
    } else if (!isMain && order !== null) {
      // Not main case: uses the image url of the detail with the necessary order
      const detailImage = inputProject.details.find(detail => detail.order === order);
      if (detailImage) {
        image = detailImage.imageUrl;
      } else {
        console.error('Detail image with order', order, 'not found.');
        image = 'assets/error.png';
      }
    } else {
      console.error('Invalid conditions for image resolution.');
      image = 'assets/error.png';
    }
  
    image = image.replace('{id}', id);
    
    try {
      return require('@/' + image);
    } catch (e) {
      console.error('Image not found at path:', e);
      return require('@/assets/error.png'); // Ritorna un percorso di immagine predefinito
    }
  }