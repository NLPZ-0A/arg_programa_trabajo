const Controlador = {
    obtenerDatos: async function() {
      await Modelo.obtenerDatos();
      Vista.actualizar(Modelo.datos);
    }
  };