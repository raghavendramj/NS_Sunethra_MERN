// setTimeout() is a method of the window object.
// The setTimeout()  sets a timer and
// executes a callback function after the timer expires.
function setTimeoutExample() {
    console.log("1. One");
      debugger;
    setTimeout(function () {
      console.log("2. Two");
    }, 1000);
    setTimeout(function () {
      console.log("3. Three");
    }, 0);
    console.log("4. Four");
  }
  
  setTimeoutExample(); 

// |
// |
// |
// |  
// -------------
// CALL_STACK 
// WEB_APIs  -> start timer -> after timer completes it pushes the code of setimeout callback to CB_Queue
// CallBack_Queue  -> console.log("2. Two");