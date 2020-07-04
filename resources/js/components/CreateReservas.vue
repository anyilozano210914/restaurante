<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="client" label="Nombre del cliente"></v-text-field>
                    <v-text-field v-model="document" label="documento"></v-text-field>
                    <v-text-field v-model="fecha" label="fecha"></v-text-field>
                    <v-text-field v-model="hora" label="hora"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="SaveReserva">Crear</v-btn>
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
        client: '',
        document: '',
        fecha: '',
        hora: '',
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        cities: []
    }),
    methods:{
        goToBack(){
            this.$router.push('/')
        },

        SaveReserva(){
            if(!this.client){
                this.notification = true;
                this.message = 'No has introcido el nombre del cliente';
                this.color = 'error';
            }else if(!this.document){
                this.notification = true;
                this.message = 'No has introcido el documento del cliente';
                this.color = 'error';
            }else if(!this.fecha){
                this.notification = true;
                this.message = 'No has introcido la fecha de la reserva';
                this.color = 'error';
            }else if(!this.hora){
                this.notification = true;
                this.message = 'No has introcido la hora de la reserva';
                this.color = 'error';
            }else {
                let data = { client: this.client, documento: this.document, fecha: this.fecha, hora: this.hora }
                axios.post('/api/reservas/SaveReservas', data)
                .then(response => {
                        this.notification = true;
                        this.message = response.data.data[0];
                        this.color = 'success';
                        window.location = '/'
                }).catch(error => {
                    console.log(error)
                }) 
            }
        },
    }
}
</script>