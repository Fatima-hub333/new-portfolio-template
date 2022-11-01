const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }
  //Sections Active class
  allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}

PageTransitions();

// A queue is a linear collection of elements that are maintained in a sequence and can be modified by the addition of elements at one end of the sequence (enqueue operation) and the removal of elements from the other end (dequeue operation). Usually, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue. As an abstract data types, queues can be implemented using arrays or singly linked lists.

//This behavior is commonly called FIFO(First in, First out). The name 'queue' for this type of structure comes from the analogy to people lining up in real life to wait for goods or services.

// Breadth-first search is commonly implemented using queues.

// Jobs were bunch of objects in an array that you just iterated through and completed, and then removed when they were done. once you start finding a pattern of abstraction in one system, language or codebase, it becomes so much easier to start recognizing those patterns elewhere.

// Queues abide by and operate, for the most part, according to the first-in , first-out principle.The first element in the queue, or the element at the front of the queue, is always the first to be processed and removed from the queue.

// Stacks are Last in, first-out(LIFO) structures, while queues are first-in, first-out structures.

// A stack's (push) function is similar to a queue's (enqueue) function
// A stack's (pop) function is similar to a queue's (dequeue) function

// Enqueue/Offer - O(1)
// Dequeue/Poll - O(1)
// Front - O(1)
// Back - O(1)
// isEmpty - O(1)

// let a
// var MyStack = function() {
//    a = []
//};

// MyStack.prototype.push = function(x){
// a.push(x)
//};

// MyStack.prototype.pop = function(){
//   return a.pop()
//};

// MyStack.prototype.top = function() {
//  return a[a.length -1]
//};

// MyStack.prototype.empty = function() {
//   return a.length === 0;
//};
