<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {State, Getter,Action} from 'vuex-class';
const namespace:string = 'HelloVuex';
@Component
export default class HelloVuex extends Vue {
    @State('name',{namespace}) name: string;
    @State('count',{namespace}) count: number;
    @Getter('exclamationMarks',{namespace}) exclamationMarks: string;

    @Action('increment',{namespace}) increment: any;
    @Action('decrement',{namespace}) decrement: any;
}
</script>