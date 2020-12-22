<template>
  <div class="home">
    <h1>Home</h1>
    <div class="user-list">
      <router-link v-for="user in users" :to="{name:'UserProfile', params:{userId:user.id}}" :key="user.id">
        {{user.username}}
      </router-link>
    </div>
  </div>
</template>

<script>
import * as data from '../assets/users.json';
export default {
  name: 'Home',
  setup(){
    const users = data.users;
    return{
      users
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding: 50px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .user-list{
      display: flex;
      justify-content: space-between;
      width: 40%;
      a{
        text-decoration: none;
        color: hotpink;
      }
    }
  }
</style>
