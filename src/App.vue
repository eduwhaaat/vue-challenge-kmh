<template>
  <div id="app">
    <div>
      <!-- <router-view></router-view> -->
      <md-tabs md-sync-route>
        <md-tab id="tab-addUser" md-label="Add User" to="/users/add">
        </md-tab>
        <md-tab id="tab-editUser" md-label="Edit User" to="/users/edit" md-disabled>
        </md-tab>
        <md-tab id="tab-users" md-label="Users" to="/users">
        </md-tab>
        <md-tab id="tab-security" md-label="Security" to="/security/">
        </md-tab> 
      </md-tabs>
      <transition name="fade">
      <router-view></router-view>
    </transition>
    </div>
   <!--  <img alt="Vue logo" src="./assets/logo.png">
    <AddUser/>
    <UsersTable/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AddUser from "./components/users/AddUser.vue";
import EditUser from "./components/users/EditUser.vue";
import UsersTable from "./components/users/UsersTable.vue";
import SecurityComponent from "./components/security/SecurityComponent.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    AddUser,
    UsersTable,
    SecurityComponent,
    EditUser
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;

  padding: 40px;
}
</style>
