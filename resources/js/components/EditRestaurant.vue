<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" ref="form">
                <v-text-field v-model="restaurant.name" label="Nombre"></v-text-field>
                    <v-text-field v-model="restaurant.description" label="Descripción"></v-text-field>
                    <v-text-field v-model="restaurant.address" label="Direccion"></v-text-field>
                    <v-select :items="cities" item-text="name" item-value="id" v-model="restaurant.city_id" label="ciudad"></v-select>
                    <v-text-field v-model="restaurant.min_price" label="Minimo Pedido" type="number"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="EditRestaurant">Editar</v-btn>
            </v-form>
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
        name: '',
        description: '',
        img: '',
        min_price: '',
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        restaurants: [],
        cities: []
    }),
    mounted(){
        this.getRestaurants();
        this.param = this.$route.params.id
    },
    computed: {
        restaurant: function(){
            let restaurant = {}
            this.restaurants.map(item => {
                if(item.id == this.param){
                    restaurant = item
                }
            })
            return restaurant
        }
    },
    methods:{
        getRestaurants(){
            axios.get('/api/restaurants/getRestaurants')
            .then(res => {
                this.restaurants = res.data
            }).catch(error => {
                console.log(error)
            })
        },

        goToBack(){
            this.$router.push('/')
        },

        EditRestaurant(){
            if(!this.restaurant.name){
                this.notification = true;
                this.message = 'No has introcido el nombre del restaurante';
                this.color = 'error';
            }else if(!this.restaurant.description){
                this.notification = true;
                this.message = 'No has introcido la descripcion';
                this.color = 'error';
            }else if(!this.restaurant.img){
                this.notification = true;
                this.message = 'No has introcido la imagen  del restaurante';
                this.color = 'error';
            }else if(!this.restaurant.min_price){
                this.notification = true;
                this.message = 'No has introcido el minimo pedido';
                this.color = 'error';
            }else if(!this.restaurant.address){
                this.notification = true;
                this.message = 'No has introcido la direccion';
                this.color = 'error';
            }else if(!this.restaurant.city_id){
                this.notification = true;
                this.message = 'No has selecionado la ciudad';
                this.color = 'error';
            }else {
                let data = {id: this.param, name: this.restaurant.name, descripcion: this.restaurant.description, img: this.restaurant.img, min_price: this.restaurant.min_price, address: this.restaurant.address, city: this.restaurant.city_id }
                axios.post('/api/restaurants/EditRestaurant', data)
                .then(response => {
                        this.notification = true;
                        this.message = response.data[0];
                        this.color = 'success';
                        window.location = '/'
                }).catch(error => {
                    console.log(error)
                }) 
            }
        }
    }
}
</script>