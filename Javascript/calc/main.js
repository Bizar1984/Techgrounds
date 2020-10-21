class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.readyToReset = false;
        
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        
    }


    delete() {
        // chopping off the last character
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
        
    }

    appendNumber(number) {
        // if the first "number" is (.) then add a zero
        // this is done so the minus sign can be added to numbers which START with a dot
        if (number === '.') {
            this.currentOperand = '0' + this.currentOperand.toString();
        } 

        this.currentOperand = this.currentOperand.toString() + number.toString();
        
        // number is the single number pressed at any given moment, this.currentOperand the entire STRING
    }

    addNegative() {
        if (this.currentOperand === '') return
        this.currentOperand = '-' + this.currentOperand.toString()
        // a small miracle occured, I actually did this myself!
    }

    chooseOperation(operation) {
        // blocking further operations after one is selected
        if (this.currentOperand === '') return
        
        // check if the previous operand already existed allowing for multiple calculations
        if (this.previousOperand != '') {
            this.compute()
        }
        this.operation = operation;
        // AFTER selected an operator (+, -, *, /) currentOperand is assigned to previousOperand
        this.previousOperand = this.currentOperand
        // currentOperand reset
        this.currentOperand = ''


    }

    compute() {
        // the result (computation) has to be a let since it's a dynamic variable
        let computation

        // turning the current- and previousOperands into actual numbers
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        
         // don't compute anything without having two numbers
        if (isNaN(prev) || isNaN(current)) return
        
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }

        // AFTER an answer is computed readyToReset becomes true
        this.readyToReset = true;
        // AFTER an answer is computed the result (computation) is assigned to currentOperand
        this.currentOperand = computation
        // getting ready for NEW input
        this.previousOperand = ''
        this.operation = undefined

    }

    // this function is called a helper function
    getDisplayNumber(number) {
        
        // whatever the number, convert to string
        const stringNumber = number.toString()
        
        // split up the integers and the decimals, split method in proper action
        // split everything BEFORE the dot
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        // split everything AFTER the dot, notice typeof decimals is string
        const decimalDigits = stringNumber.split('.')[1]
        

        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''

        } else {
            // some nice formatting to the string
            integerDisplay = integerDigits.toLocaleString('english', {
                // only whole numbers for the integers
                maximumFractionDigits: 0
            })
        }

        if (decimalDigits != null) {
            // if decimal digits exist return both with a dot in between
            return `${integerDisplay}.${decimalDigits}`
            // the above is called a template literal, in this case a string with two expressions($) inside of it
        } else {
            // if no decimals exist return the integers
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
            // assign the result of the helper function to currentOperandTextElement.innerText
            this.getDisplayNumber(this.currentOperand)
            // only if an operation is entered(+, -, *, /) display number + operation
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
        } else {
            // if no operation is entered don't display anything as previousOperandTextElement
            this.previousOperandTextElement.innerText = ''
        }
    }
}
// end of class definition!



// declaring variables and attaching the variables to the different buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

// trying something myself actually
const plusMinusButton = document.querySelector('[data-plus-minus]')

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

// output screen
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');
// end of variables section!



// creating a new INSTANCE of the class calculator
const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement)

// function for the operands
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
         if (calculator.previousOperand === "" &&
             calculator.currentOperand !== "" &&
             // ready to reset and overwrite becomes true when there is ONLY a current operand
             calculator.readyToReset) {
             calculator.currentOperand = "";
             calculator.readyToReset = false;
         }
        // when a button is clicked the functions below will be CALLED
        // append the character which belongs to the button (in the HTML- file)
        calculator.appendNumber(button.innerText)
        // call the updateDisplay() function defined in the class
        calculator.updateDisplay()

    })
})

// function for the operations
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})

// function for the equals (=) button
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

// function for the AC button
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

// function for the DEL button
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

// function for the (+/-) button
plusMinusButton.addEventListener('click', button => {
    calculator.addNegative(button.innerText)
    calculator.updateDisplay()
})
