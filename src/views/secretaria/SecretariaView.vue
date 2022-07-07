<template>
  <div class="container">
    <h1 class="titulo" >Lista de Secretárias</h1>
    <div class="control">
      <input class="input" type="busca-secretaria" placeholder="Buscar Secretária">

      <router-link class="link-cad" to="/secretaria/cadastrar">
        <button class="button is-info is-outlined btn-cadastrar">Cadastrar</button>
      </router-link>

    </div>
    <div class="table-secretarias">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Salário</th>
          <th>Data Contratação</th>
          <th>PIS</th>
          <th>Celular</th>
          <th>Opções</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <td>AA cc</td>
          <td>3300,00</td>
          <td>25/05/2022</td>
          <td>999999</td>
          <td>(45)99999-9999</td>
          <td>
            <router-link to="/secretaria/detalhar">
              <button class="button is-info">Detalhar</button>
            </router-link>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>DD ee</td>
          <td>3900,00</td>
          <td>24/06/2021</td>
          <td>8888888</td>
          <td>(45)88888-8888</td>
          <td>
            <router-link to="/secretaria/detalhar">
              <button class="button is-info">Detalhar</button>
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "secretaria"
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
.titulo{
  font-size: 30px;
  margin-top: 0px;
  margin-outside: 10px;
}
.input{
  width: 60%;
}
.table-secretarias{
  margin-top: 60px;
}
.table{
  width: 91.4%;
  border-style: solid;
  border-color: darkgrey;
  border-width: 1px;
}
.link-cad{
  width: 30%;

}
.btn-cadastrar{
  width: 100%;
  height: 100%;
  margin-left: 20px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border-width: 0px;
  font-size: 17px;
}
.control{
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
}
</style>