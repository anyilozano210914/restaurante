<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="name" label="Nombre del restaurante"></v-text-field>
                    <v-text-field v-model="descripcion" label="Descripción"></v-text-field>
                    <v-text-field v-model="img" label="logo"></v-text-field>
                    <v-text-field v-model="address" label="Direccion"></v-text-field>
                    <v-select :items="cities" item-text="name" item-value="id" v-model="city_id" label="ciudad"></v-select>
                    <v-text-field v-model="min_price" label="Minimo Pedido" type="number"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="SaveRestaurant">Crear</v-btn>
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
        descripcion: '',
        img: '',
        min_price: '',
        address: '',
        city_id: '',
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        cities: []
    }),
    mounted(){
        this.getCities();
    },
    methods:{
        goToBack(){
            this.$router.push('/')
        },

        SaveRestaurant(){
            if(!this.name){
                this.notification = true;
                this.message = 'No has introcido el nombre del restaurante';
                this.color = 'error';
            }else if(!this.descripcion){
                this.notification = true;
                this.message = 'No has introcido la descripcion';
                this.color = 'error';
            }else if(!this.img){
                this.notification = true;
                this.message = 'No has introcido la imagen  del restaurante';
                this.color = 'error';
            }else if(!this.min_price){
                this.notification = true;
                this.message = 'No has introcido el minimo pedido';
                this.color = 'error';
            }else if(!this.address){
                this.notification = true;
                this.message = 'No has introcido la direccion';
                this.color = 'error';
            }else if(!this.city_id){
                this.notification = true;
                this.message = 'No has selecionado la ciudad';
                this.color = 'error';
            }else {
                let data = { name: this.name, descripcion: this.descripcion, img: this.img, min_price: this.min_price, address: this.address, city: this.city_id }
                axios.post('/api/restaurants/SaveRestaurant', data)
                .then(response => {
                    // if(response.data.transaction.status == true){
                        // this.notification = true;
                        // this.message = response.data.data[0];
                        // this.color = 'success';
                        window.location = '/'
                    // }else {
                    //     this.notification = true;
                    //     this.message = 'No se proceso exitosamente el registro';
                    //     this.color = 'error'
                    // }
                }).catch(error => {
                    console.log(error)
                }) 
            }
        },
        getCities(){
            axios.get('/api/restaurants/getCities')
            .then(res => {
                this.cities = res.data
            }).catch(err => {
                console.log(err)
            })
        },
    }
}
</script>