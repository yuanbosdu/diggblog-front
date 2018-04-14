<template>
  <v-app>
    <v-toolbar app>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 sm12 md12 text-xs-center black--text>
          <h2>
            <strong>DiggBlog</strong>
          </h2>
        </v-flex>
        <v-flex xs12 sm12 md12 text-xs-center gray--text>
          <em>"帮你发现更好的技术博文"</em>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-layout row justify-space-between>
        <v-flex xs12 text-xs-center black--text>
          Powered By <em>Vue + Django</em>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
