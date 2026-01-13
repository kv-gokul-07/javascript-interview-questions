
<---------- 22-01-2026 ------------->

1. React Batching

const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }, 1000)

    Output: 1    due to react batching
    
    -> React batching introduced in react 18
    -> React, batching refers to the strategy of grouping multiple state updates before triggering a re-render of the component.
    

    Benefits of Automatic Batching

    -> Performance Optimization:
    -> Simplified Code: 
    -> Enhanced User Experience: 

note: 

    -> Batching will not work for this scenario
    -> for some older code it will not work

    // An older library with its own event system 

    someOldLibrary.addEventListener('update', () => {
        setCount(count + 1); 
    });  

`useTransition`: React 18's `useTransition` hook is designed for separating urgent and non-urgent updates


2. Context API

    -> The Context API in React is a built-in feature that allows you  to share data entire  acation
    -> It simplifies state management
    -> To avoid Props drilling we will go for context API
    
3. useEffect
   
   The useEffect Hook in React is a built-in function that allows you to perform side effects in functional components. Side effects are operations that affect something outside a component, such as data fetching, subscriptions, timers, or manual DOM updates. 

   sideEffect:

        class component              functional component

        componentMount               useEffect(() => {} [])
        componentUpdate              useEffect(() => {} [dependency])
        componentUnMount             useEffect(() => { return }[])

4. Shawllow Copy and Deep Copy


    shallow Copy:

        Shallow copy creates a new object but copies references to nested objects, meaning changes in nested parts affect the original.

        example: 

        const a = {a: 1}
        const b = a

        const b.a = 2

        console.log(a, b) // output will be  {a: 2}, {a: 2}


    Deep Copy: 

        Deep copy recursively duplicates everything, creating a completely independent clone with new memory for all nested structures, ensuring no shared data


        let employee = {
            eid: "E102",
            ename: "Jack",
            eaddress: "New York",
            salary: 50000
        }
        console.log("=========Deep Copy========");
        let newEmployee = JSON.parse(JSON.stringify(employee));

5. program 

    async function chart(value){ 
        console.log("start", value) 
        await console.log("middle", value) 
        console.log("end",value) 
    } 
    
    chart("first") 
    chart("second")

    Output:

        start first
        middle first
        end first
        start second
        middle second
        end second

6. Program

    for(var i=0;i<5;i++){ 
        setTimeout(function(){
            console.log(i)
        }, 1000); 
    }   Output: 5 5 5 5 5
    
    for(let i=0;i<5;i++){ 
        setTimeout(function(){
            console.log(i)
        }, 
    1000); 
    } output: 0 1 2 3 4

7. Program 

    (() => {
        var fn;
        if (!fn) {
            function fn() {
            console.log('2');
        }
    }
        fn();
    })();

function fn() {
  console.log('1');
}

Output: 2

8. Create a Dice Image of 5 dots

    <div class="dice">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot center"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>

    .dice {
        width: 120px;
        height: 120px;
        background: white;
        border-radius: 12px;
        border: 2px solid #000;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        padding: 15px;
    }

    .dot {
        width: 18px;
        height: 18px;
        background: black;
        border-radius: 50%;
        justify-self: center;
        align-self: center;
    }

    /* center dot */
        .center {
        grid-column: 2;
        grid-row: 2;
    }


9. Event Loop

    -> The event loop is the core mechanism that allows Node.js to handle non-blocking I/O operations efficiently, despite using a single JavaScript thread for execution.

    -> The event loop is a C program implemented by the libuv library. It operates by cycling through distinct phases, each with its own First-In, First-Out (FIFO) queue of callbacks

10. PollyFill

    A polyfill is a piece of JavaScript code that provides modern web functionality in older browsers that do not natively support it

    common Usecase:
        
    1. New JavaScript Methods: Such as Array.prototype.map(), Object.assign(), or Math.trunc().

    2. New APIs: Features like the fetch() API, Promise objects, or IntersectionObserver.

    3. HTML and CSS Features: Providing support for new HTML5 elements or CSS3 properties in older browsers (though these might involve different techniques

11. Accesibility in WebApp

    Web application accessibility ensures that people with disabilities—including visual, auditory, motor, and cognitive impairments—can perceive, understand, navigate, and interact with web content effectively.

    core practices:

    1. Semantic HTML
    2. Keyboard Navigation
    3. Alternative Text
    4. Forms and Labels
    5. Color and Contras
    6. WAI-ARIA
    7. Multimedia Alternatives
