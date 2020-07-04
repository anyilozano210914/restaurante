<template>
    <div>
        <v-container>
            <v-btn color="pink" @click="goToCreateRestaurants">crear</v-btn>
            <v-data-table :headers="headers" :items="restaurantes" :items-per-page="5" class="elevation-1">
                <template v-slot:item.id="{ item }">
                    <router-link :to="'/reserve/' + item.id">{{ item.id }}</router-link>
                </template>
                <template v-slot:item.action="{ item }">
                    <v-btn color="primary" x-small @click="goToEdit(item)" v-on="on" v-bind="attrs">editar</v-btn>
                    <v-btn color="blue" x-small @click="deleteRestaurant(item)">
                        eliminar
                    </v-btn>
                </template>
            </v-data-table>
            <v-snackbar v-model="notification" :timeout="timeout" :top="true" :right="true">
                {{ message }}

                <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="notification = false"
                >
                    x
                </v-btn>
                </template>
                </v-snackbar>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        restaurantes: [],
        headers: [
            { text: 'id', value: 'id' },
            { text: 'Nombre', value: 'name' },
            { text: 'Descripcion', value: 'description' },
            { text: 'Logo', value: 'img' },
            { text: 'Direccion', value: 'address' },
            { text: 'Ciudad', value: 'city.name' },
            { text: 'Minimo pedido', value: 'min_price' },
            { text: 'Acciones', value: 'action' },
        ],
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        fab:false,

    }),
    created() {
        this.getRestaurants();
    },
    methods: {
        getRestaurants(){
            axios.get('/api/restaurants/getRestaurants')
            .then(res => {
                this.restaurantes = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        goToCreateRestaurants(){
            this.$router.push('/CreateRestaurant');
        },
        deleteRestaurant(item){
            axios.delete('/api/restaurants/deleteRestaurant/' + item.id)
            .then(res => {
                this.notification = true;
                this.message = res.data;
                this.color = 'success';
                this.getRestaurants()
            }).catch(err => {
                this.notification = true;
                this.message = 'Ocurrio un error al momento de eliminar el restaurante.'
                this.color = 'error';
            })
        },
        goToEdit(item){ 
            this.$router.push('/editRestaurant/'+item.id)
        }
    }
}
</script>