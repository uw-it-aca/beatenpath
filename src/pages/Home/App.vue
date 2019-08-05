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

                <!-- vue implementation of dropdown menu -->
                <select v-model="selected" class="form-control">
                    <option value="" disabled>Select a degree program</option>
                    <option v-for="option in options" v-bind:value="option">
                        {{ option.degree }}
                    </option>
                </select>

            </div>
        </div>
    </div>

    <!-- display to start with... selected object is empty -->
    <div v-if="Object.keys(selected).length === 0" class="card">
        <div class="card-body">
            <h3 class="card-title">Welcome to Beaten Paths</h3>
            <div class="card-text">
                <p>Thanks for your participation in reviewing the prototype for this new tool! <strong>Select a degree program from the dropdown menu above to get started.</strong></p>
                <div class="bp-description"><p>Students often make uninformed decisions about the sequence of courses they take during their academic careers, which may result in winding paths. This tool addresses this problem by showing advisers the most common paths (Beaten Paths) graduates took on their way to a degree. Inspired by the successful paths of graduates, advisers can use this information to plan a sequence of courses for a students that best meet their needs and interests.</p></div>
                <p><strong>Your feedback is important to help UW-IT build the best tool possible.</strong> After you've had a chance to review the data provided, please <strong>answer a short survey</strong> about your experience. The survey form
                    can be accessed from the blue "Share Feedback" button below at any time.</p>

            </div>
        </div>
    </div>

    <!-- if a filepath was returned -->
    <img v-if="selected.filepath !== null" v-bind:src="selected.filepath" />
    <!-- else, show the no image message -->
    <div v-else class='alert alert-warning' role='alert'>
        <p>The selected dataset for <strong>{{selected.degree}}</strong> is unavailable. Datasets for degree programs with fewer than five graduates are not provided to ensure reliable statistics and privacy for students.</p>
        <p>Please select a different degree program.</p>
    </div>


    <a class="btn btn-primary mt-4" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">
        Share Feedback
    </a>
    <div class="collapse" id="collapseForm">
        <div class="card card-body">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6Ep_I67q9YiVP689CKKFPxliLrWS4T7gXAoPQaDUxEZf-ow/viewform?embedded=true" width="640" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
            selected: '',
            options: []
        }
    },

    methods: {

        getPrograms: function() {
            // get program data and pass to options object
            $.getJSON({
                url: "./data.json",
                success: results => this.options = results
            });
        },

    },

    mounted() {

        this.getPrograms()

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
