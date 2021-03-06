const mainContainer = document.getElementById("main-container")
const equationField = document.getElementById("equation-field")
const solveButton = document.getElementById("solve-button")
const solutionDisplay = document.getElementById("solution-display")

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    let equation = equationField.value.split(" ")
    solutionDisplay.innerHTML = createEquationComponent(equation)
    // Write your code here 👇
})

function solve(num1, operator, num2){
    let n1 = parseInt(num1)
    let n2 = parseInt(num2)
    return operator === "+" ? `<div>${addition(n1,n2)}</div>`:
           operator === "-" ? `<div>${subtaction(n1,n2)}</div>`:
           operator === "/" ? `<div>${division(n1,n2)}</div>`:
           operator === "*" ? `<div>${multiplication(n1,n2)}</div>`:
           "Sorry, I can't do that"
}

function createEquationComponent(equation){
   return `
      <div class="equation-component">
         ${solve(...equation)}
      </div>
   `
}

function addition (n1, n2){
   return `
      <span>${n1}</span>
      <span>+</span>
      <span>${n2}</span>
      <span>=</span>
      <span>${n1+n2}</span>
   `
}

function subtaction (n1, n2){
   return `
      <span>${n1}</span>
      <span>-</span>
      <span>${n2}</span>
      <span>=</span>
      <span>${n1-n2}</span>
   `
}

function multiplication (n1, n2){
   return `
      <span>${n1}</span>
      <span>*</span>
      <span>${n2}</span>
      <span>=</span>
      <span>${n1*n2}</span>
   `
}

function divison (n1, n2){
   return `
      <span>${n1}</span>
      <span>/</span>
      <span>${n2}</span>
      <span>=</span>
      <span>${n1/n2}</span>
   `
}

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/