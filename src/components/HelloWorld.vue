<template>

  <div>

    <b-card class="mb-3">
       <h1>{{ msg }}</h1>
       <p>hello world!</p>
     </b-card>

     <b-card title="Card title" sub-title="Card subtitle" class="mb-3">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>

  </div>

</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '@/static/css/_mixins.scss';
@import '@/static/css/_variables.scss';

h3 {
  margin: 40px 0 0;
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
  color: $color-red;
}
</style>
