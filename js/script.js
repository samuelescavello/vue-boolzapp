import { contacts } from "./data.js";

const {createApp} = Vue 
createApp({
    data(){
        return{
            contacts,
            activeContact: 1,
        }
    },
    methods:{
        userActive(id){
            this.activeContact = id
        },
    },
    
    mounted(){
        console.log(this.contacts)
    },


}).mount('#app')