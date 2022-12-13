// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likebutton = document.getElementsByClassName("like-glyph")[0];
console.log(likebutton.innerHTML);

likebutton.addEventListener('click',() => {
  mimicServerCall()
  
  .then(() => {
    let likeimage = document.getElementsByClassName("like-glyph")[0]
    
    console.log("truthy or falsey: ", typeof likeimage.innerHTML === FULL_HEART)



    if (likeimage.innerHTML === FULL_HEART) {
      likeimage.innerHTML = EMPTY_HEART;
      likeimage.classList.remove("activated-heart")

      console.log("top if = ",likeimage.innerHTML)
    }
    else
    {
      likeimage.innerHTML = FULL_HEART;
      likeimage.classList.add("activated-heart")

      console.log("inside bottom if", likeimage.innerHTML)
    }  


    console.log("successfull mimicServerCall")


    

  })

  .catch(() => {
    let errorContact = document.getElementById("modal")
    errorContact.style.visibility = "visible";
    console.log("inside error catch")

    setTimeout(() => {
      errorContact.style.visibility = "hidden";
    }, 3000);
  })

})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
