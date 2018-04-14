<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex
          v-bind="{ [`xs${card.flex}`]: true }"
          v-for="card in cards"
          :key="card.title">
            <v-card>
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex d-flex xs1 align-center align-content-center justify-center>
                    <span class="rank">{{ card.rank }}</span>
                  </v-flex>
                  <v-flex xs1 align-center flexbox style="font-weight: bold;
    font-size: small;">
                    <div class="arrow up login-required access-required"
                     data-event-action="upvote" role="button"
                     aria-label="好評" tabindex="0"></div>
                    <!--<div class="score dislikes" title="10321">10.3k</div>-->
                    <div class="score unvoted" title="10322">10.3k</div>
                    <!--<div class="score likes" title="10323">10.3k</div>-->
                    <div class="arrow down login-required access-required"
                     data-event-action="downvote" role="button"
                     aria-label="負評" tabindex="0"></div>
                  </v-flex>
                  <v-flex xs11 align-end flexbox>
                    <div class="headline gray--text text-xs-left" v-text="card.title"></div>
                    <div class="gray--text text-xs-left" v-text="card.subtitle"></div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        {
          title: 'tianjin',
          subtitle: 'nankai',
          flex: 8,
          rank: 1,
        },
        {
          title: 'beijing',
          subtitle: 'haidian',
          flex: 8,
          rank: 2,
        },
        {
          title: 'shanghai',
          subtile: 'waitan',
          flex: 8,
          rank: 3,
        },
      ],
    };
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
.rank {
  /*float: left;*/
  /*margin-top: 15px;*/
  color: #c6c6c6;
  font-family: arial;
  font-size: medium;
  text-align: center;
  overflow: hidden;
}
.arrow {
  margin: 2px 0px 0px 0px;
  width: 100%;
  height: 14px;
  display: block;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  width: 15px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
}
.arrow.up {
    background-image: url("../assets/sprite-reddit.png");
    background-position: -42px -1647px;
    background-repeat: no-repeat;
}
.arrow.down {
    background-image: url("../assets/sprite-reddit.png");
    background-position: 0px -1647px;
    background-repeat: no-repeat;
}
.score {
    text-align: center;
    color: #c6c6c6;
}

</style>
