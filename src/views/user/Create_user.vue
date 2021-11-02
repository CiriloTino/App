<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot name="header">
        <button type="button" class="btn-close" @click="close">x</button>
      </slot>

      <slot name="body">
        <div class="formulario">
          <form @submit.prevent="agregarUsuario">
            <input
              type="text"
              placeholder="Nombre"
              class="button"
              v-model="nombre"
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              class="button"
              v-model="apellidos"
              required
            />
            <input
              type="text"
              placeholder="Nickname"
              class="button"
              v-model="nickname"
              required
            />
            
            <select
              name="select"
              class="button"
              aria-placeholder="Tipo de usuario"
              aria-label="Tipo de usuario"
              v-model="tipo_usuario"
              required
            >
              <option value="Administrador" selected>Administrador</option>
              <option value="Almacén">Almacén</option>
              <option value="Enfermero">Enfermero</option>
            </select>
            
            <input :type='visible?"text":"password"' v-model="password" class="button password" placeholder="Password" @keyup="validarPassword" required/>
            <i @click="visibleChange" > {{visible?'Ocultar':'Mostrar'}}</i>
            <p class="error"> {{passwordValidate?'':'Se requieren al menos 8 caracteres (números y letras).'}}
            </p>

            
            <input type="submit" class="btn-guardar"/>
          </form>
        </div>
      </slot>

      <slot name="footer"> </slot>
    </div>
  </div>
</template>





<script>
import data from "./data";
export default {
  name: "Modal",
  data() {
    return {
      nombre: "",
      apellidos: "",
      nickname: "",
      tipo_usuario: "",
      password: null,
      visible: false,
      passwordValidate: null,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    agregarUsuario() {
      var datos = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        nickname: this.nickname,
        tipo_usuario: this.tipo_usuario,
        password: this.password,
      };
      data.push(datos);
      (this.nombre = ""),
      (this.apellidos = ""),
      (this.nickname = ""),
      (this.tipo_usuario = ""),
      (this.password = "");
      (this.visible=false);
      (this.passwordValidate=false)
      this.close();
    },
    visibleChange()
    {
      this.visible = !this.visible
    },
    validarPassword()
    {
      var result = /[aA-zZ]\d/.test(this.password);
      console.log(result);
      if(result == true && this.password.length>7)
        this.passwordValidate=true
      else
        this.passwordValidate=false
    },
  },
};
</script>






<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  height: 33em;
  width: 29em;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 1em 1em;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  background: #011843;
  color: white;
  margin-left: 20em;
}

.formulario {
  padding: 1em;
}

.btn-gruop {
  padding: 1em;
  align-items: left;
}

.button{
  width: 25em;
  background: #ffffff;
  border: 1px solid #b7c3d9;
  box-sizing: border-box;
  padding: 1em;
  margin-right: 5rem;
  margin: 1em;
}

.btn-guardar {
  background: #011843;
  color: white;
  width: 10em;
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
}

i{
  cursor: pointer;
  height: 1em;
  font-size: 12px;
}

.password{
  margin-left:2em;
  width: 23em;
}

p{
  font-size: 12px;
  margin-top: -1em;
  margin-left: -1em;
  color:red;
}



</style>