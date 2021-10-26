<template>
  <section>
    <div>
      <input type="text" placeholder="Buscar" v-model="input_search" @keyup="buscar" />
      <button>Nuevo usuario</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Opciones</th>
          <th>Nombre completo</th>
          <th>Nickname</th>
          <th>Tipo de usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>[show] [edit] [destroy]</td>
          <td>{{ nombreCompleto( user ) }}</td>
          <td>{{ user.nickname }}</td>
          <td>{{ user.tipo_usuario }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import data from './data'

export default {
  name: 'Users',
  data () {
    return {
      input_search: '',
      users: []
    }
  },
  created() {
    this.users = data
  },
  methods: {
    nombreCompleto( item ){
      return `${item.nombre} ${item.apellidos}`
    },
    buscar(){
      let found = this.users.filter( 
        (item) => item.nombre.toLowerCase() == this.input_search.toLowerCase()  
      )
      if( found.length > 0 )
        this.users = found
      else
        this.users = data
    }
  }
}
</script>

<style>

</style>