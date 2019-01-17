<template>
<!-- eslint-disable -->
  <div class="app">
    <div class="container z-depth-1">
      <my-header v-bind:openModal="openModal"></my-header>
      <my-list :seen="seen" v-bind:todos="todos" v-bind:showNoList="showNoList"></my-list>
    </div>
    <my-modal :open="open" v-bind:hideModal="hideModal" v-bind:showList="showList" v-bind:todos="todos" ></my-modal>
  </div>
</template>

<script>
import Header from './Header.vue';
import List from './List.vue';
import Modal from './Modal.vue';

/* eslint-disable */ 
export default {
  name: 'app',
  data() {
    return {
      todos: [],
      open: false,
      seen: true,
    };
  },
  methods: {
    openModal(){
      this.open = true;
    },
    hideModal() {
      this.open = false;
    },
    showList(){
      this.seen = false;
    },
    showNoList(){
      this.seen = true;
    }
  },
  components: {
    'my-header': Header,
    'my-list': List,
    'my-modal': Modal,
  }
};
</script>

