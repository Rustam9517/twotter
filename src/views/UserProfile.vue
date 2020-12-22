<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile-username">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ state.followers }}
      </div>
      <CreateNewTwoot  @add-twoot="createNewTwootItem"/>
    </div>
    <div class="user-profile__twoots-wrapper" >
      <TwootItem
          v-for="twoot in state.user.twoots"
          :key="twoot.id"
          :username="state.user.username"
          :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "../components/TwootItem";
import CreateNewTwoot from "../components/CreateNewTwoot";
import * as data from '../assets/users.json';
import {useRoute} from "vue-router";
import {reactive,computed} from 'vue';
export default {
  name:'User Profile',
  components:{
    TwootItem,
    CreateNewTwoot
  },
  setup(){
    const route = useRoute();
    const userId = computed(()=>route.params.userId);
    const state = reactive({
      followers: 0,
      user:data.users[userId.value-1] ||data[0]
    })
    function createNewTwootItem(twoot){
      state.user.twoots.unshift({
        id:state.user.twoots.length+1,
        content:twoot
      });
    }
    return{
      state,
      createNewTwootItem,
      userId
    }
  },
};
</script>

<style lang="scss" scoped>
  .user-profile{
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-gap: 50px;
    width: 100%;
    padding: 50px 0;
    margin: 0;
    .user-profile__user-panel{
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8 ;
      .user-profile__admin-badge{
        background: rebeccapurple;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 10px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .user-profile__twoots-wrapper{
        display: grid;
        grid-gap: 10px;
        padding: 0 30px;
      }
      .user-profile__follower-count{
        text-align: left;
        margin-bottom: 10px;
      }
      h1{
        margin: 0;
      }
    }
  }




</style>