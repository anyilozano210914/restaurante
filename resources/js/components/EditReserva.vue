<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" ref="form">
                    <v-text-field v-model="reserva.client" label="Cliente"></v-text-field>
                    <v-text-field v-model="reserva.documento" label="Documento"></v-text-field>
                    <v-text-field v-model="reserva.fecha" label="Fecha"></v-text-field>
                    <v-text-field v-model="reserva.hora" label="Hora"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="EditReservas">Editar</v-btn>
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
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        reservas: [],

    }),
    mounted(){
        this.getReservas();
        this.param = this.$route.params.id
    },
    computed: {
        reserva: function(){
            let reservas = {}
            this.reservas.map(item => {
                if(item.id == this.param){
                    reservas = item
                }
            })
            return reservas
        }
    },
    methods:{
        getReservas(){
            axios.get('/api/reservas/getReservas')
            .then(res => {
                this.reservas = res.data
            }).catch(error => {
                console.log(error)
            })
        },

        goToBack(){
            this.$router.push('/')
        },

        EditReservas(){
            if(!this.reserva.client){
                this.notification = true;
                this.message = 'No has introcido el nombre del cliente';
                this.color = 'error';
            }else if(!this.reserva.documento){
                this.notification = true;
                this.message = 'No has introcido el docuemento';
                this.color = 'error';
            }else if(!this.reserva.fecha){
                this.notification = true;
                this.message = 'No has introcido la fecha';
                this.color = 'error';
            }else if(!this.reserva.hora){
                this.notification = true;
                this.message = 'No has introcido la hora';
                this.color = 'error';
            }else {
                let data = {id: this.param, client: this.reserva.client, documento: this.reserva.documento, fecha: this.reserva.fecha, hora: this.reserva.hora }
                axios.post('/api/reservas/EditReservas', data)
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