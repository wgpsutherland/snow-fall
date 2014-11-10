$(function() { // on document load
    drift();
    parseAppearance();
});

function drift() {
    var imageSource = "triangle.png";
    createTriangle(imageSource);
}

function parseAppearance() { // parses the class names from the snow field div to do cool stuff

    var selectedClass = $(".snow-field");
    var classArray = selectedClass[0].className.split(' '); // splits the class names of the div into an array

    classArray.forEach(function(value) { // iterates through the classes on the snow div

        if(value.slice(0,5)==="snow-") { // extract only the snow classes

            var parsedValue = value.slice(5); // removes the "snow-" from the class name

            if(parsedValue[0]==="c") { // for colour
                bgColour(parsedValue.slice(2)); // sends just the colour across
            }
        }
    });
}

function bgColour(colour) { // background colour changing function

    var selectedClass = $(".snow-field");
    var valueOne = colour[0]+colour[1]; // 1st rgb value
    var valueTwo = colour[2]+colour[3]; // 2nd rgb value
    var valueThree = colour[4]+colour[5]; // 3rd rgb value

    var colourRGB = "rgb("+valueOne+","+valueTwo+","+valueThree+")"; // combines values into an rgb string

    selectedClass.css("background-color", colourRGB); // changes the background colour of the div
}

function createTriangle(source) {

    var selectedClass = $(".snow-field");
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
