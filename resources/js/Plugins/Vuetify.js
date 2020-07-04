import vue from 'vue';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';

vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: colors.pink,
                secondary: colors.blue
            }
        }
    }
});
