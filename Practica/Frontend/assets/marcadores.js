/** Codigo .js para la pagina index.vue */
export default {
  data() {
    return {
      /** Determina si la aplicacion se encuentra en estado de edicion */
      enEdicion: false,
      /** Array de marcadores */
      lista_marcadores: [],

      /** Parametros de formulario */
      fields: ["id", "url", "nombre", "descripcion", "acciones"],
      marcador: {
        id: "",
        url: "",
        nombre: "",
        descripcion: "",
        acciones: true
      },
      show: true
    };
  },
  /** Metodos */
  methods: {
    /** Limpia los campos del formulario */
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.marcador.id = "";
      this.marcador.url = "";
      this.marcador.nombre = "";
      this.marcador.descripcion = "";
    },

    cargarLS() {
      let url = "http://127.0.0.1:3001/marcadores";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_marcadores = respuesta.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearMarcador() {
      let mark = this.marcador;
      let url = "http://127.0.0.1:3001/marcadores";
      this.$axios
        .post(url, mark)
        .then(respuesta => {})
        .catch(error => {});
      this.marcador = {
        id: "",
        url: "",
        nombre: "",
        descripcion: "",
        acciones: true
      };
    },

    eliminarMarcador() {
      let id = this.marcador.id;
      let url = "http://127.0.0.1:3001/marcadores/" + id;
      this.$axios
        .delete(url)
        .then(respuesta => {})
        .catch(error => {});
      this.marcador = {
        id: ""
      };
    },

    cargarMarcador({ item }) {
      let aux = this.lista_marcadores.find(marcador => marcador.id == item.id);
      this.enEdicion = true;
      this.marcador = Object.assign({}, aux);
    },

    actualizarMarcador() {
      this.enEdicion = false;
      let id = this.marcador.id;
      let mark = this.marcador;
      let url = "http://127.0.0.1:3001/marcadores/" + id;
      this.$axios
        .put(url, mark)
        .then(respuesta => {})
        .catch(error => {});
      this.marcador = {
        id: "",
        url: "",
        nombre: "",
        descripcion: "",
        acciones: true
      };
    }
  }
};
