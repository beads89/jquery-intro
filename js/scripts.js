$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a heading.");
    alert("No really, this is a heading.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});