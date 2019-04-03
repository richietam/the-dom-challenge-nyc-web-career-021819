
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


//
// function countInArray(arrayofCountersLikes) {
//
//     let n = 0;
//     for (let i = 0; i < arrayofCountersLikes.length; i++) {
//         if (array[i] === counter) {
//             n++;
//         }
//     }
//     return n;
// }

// const ul = document.querySelector("ul")

// const newarr = document.querySelector("ul").getElementsByTagName('li')
// const arrayoflis = Array.from(newarr)
// const arrayofinnertext = arrrayoflis.map(e => e.innerText.split(" ")[0] )


// const createli = function () {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//
//
//    li.appendChild(document.createTextNode(`${counter} has been liked ${likeTracker[counter]} times`));
//    ul.appendChild(li);
// }

const addorupdateli = function () {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  if (likeTracker[counter] == 1) {
    li.appendChild(document.createTextNode(`${counter} has been liked ${likeTracker[counter]} times`));
    ul.appendChild(li);
  } else {
    newarr = document.querySelector("ul").getElementsByTagName('li')
    arrayoflis = Array.from(newarr)
    arrayofinnertext = arrayoflis.map(e => e.innerText.split(" ")[0] )
   index = arrayofinnertext.indexOf(`${counter}`)
   newarr[index].innerText = `${counter} has been liked ${likeTracker[counter]} times`
  }
}

// const updateli = function () {
//    newarr = document.querySelector("ul").getElementsByTagName('li')
//    arrayoflis = Array.from(newarr)
//    arrayofinnertext = arrayoflis.map(e => e.innerText.split(" ")[0] )
//   index = arrayofinnertext.indexOf(`${counter}`)
//   newarr[index].innerText = `${counter} has been liked ${likeTracker[counter]} times`
// }

// buttonLOVE.addEventListener('click', function () {
//   updatelikeTracker();
//
//   if (Object.keys(likeTracker).length == 1) {
//     createli()
//
//   } else if (!Object.keys(likeTracker).includes(`${counter}`)) {
//     createli()
//   debugger
//   } else {
//     updateli()
//   }
//   }
// )


buttonLOVE.addEventListener('click', function (event) {
  likeTracker;
  updatelikeTracker();
    addorupdateli()
})



const updatelikeTracker = function() {
  likeTracker[counter] = (likeTracker[counter]) + 1 || 1
}
