<template>
      <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Vuex Component</h1>
        <hello-Vuex></hello-Vuex>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloComponent  from './components/Hello.vue';
import HelloDecoratorComponent  from './components/HelloDecorator.vue';
import HelloVuex from './components/HelloVuex.vue';

@Component({
    components:{
        HelloComponent ,
        HelloDecoratorComponent,
        HelloVuex 
    }
})
export default class App extends Vue {
    name: string = "world";
}
</script>
