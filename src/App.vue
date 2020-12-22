<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">
          <div class="header-logo">
            <h3>Twotter</h3>
          </div>
        </router-link>
        <div class="nav-username" v-if="user">
          <p>@{{user.username}}</p>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<script>
import {computed} from "vue";
import {useStore} from 'vuex';

export default {
  name:'App',
  setup(){
    const store = useStore();
    const user = computed(()=> store.state.user);
    return{
      user:user.value[0]
    }
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
header{
  width: 100%;
  nav{
    padding: .5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hotpink;
    color: white;
    a{
      text-decoration: none;
      color: white;
    }
  }
}
</style>
