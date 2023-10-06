<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Public</router-link>|
      <router-link to="/Login">Login</router-link>|
      <router-link to="/Admin">Admin</router-link>|
      <router-link to="/Dashboard">Admin Dashboard</router-link>|
      <router-link to="/Fallback">Fallback</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>