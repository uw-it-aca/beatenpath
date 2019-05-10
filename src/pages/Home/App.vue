<template>
<div id="app">

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-4 border-bottom">
        <h2 id="degree-title" class="h2" style="display:none;"></h2>
        <div class="form-row">
            <div class="form-group col-md-2">
                <select class="form-control">
                    <option select>Seattle</option>
                    <option disabled>Tacoma</option>
                    <option disabled>Bothell</option>
                </select>
            </div>
            <div class="form-group col-md-10">
                <select id="degree-select" class="form-control">
                    <option>Loading...</option>
                </select>
            </div>
        </div>
    </div>


    <select v-model="selected">
        <option v-for="option in options" v-bind:value="option">
            {{ option.degree }}
        </option>
    </select>

    <div>Selected: {{ selected }}</div>

    <div v-if="Object.keys(selected).length === 0" class="card">
        <div class="card-body">
            <h3 class="card-title">Welcome to Beaten Path</h3>
            <div class="card-text">
                <p>Thanks for your participation in reviewing the prototype for this new tool! Select a degree program from the dropdown menu above to get started.</p>

                <p><strong>Your feedback is important to help UW-IT build the best tool possible.</strong> After you've had a chance to review the data provided, please <strong>answer a short survey</strong> about your experience. The survey form
                    can be accessed from the blue "Share Feedback" button below at any time.</p>

            </div>
        </div>
    </div>

    <img v-if="selected.filepath !== null" v-bind:src="selected.filepath" />
    <div v-else class='alert alert-warning' role='alert'>
        <p>The selected dataset for <strong>{{selected.degree}}</strong> is unavailable. Datasets for degree programs with fewer than five graduates are not provided to ensure reliable statistics and privacy for students.</p>
        <p>Please select a different degree program.</p>
    </div>

    <!--
    <div id="filepathPng" class="my-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Welcome to Beaten Path</h3>
                <div class="card-text">
                    <p>Thanks for your participation in reviewing the prototype for this new tool! Select a degree program from the dropdown menu above to get started.</p>

                    <p><strong>Your feedback is important to help UW-IT build the best tool possible.</strong> After you've had a chance to review the data provided, please <strong>answer a short survey</strong> about your experience. The survey form
                        can be accessed from the blue "Share Feedback" button below at any time.</p>

                </div>
            </div>
        </div>
    </div>
-->


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
//import HelloWorld from '@/components/HelloWorld.vue'
//import MyCard from '@/components/MyCard.vue'

export default {
    name: 'Home',
    components: {
        //HelloWorld,
        //MyCard
    },

    data() {
        return {
            selected: [],
            options: []
        }
    },

    methods: {

        getPrograms: function() {
            console.log("hellow world");
            $.getJSON({
                url: "./data.json",
                success: results => this.options = results
            });
        },

    },

    mounted() {

        this.getPrograms()

        // populate degree dropdown menu
        $.getJSON('./data.json', function(data) {
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
            $('#degree-select').change(function() {
                var optionSelected = this.value;
                for (var i = 0; i < data.length; i++) {
                    if ((data[i].degree == optionSelected) && (data[i].filepath != null)) {
                        document.getElementById("filepathPng").innerHTML = "<img src=" + data[i].filepath + " width='880'>";
                        break;
                    } else {
                        document.getElementById("filepathPng").innerHTML = "<div class='alert alert-warning' role='alert'><p>The selected dataset for <strong>" + optionSelected +
                            "</strong> is unavailable. Datasets for degree programs with fewer than five graduates are not provided to ensure reliable statistics and privacy for students.</p><p>Please select a different degree program.</p></div>";

                    }
                }
            });
        }); //.getJSON
    } //mounted
} //export
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
    margin-top: 1.3em;
    font-size: 1.2rem;
    max-width: 900px;
}
</style>
