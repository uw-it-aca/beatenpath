<template>
  <div id="app">

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 id="degree-title" class="h2" style="display:none;"></h2>
        <select id="degree-select" class="form-control w-75">
            <option>Loading...</option>
        </select>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
        </div>
    </div>

    <div class="my-4">
        <!-- <img src="#" alt="" title="test" /> -->
        <img src="/assets/INFO_20-BSInformatics_InformationArchitecture.png" alt="INFO_20-BSInformatics_ InformationArchitecture" width="900" title="" />
    </div>
    <a class="btn btn-primary" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">
      Submit Feedback
    </a>
    <div class="collapse" id="collapseForm">
      <div class="card card-body">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6Ep_I67q9YiVP689CKKFPxliLrWS4T7gXAoPQaDUxEZf-ow/viewform?embedded=true" width="640" height="453" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    </div>


    <div><img alt="Vue logo" src="@/static/img/logo.png"></div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyCard/>
  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MyCard from '@/components/MyCard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyCard
  }
}
</script>

<style lang="scss">
@import '@/static/css/_mixins.scss';
@import '@/static/css/_variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
