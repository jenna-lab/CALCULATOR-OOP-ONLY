class Calculator {
    constructor() {
      this.expression = '';
      this.display = document.getElementById('display');
      this.attachEvents();
    }
  
    appendValue(value) {
      this.expression += value;
      this.display.value = this.expression;
    }
  
    calculate() {
      try {
        const result = eval(this.expression);
        this.display.value = result;
        this.expression = '';
      } catch (error) {
        this.display.value = 'Syntax ERROR';
        this.expression = '';
      }
    }
  
    clearScreen() {
      this.display.value = '';
    }
  
    deleteLastInput() {
      this.display.value = this.display.value.slice(0, -1);
    }
  
    attachEvents() {
      document.querySelector('.one').addEventListener('click', () => this.appendValue('1'));
      document.querySelector('.zero').addEventListener('click', () => this.appendValue('0'));
      document.querySelector('.two').addEventListener('click', () => this.appendValue('2'));
      document.querySelector('.three').addEventListener('click', () => this.appendValue('3'));
      document.querySelector('.four').addEventListener('click', () => this.appendValue('4'));
      document.querySelector('.five').addEventListener('click', () => this.appendValue('5'));
      document.querySelector('.six').addEventListener('click', () => this.appendValue('6'));
      document.querySelector('.seven').addEventListener('click', () => this.appendValue('7'));
      document.querySelector('.eight').addEventListener('click', () => this.appendValue('8'));
      document.querySelector('.nine').addEventListener('click', () => this.appendValue('9'));
      document.querySelector('.plus').addEventListener('click', () => this.appendValue('+'));
      document.querySelector('.times').addEventListener('click', () => this.appendValue('*'));
      document.querySelector('.minus').addEventListener('click', () => this.appendValue('-'));
      document.querySelector('.period').addEventListener('click', () => this.appendValue('.'));
      document.querySelector('.slash').addEventListener('click', () => this.appendValue('/'));
      document.querySelector('.reset').addEventListener('click', () => this.clearScreen());
      document.querySelector('.equals').addEventListener('click', () => this.calculate());
      document.querySelector('.delete').addEventListener('click', () => this.deleteLastInput());
    }
  }
  
  const calculator = new Calculator();
  