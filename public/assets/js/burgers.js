// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(".eatingBurger").on("submit", function(event){
  event.preventDefault();
  
  var id = $(this).attr("id")
  var devouredObject = {
    devoured:true
  } 
  // Send the PUT request.
  $.ajax("/api/burger/" + id, {
    type: "PUT",
    data: devouredObject
  }).then(
    function() {
      console.log("changed devoured to");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".createBurger").on("submit", function(event){
  event.preventDefault();

  var newBurger ={
    burger_name: $("#bg").val().trim(),
    devoured: false
  };
 
  // // Send the PUT request.
  $.ajax("/api/burger/", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("I've added a new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});



// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("newDevoured");
  
//       var newDevouredState = {
//         devoured: newDevoured
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burger/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           console.log("changed devoured to", newDevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         burger_name: $("#bg").val().trim(),
//         devoured: $("[burger_name=devoured]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burger", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//   });
  