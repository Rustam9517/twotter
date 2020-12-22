<template>
  <form class="user-profile__create-twoot" @submit.prevent="createTwoot" :class="{'--exceeded':newTwootCounter>180}">
    <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCounter}}/180)</label>
    <textarea name="" id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>
    <div class="create-twoot-panel__submit">
      <div class="user-profile__create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option :value="option.value" v-for="(option,index) in state.twootTypes" :key="index">{{option.name}}</option>
        </select>
      </div>
      <button class="user-profile__create-twoot__submit">Twoot!</button>
    </div>
  </form>
</template>

<script>
import {reactive,computed} from 'vue';
export default {
  name: "CreateNewTwoot",
  setup(props, context){
    const state = reactive({
      newTwootContent:'',
      selectedTwootType:'instant',
      twootTypes:[
        {
          value:'draft',
          name:'Draft'
        },
        {
          value:'instant',
          name:'Instant Twoot'
        }
      ],
    })
    const newTwootCounter = computed(()=>state.newTwootContent.length);
    function createTwoot(){
      if(state.newTwootContent && state.selectedTwootType !=='draft'){
        context.emit('add-twoot',state.newTwootContent)
        state.newTwootContent ='';
      }
    }
    return {
      state,
      newTwootCounter,
      createTwoot
    }
  },
}
</script>

<style lang="scss" scoped>
.user-profile__create-twoot{
  display: flex;
  flex-direction: column;
  text-align: left;
  textarea{
    resize: none;
    margin-bottom: 20px;
  }
  .create-twoot-panel__submit{
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    button{
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white;
      font-weight: bold;
    }
  }
  &.--exceeded{
    color: red;
    border-color: red;
    .create-twoot-panel__submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}

</style>