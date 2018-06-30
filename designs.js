// Select color input
// Select size input

// When the size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here! 
$("#pixel_canvas").html("");
const height = $("#input_height").val();
const width = $("#input_width").val();
for (i = 0; i < height; i++) {
  $("#pixel_canvas").append("<tr></tr>");
  for (j = 0; j < width; j++) {
    $("#pixel_canvas")
      .children()
      .last()
      .append("<td></td>");
  }
}
}

// When the user clicks the 'submit' button, call makeGrid function
$("form#sizePicker").on("submit", function(evt) {
evt.preventDefault();
makeGrid();
});

// When the user clicks with selected color on any cell in grid, color it with the chosen color
$("#pixel_canvas").on("click", "td", function() {
$(this).css("background-color", $("#colorPicker").val());
});