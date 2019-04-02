// some code to change innerHTML = counter for each interval


let counter = 0
const likeTracker = {}

const setTime = function () {
  counter += 1
  document.querySelector("#counter").innerText = counter
}

document.addEventListener('DOMContentLoaded', function (event) {
    setInterval(setTime, 1000)
    console.log('DOM fully loaded and parsed');
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



function countInArray(arrayofCountersLikes) {

    let n = 0;
    for (let i = 0; i < arrayofCountersLikes.length; i++) {
        if (array[i] === counter) {
            n++;
        }
    }
    return n;
}


const createli = function () {

  let ul = document.querySelector("ul");
  let li = document.createElement("li");
   li.appendChild(document.createTextNode(`${counter} has been liked ${likeTracker[counter]} times`));
   ul.appendChild(li);
}

buttonLOVE.addEventListener('click', function (event) {
  likeTracker
    updatelikeTracker()

      createli()
      // iterate over ul and count unique numbers
    })



const updatelikeTracker = function() {
  arr = Object.keys(likeTracker)

  if (Object.keys(likeTracker).length === 0){
    likeTracker[counter] = 1
  }else if (arr.includes(counter)) {
    (likeTracker[counter] + 1) 
  }else {
    likeTracker[counter] = 1
  }
}
