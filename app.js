//variables are names we give to data
//functions are names that we give to processes


function startUp(){
  console.log('hello paradise');
  //setting up events
  // 1. what sort of event
  // 2. what to do when it happens
  // 3. what element the event occurs on

  //when the green button is clicked, run 'rejoice'
  // on the button id='yes' in index.html
  let greenButton = document.querySelector('#yes');
  greenButton.addEventListener('click', rejoice);
  //when the red button is clicked, run 'renounce'
  let redButton = document.querySelector('#no');
  redButton.addEventListener('click', renounce);
}

function getNewBook(liked){
  fetch('http://crash.queencityiron.com/book')
    //Once we hear back, do something with the response (function readJSON is created inline)
    .then(function readJSON(response){
      //Read the respnse as JSON and give me the JS object
      return response.json();
    })
    .then(function logIt(book){
      //'book is the new book'
      console.log(book);
      let titleBox = document.querySelector('#info > h2');
      //textContent is the text that shows up between the starting and ending tags
      //<p>this stuff</p>
      //you can also use inner html
      titleBox.textContent = book.title;
      book.title;

      let authorBox = document.querySelector('#info > h3');
      authorBox.textContent = book.authorBox;
      if (liked){// if liked === true
      console.log('Since you love it, we bought it for you!');
      console.log('Your account was charged $' + book.price);
      }
      let headliner = document.querySelector('main > img');
      //below images have a source property to access in order to update
      headliner.src = book.cover;

      //Add a class called 'cool-class' to an elemnt e.g. Show/Hide: add a class named show and remove a class named show
      //headliner.classList.add('cool-class');
      //Modify any attribute of the element
      //headliner.setAttribute('src', book.cover)
    })
}


function rejoice() {
  console.log('What a book!');
  getNewBook(true);

}
function renounce() {
  console.log('Never again!');
  getNewBook(false);
}
//communicating with the backend http://crash.queencityiron.com/book using fetch
//when the window loads, run 'startUp'
window.addEventListener('load', startUp);
