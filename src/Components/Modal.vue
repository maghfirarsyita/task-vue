<template>
<!-- eslint-disable -->
    <vue-modaltor :visible="open" @hide="hideModal">
      <div class="row modal-popup">
        <form @submit.prevent="submitTodo">
          <div class="input-field col s10 offset-s1">
            <input type="text" v-model="newTodo" id="input-text" class="materialize-input">
            <label for="input-text">Input task</label>
          </div>
          <div class="col s6 offset-s3">
            <a class="btn waves-effect col s5 teal" @click="hideModal">Cancel</a>
            <a class="col s2"></a>
            <button class="btn waves-effect col s5 teal">Submit</button>
          </div>
        </form>
      </div>
    </vue-modaltor>
</template>

<script>
export default {
/* eslint-disable */ 
    props: {
        open: Boolean,
        openModal: Function,
        hideModal: Function,
        showList: Function,
        todos: Array,
        visible: {
            type: Boolean,
            required: false,
            default: false,
        },
        resizeWidth: {
            type: Object,
        },
        animationPanel: {
            type: String,
            required: false,
            default: 'modal-fade',
        },
        animationParent: {
            type: String,
            required: false,
            default: 'modal-fade',
        },
        bgOverlay: {
            type: String,
            required: false,
            default: '#eee',
        },
        bgPanel: {
            type: String,
            required: false,
            default: '#fff',
        },
        defaultWidth: {
            type: String,
            required: false,
            default: '50%',
        },
        closeScroll: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    data() {
        return {
            newTodo: '',
        };
    },
    methods: {
        submitTodo() {
            if(!this.newTodo){
                return;
            }else{
                this.todos.push({
                    title: this.newTodo,
                    done: false,
                });
                this.hideModal();
                this.showList();
                this.newTodo = '';
            }
        },
    },
}
</script>
