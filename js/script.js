import { contacts } from "./data.js";

const { createApp } = Vue
createApp({
    data() {
        return {
            contacts,
            activeContact: 1,
            messageText: "",
            searceText: "",
        }
    },
    methods: {
        userActive(id) {
            this.activeContact = id
        },
        sendMessage() {
            const newMessage = {
                date: new Date().toLocaleString(),
                message: this.messageText,
                status: 'sent',
            }
            this.activeUser.messages.push(newMessage);
            this.messageText = '';
            setTimeout(()=>{
                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: 'ok',
                    status: 'received'
                }
                this.activeUser.messages.push(newMessage);
            }, 1000);
        }
    },
    computed: {
        activeUser() {
            return this.contacts.find((el) => el.id === this.activeContact)

        },
        filteredContact(){
            return this.contacts.filter((el)=> el.name.toLowerCase().includes
            (this.searceText.toLowerCase()));
        }
    },
    mounted() {
        console.log(this.contacts)
    },


}).mount('#app')