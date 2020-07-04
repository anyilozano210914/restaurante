const Router = [
    { path: '/', name: 'home', component: () => import('../views/Home.vue') },
    { path: '/CreateRestaurant', name: 'restaurante', component: () => import('../components/CreateRestaurants') },
    { path: '/EditRestaurant/:id', name: 'restaurante', component: () => import('../components/EditRestaurant') },
    { path: '/reserve/:id', name: 'reservas', component: () => import('../components/Reservas.vue') },
    { path: '/EditReservas/:id', name: 'restaurante', component: () => import('../components/EditReserva') },
    { path: '/CreateReserva', name: 'restaurante', component: () => import('../components/CreateReservas.vue') },

]
export default Router;