<template>
  <div id="app">

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 id="degree-title" class="h2" style="display:none;"></h2>
        <select id="degree-select" class="form-control w-75">
            <option>Loading...</option>
        </select>
        <div class="btn-toolbar mb-2 mb-md-0">
            <!-- <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
            </div> -->
        </div>
    </div>

    <div id="filepathPng" class="my-4">
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Welcome to Beaten Path</h5>
          <p class="card-text">
            <ul class="list-unstyled">
                <li>Thanks for your participation in reviewing the prototype for this new tool! </li>
                <li><strong>Your feedback is important to help UW-IT build the best tool possible.</strong></li>
                <li>After you've had a chance to review the data provided, please <strong>answer a short survey</strong> about your experience. The survey form can be accessed from the blue "Share Feedback" button below at any time.</li>
                <li>Please begin by selecting a degree program from the dropdown menu above.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <a class="btn btn-primary" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">
      Share Feedback
    </a>
    <div class="collapse" id="collapseForm">
      <div class="card card-body">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6Ep_I67q9YiVP689CKKFPxliLrWS4T7gXAoPQaDUxEZf-ow/viewform?embedded=true" width="640" height="453" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    </div>

    <!--<div><img alt="Vue logo" src="@/static/img/logo.png"></div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyCard/>-->

  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MyCard from '@/components/MyCard.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    //MyCard
  },

  mounted: function() {

    // populate degree dropdown menu
    $.getJSON('/data.json', function (data) {
        // Work with your JSON data here..
        console.log("degree " + data[0].degree);
        console.log("filepath " + data[0].filepath)
        // Populate drop down menu with degrees from JSON
        var $degreeSelector = $("#degree-select");
        $degreeSelector.empty();
        $degreeSelector.append("<option>Select a degree program</option>")
        $.each(data, function(key, value) {
            $degreeSelector.append("<option>" + value.degree + "</option>")
          });
          $('#degree-select').change(function(){
            var optionSelected = this.value;
            for (var i = 0; i < data.length; i++){
                if ((data[i].degree == optionSelected) && (data[i].filepath != null)) {
                  document.getElementById("filepathPng").innerHTML = "<img src=" + data[i].filepath + " width='900'>";
                  break;
                }
                else {
                  document.getElementById("filepathPng").innerHTML = "<div class='alert alert-warning w-75' role='alert'>The selected dataset for <strong>" + optionSelected + "</strong> is not currently available. Please select a different degree program.</div>";

                }
              }
          });
    });//.getJSON
  }//mounted
}//export
  </script>

<style lang="scss">
@import '@/static/css/_mixins.scss';
@import '@/static/css/_variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #333;
  margin-top:1.3em;
  font-size: 1.2rem;
}
</style>
