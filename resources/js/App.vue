<template>
    <div>
        <v-app>
            <navbar-component></navbar-component>
            <transition name="component-fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <footer-component></footer-component>
        </v-app>
    </div>
</template>
<script>
import FooterComponent from './components/footer';
import NavbarComponent from './components/Navbar';
export default {
    components: {
        FooterComponent,
        NavbarComponent
    }
}
</script>