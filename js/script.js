// Cristiano
// ICS2O-Assignment2-HTML
// March 11 2022


/**
 * Calculates area for a triangle.
 */
function calculateArea(elementid, length, width) {
  if (elementid != "triangle3answer") {
    document.getElementById(elementid).innerHTML = "<p>The area of this triangle is " + (length * width / 2) + "cm²</p>" 
  } else {
    const lengthcustom = parseInt(document.getElementById("lengthcustom").value)
    const widthcustom = parseInt(document.getElementById("widthcustom").value)
    document.getElementById(elementid).innerHTML = "<p>The area of this triangle is " + (lengthcustom * widthcustom / 2) + "cm²</p>" 
  }
}
