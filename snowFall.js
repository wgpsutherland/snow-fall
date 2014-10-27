$(function() {
    drift();
});

function drift() {
    var imageSource = "triangle.png";
    createTriangle(imageSource);
}

function createTriangle(source) {

    var selectedClass = $('.snow-field');
    var id = Math.floor(Math.random()*1000); // assigns an id that is good enough to be random
    var width = Math.floor(Math.random()*50)+50; // random width for the particle png
    var opacity = Math.random(); // random opacity value for the triangle
    var leftPosition = Math.floor(Math.random()*selectedClass.width()); // spreads the triangles randomly out across the width of the container

    var string = "<img class='particle' id="+id+" src="+source+" style='" +
        "width:"+width+"px; " +
        "opacity:"+opacity+"; " +
        "position:absolute; " +
        "left:"+leftPosition+"px;" +
        "top:-"+width+"px;" +
        "'>"

    selectedClass.append(string);

    setTimeout(function() { // removes the triangle after 7 seconds
        $('#'+id).remove()
    }, 7000);

    setTimeout(function() { // creates a new triangle every 1 second
        createTriangle(source);
    }, 300);
}
