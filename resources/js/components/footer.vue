<template>
    <div>
        <v-footer padless>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Anyi Lozano</strong>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
