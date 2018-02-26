const Foo = { template: '<v-card><v-card-text>Привет, меня зовут Даниил, мне 20 лет. В данный момент я учусь в СПБГуТ на 2 курсе. Вертской и в целом сайтостроением увлекаюсь с 8го класса. Делал множество простецких сайтов. Последнее, что делал одностраничник http://kypiteplicu.ru/ . Очень хотелось бы работать в вашей команде :)</v-card-text></v-card>' }
const Bar = { template: '<v-switch dark="true" :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></v-switch>' }
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
            loginErrors: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            password: '',
            email: '',
            emailErrors: [
              v => !!v || 'Email is required',
              v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            e1: true,
            about: ''
           },
        router
       	}).$mount('#app'); 
Vue.component('switch1', 
{
    data () {
      return {
        switch1: ''
      }
    },
  template: '<v-container fluid><v-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></v-switch></v-container>'
});
Vue.component ('app-login',
	{		
    template: '<v-text-field label="Login" v-model="login" :error-messages="loginErrors" :counter="10" @input="$v.login.$touch()" @blur="$v.login.$touch()"required></v-text-field>'
	});
Vue.component ('app-password',
{	
  props: ['switch1'],	
  template: '<v-text-field label="Password" v-model="password" :error-messages="emailErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()"required :text=" switch1 ? 'password' : 'text'"></v-text-field>',
});


