const Vista = {
    actualizar: function(datos) {
      const card_container = document.getElementById('carousel__cards_container');
  
      datos.forEach(dato => {
        const card = document.createElement('div');
        card.className = 'card';
        
        elemento.textContent = dato;
        contenedor.appendChild(elemento);
      });
    }
  };