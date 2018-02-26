new Vue({ 
	el: '#app',
        data: {
            login: '',
            password: '',
            email: '',
            el: false
           },
       	});

Vue.component ('app-login',
	{		template: '<v-text-field label="Login" v-model="login" :error-messages="loginErrors" :counter="10" @input="$v.login.$touch()" @blur="$v.login.$touch()"required></v-text-field>'
	});
Vue.component ('app-password',
{			template: '<v-text-field label="Password" v-model="password" type="password" :error-messages="emailErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()"required></v-text-field>'
});
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
