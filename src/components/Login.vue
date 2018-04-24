<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 justify-content offset-xs4>
        <v-card class="pa-2" tile>
          <v-form v-model="valid">
            <v-text-field
              label="用户名"
              v-model="name"
              :rules="nameRules"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              label="密码"
              v-model="password"
              required
            ></v-text-field>
            <v-btn color="primary" depressed block outline
              :loading='loading'
              @click="loading = true;"
              :disabled='loading'>
              登录
              <span slot="loader">正在登录...</span>
            </v-btn>
            <v-btn color="success" depressed block>注册</v-btn>
            <span class="grey--text">找回密码</span>
          </v-form>
        </v-card>
      </v-flex>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || '用户名必填项',
        v => v.length <= 10 || '用户名长度小于10',
      ],
      password: '',
      loading: false,
    };
  },
  create: {
    // console.log(JSON.stringfy(route));
  },
  watch: {
    loading() {
      setTimeout(() => { this.loading = false; }, 3000);
      if (this.name === 'test' && this.password === 'test') {
        console.log('auth success');
        console.log(this.$route.query.redirect);
        this.$store.commit('setUserInfo', 'test');
        this.$router.push({ path: this.$route.query.redirect });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
