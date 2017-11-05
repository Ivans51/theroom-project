<template>
    <div>
        <h2>This is {{text}}</h2>
        <ul id="list-contacts" v-if="contacts != null">
            <li>{{contacts}}</li>
        </ul>
        <span v-else>Loading...</span>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'contacts',
        mounted() {
            this.getContacts()
        },
        data() {
            return {
                text: 'contacts',
                contacts: null
            }
        },
        methods: {
            getContacts(){
                axios.get('url')
                    .then((respond) => {
                        this.contacts = respond
                    })
            }
        }
    }
</script>