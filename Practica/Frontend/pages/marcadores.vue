<template>
  <div class="container">
    <div>
      <b-container fluid="md">
        <center>
          <h1>Creación de marcadores</h1>
        </center>
        <br />
        <!-- Formulario con los parametros indicados -->
        <b-form action="javascript:void(0)" @submit="crearMarcador()" @reset="onReset">
          <b-form-group label="ID NO editable (autoincremento)" label-for="id" v-if="enEdicion">
            <b-form-input
              class="lbl-control"
              type="number"
              v-model="marcador.id"
              placeholder="¡Solo sirve para buscar!"
              id="id"
              required
              v-if="enEdicion"
            />
          </b-form-group>

          <b-form-group label="Url:" label-for="url">
            <b-form-input
              class="form-control"
              type="text"
              v-model="marcador.url"
              placeholder=" Ingrese URL del marcador"
              id="url"
              required
            />
          </b-form-group>

          <b-form-group label="Nombre:" label-for="nombre">
            <b-form-input
              class="form-control"
              type="text"
              v-model="marcador.nombre"
              placeholder=" Ingrese nombre(s) del marcador"
              id="nombre"
              required
            />
          </b-form-group>

          <b-form-group label="Descripción:" label-for="descripcion">
            <b-form-input
              class="form-control"
              type="text"
              v-model="marcador.descripcion"
              placeholder="Ingrese Descripción del marcador"
              id="descripcion"
              required
            />
          </b-form-group>

          <!-- Botones agrupados -->
          <b-button type="submit" variant="success" v-if="!enEdicion">Crear Marcador</b-button>
          <b-button @click="actualizarMarcador()" variant="success" v-else>Actualizar Marcador</b-button>
          <b-button @click="cargarLS()" variant="primary">Cargar lista</b-button>
        </b-form>
        <br />

         <!-- Tabla de marcadores -->
        <b-table striped hover :items="lista_marcadores" :fields="fields">
          <template v-slot:cell(acciones)="row">
            <!-- Botones para editar y eliminar marcadores de la lista -->
            <b-button size="sm" @click="cargarMarcador(row)" class="mr-2">Modificar</b-button>
          </template>
        </b-table>
        <br />

        <center>
          <h1>Eliminación de marcadores</h1>
        </center>
        <br />
        <!-- Formulario para eliminar -->
        <b-form action="javascript:void(0)" @submit="eliminarMarcador()" @reset="onReset">
          <b-form-group label="Ingrese ID del marcador" label-for="id">
            <b-form-input
              class="lbl-control"
              type="number"
              v-model="marcador.id"
              placeholder="¡Solo sirve para Eliminar!"
              id="id"
              required
            />
          </b-form-group>

          <!-- Botones agrupados -->
          <b-button type="submit" variant="danger" v-if="!enEdicion">Eliminar Marcador</b-button>
        </b-form>

      </b-container>
    </div>
  </div>
</template>

<script src="@/assets/marcadores.js" />

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
