<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HomeContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HomeContainer from '@/containers/Home';

export default defineComponent({
  components: {
    HomeContainer,
    HelloWorld,
  },
  setup() {
    console.log('aaaa');
  },
});

/*
@Options({
  components: {
    HelloWorld,
    HomeContainer,
  },
})
export default class Home extends Vue {}
*/
</script>
