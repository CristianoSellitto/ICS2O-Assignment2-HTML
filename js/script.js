// Cristiano
// ICS2O-Assignment2-HTML
// March 11 2022

/**
 * Calculates area for a triangle.
 */
function calculateArea(elementid, base, height) {
  if (elementid != "triangle3answer") {
    document.getElementById(elementid).innerHTML = "<p>The area of this triangle is " + (base * height / 2) + "cm²</p>" 
  } else {
    const basecustom = parseInt(document.getElementById("basecustom").value)
    const heightcustom = parseInt(document.getElementById("heightcustom").value)
    document.getElementById(elementid).innerHTML = "<p>The area of this triangle is " + (basecustom * heightcustom / 2) + "cm²</p>" 
  }
}
