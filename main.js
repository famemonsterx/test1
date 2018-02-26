const Foo = { template: '<v-card><v-card-text>Привет, меня зовут Даниил, мне 20 лет. В данный момент я учусь в СПБГуТ на 2 курсе. Вертской и в целом сайтостроением увлекаюсь с 8го класса. Делал множество простецких сайтов. Последнее, что делал одностраничник http://kypiteplicu.ru/ . Очень хотелось бы работать в вашей команде :)</v-card-text></v-card>' }
const Bar = { template: '<v-card><v-card-text>bar</v-card-text></v-card>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes
})
new Vue({ 
	el: '#app',
        data: {
            login: '',
            password: '',
            email: '',
            e1: true,
            about: ''
           },
        router
       	}).$mount('#app'); 


Vue.component ('app-login',
	{		template: '<v-text-field label="Login" v-model="login" :error-messages="loginErrors" :counter="10" @input="$v.login.$touch()" @blur="$v.login.$touch()"required></v-text-field>'
	});
Vue.component ('app-password',
{			template: '<v-text-field label="Password" v-model="password" type="password" :error-messages="emailErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()"required></v-text-field>'
});






