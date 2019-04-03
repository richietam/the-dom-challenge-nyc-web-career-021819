let counter = 0
const likeTracker = {}
let pause = true

const setTime = function () {
  if (pause == false) {
    counter += 1
    document.querySelector("#counter").innerText = counter
  } else {
    counter += 0
    document.querySelector("#counter").innerText = counter
  }
}

 document.addEventListener('DOMContentLoaded', function (event) {
    pause = false
    setInterval(setTime, 1000);
});


const buttonMinus = document.getElementById("-")
const buttonPlus = document.getElementById("+")

buttonMinus.addEventListener('click', function (event) {
    counter -= 1
  })

buttonPlus.addEventListener('click', function (event) {
      counter += 1
    })


const buttonLOVE = document.getElementById("<3")



 const createli = function () {
   let ul = document.querySelector("ul");
  let li = document.createElement("li");
   li.appendChild(document.createTextNode(`${counter} has been liked ${likeTracker[counter]} times`));
   ul.appendChild(li)
}

 buttonLOVE.addEventListener('click', function (event) {
  likeTracker
    updatelikeTracker()
    createli()
      // iterate over ul and count unique numbers
    })


 const updatelikeTracker = function() {
  arr = Object.keys(likeTracker)
   if (Object.keys(likeTracker)){
    likeTracker[counter] = 1
  }else {
    likeTracker[counter] = likeTracker[counter] + 1 || 1
  }
}


let pauseBtn = document.getElementById("pause")
pauseBtn.addEventListener("click", event =>{
  pause = !pause
});


let commentlist = document.getElementById('list')
let comment = document.getElementById('comment-form')
let input = document.getElementById('input')

comment.addEventListener('submit', event => {
  event.preventDefault();
  ptag = document.createElement("p")
  ptag.innerText = input.value
  commentlist.appendChild(ptag)

})
