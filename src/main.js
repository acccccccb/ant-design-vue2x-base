import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import store from './store';

require('./mock/index.js');

const app = createApp(App);

app.use(store).use(Antd).use(router).mount('#app');
app.config.productionTip = false;
app.use(Button);
