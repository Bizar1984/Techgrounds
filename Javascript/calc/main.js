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
        // if number starts with . or it's included in the currentOperand, return
        // don't allow for more dots when the if statement is true
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
        
        // number is the single number pressed, this.currentOperand the entire STRING


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
        let computation
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

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''

        } else {
            integerDisplay = integerDigits.toLocaleString('english', {
                maximumFractionDigits: 0
            })
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

// output screen
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement)

// function for the operands
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
         if (calculator.previousOperand === "" &&
             calculator.currentOperand !== "" &&
             calculator.readyToReset) {
             calculator.currentOperand = "";
             calculator.readyToReset = false;
         }
        
        calculator.appendNumber(button.innerText)
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

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
