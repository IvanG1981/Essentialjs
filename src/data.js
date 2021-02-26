export const data = [
  {
    id: 1,
    question: 'What is JavaScript and what is EcmaScript?',
    answer: "ECMAScript is a Standard for scripting languages such as JavaScript, JScript, etc. It is a trademark scripting language specification. JavaScript is a language based on ECMAScript. A standard for scripting languages like JavaScript, JScript is ECMAScript.",
    link:"https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/"
  },
  {
    id: 2,
    question: 'Compare real DOM and Virual DOM',
    answer: "Virtual DOM is a representation of real DOM. Whenever states are changed new virtual DOM will be created and will be compared with previous virtual DOM. And then DOM operations will be applied for those specific changes. The cost of virtual DOM is calculating diff with another virtual DOM. For a big project with lots of components, diff calculation will take time.",
    link:"https://www.codecademy.com/articles/react-virtual-dom#:~:text=A%20virtual%20DOM%20object%20has,because%20nothing%20gets%20drawn%20onscreen."
  },
  {
    id: 3,
    question: 'What is Hoisting',
    answer:"The variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.",
    link:"https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
  },
  {
    id: 4,
    question: 'What is Scope',
    answer:"The scope manages variables accesability. The code block of if, for, while statements also create a scope. A code block does not create a scope for var variables, but a function body does. In JavaScript, scopes are created by code blocks, functions, modules.",
    link:"https://dmitripavlutin.com/javascript-scope/#:~:text=In%20JavaScript%2C%20scopes%20are%20created,variables%20of%20an%20outer%20scope."
  },
  {
    id: 5,
    question: 'What is Lexical Scope',
    answer:"Or Static scoping, means that the accessibility of variables in determined statically by the position of the variables within the nested function scopes: Lexical scope consists of outer scopes determined statically",
    link:"https://dmitripavlutin.com/javascript-scope/#:~:text=In%20JavaScript%2C%20scopes%20are%20created,variables%20of%20an%20outer%20scope."
  },
  {
    id: 6,
    question: 'What is Closure',
    answer:"Any function, no matter the place where is being executed, can access the variables of its lexical scope. In other words, a closure remembers the variables from its lexical scope, even being executed outside of it.",
    link:"https://dmitripavlutin.com/simple-explanation-of-javascript-closures/#4-the-closure"
  },
  {
    id: 7,
    question: 'What is the difference between == and === ?',
    answer:"When we use the == operator, it only checks whether it has the same value. However, when we use the === operator, both value and type should be the same",
    link:"https://dev.to/uma/the-difference-between-javascript-and-comparison-operators-2j78"
  },
  {
    id: 8,
    question: 'What are the phases in the lifecycle of a component',
    answer: 'Initialization, mounting, updating, unmounting',
    link: "'https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/#:~:text=Components%20are%20created%20(mounted%20on,phases%20of%20a%20component's%20life.'"
  },
  {
    id: 9,
    question: 'High Order Component',
    answer: 'Allows to pass props to specific components avoiding prop drilling to do so.',
    link: "https://css-tricks.com/what-are-higher-order-components-in-react/"
  },
  {
    id: 10,
    question: 'Memoization',
    answer: '',
    link: ""
  },
  {
    id: 11,
    question: 'Event loop in Node.js',
    answer: '',
    link: ""
  },
  {
    id: 12,
    question: 'DOM',
    answer: "The DOM is a representation of the HTML document. With the HTML DOM, JavaScript can access and change all the elements of an HTML document. The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web",
    link:"https://www.w3schools.com/js/js_htmldom.asp"
  },
  {
    id: 13,
    question: 'VDOM',
    answer: "Virtual DOM is a representation of the DOM. The creation of real dom will be handled by browsers. Modern frameworks like react, vue, etc.., will create a tree of elements similar to real dom in memory this is called virtual DOM. By using virtual DOM, we can find out what is changed and with that, we can apply only those changes to real DOM instead of replacing entire DOM.",
    link:"https://dev.to/karthikraja34/what-is-virtual-dom-and-why-is-it-faster-14p9"
  },
  {
    id: 14,
    question: 'Hooks',
    answer: "They let you use state and other React features without writing a class. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes",
    link:""
  },





]
