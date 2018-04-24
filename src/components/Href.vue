<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <v-text-field placeholder='请输入网址...' required autofocus v-model='href'></v-text-field>
      <v-text-field placeholder='博客简介' multi-line box textarea v-model='description'></v-text-field>
      <v-btn color='success' outline block @click.prevent='digg'>DIGG</v-btn>
    </v-flex>
    <router-view></router-view>
  </v-layout>
</template>

<script>
export default {
  name: 'Href',
  data() {
    return {
      href: '',
      description: '',
    };
  },
  methods: {
    digg: function() {
      console.log("digg click");
    }
  }
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
