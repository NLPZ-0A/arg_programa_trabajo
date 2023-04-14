const Modelo = {
  datos: [],
  obtenerDatos: async function() {
    try {
      uri = 'db_cars.json'
      const respuesta = await fetch('db_cars.json');
      const datosJson = await respuesta.json();
      this.datos = datosJson;
      console.log(datosJson);
    } catch(error) {
      console.error(error);
    }
  }
};