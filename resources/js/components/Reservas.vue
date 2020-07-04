<template>
    <div>
        <v-container>
            <v-btn color="pink" @click="goToCreateReservas">crear</v-btn>
            <v-data-table :headers="headers" :items="reservas" :items-per-page="5" class="elevation-1">
                <template v-slot:item.action="{ item }">
                    <v-btn color="primary" x-small @click="goToEdit(item)" v-on="on" v-bind="attrs">Modificar Reserva</v-btn>
                    <v-btn color="blue" x-small @click="deleteReservas(item)">
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
        reservas: [],
        headers: [
            { text: 'id', value: 'id' },
            { text: 'nombre', value: 'client' },
            { text: 'documento', value: 'documento' },
            { text: 'fecha', value: 'fecha' },
            { text: 'hora', value: 'hora' },
            { text: 'Acciones', value: 'action' }
        ],
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        fab:false,

    }),
    created() {
        this.getReservas();
    },
    methods: {
        getReservas(){
            axios.get('/api/reservas/getReservas')
            .then(res => {
                this.reservas = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        goToCreateReservas(){
            this.$router.push('/CreateReserva');
        },
        deleteReservas(item){
            axios.delete('/api/reservas/deleteReservas/' + item.id)
            .then(res => {
                this.notification = true;
                this.message = res.data;
                this.color = 'success';
                this.getReservas()
            }).catch(err => {
                this.notification = true;
                this.message = 'Ocurrio un error al momento de eliminar las reservas.'
                this.color = 'error';
            })
        },
        goToEdit(item){ 
            this.$router.push('/editReservas/'+item.id)
        }
    }
}
</script>