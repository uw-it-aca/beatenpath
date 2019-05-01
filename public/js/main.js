$(document).ready(function(){

  $.getJSON('/data.json', function (data) {
      // Work with your JSON data here..
      console.log("degree " + data[0].degree);
      console.log("filepath " + data[0].filepath)
      // Populate drop down menu with degrees from JSON
      var $degreeSelector = $("#degree-select");
      $degreeSelector.empty();
      $degreeSelector.append("<option selected>Select a degree program</option>")
      $.each(data, function(key, value) {
          $degreeSelector.append("<option>" + value.degree + "</option>")
      });
  });

});
