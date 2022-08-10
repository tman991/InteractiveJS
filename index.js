

const addMovie = (event) => {

    event.preventDefault()

let inputField = document.querySelector('input')

let movie = document.createElement('li')

let movieTitle = document.createElement("span");

movieTitle.textcontent = inputField.value;

movie.appendChild(movieTitle)

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "x";

deleteBtn.addEventListener("click", deleteMovie);

movie.appendChild(deleteBtn)

document.querySelector("ul").appendChild(movie)

inputField.value = ''

}

const deleteMovie = (event => {
    event.target.parentNode.remove()
})
document.querySelector("form").addEventListener("submit", addMovie);




function crossOffMovie(event) {

    event.target.classList.toggle("checked")


        if (event.target.classList.contains('checked') === true) {

            message.textContent = 'Already watched!'
            
        }  else {  message.textContent = 'Movie added back!'
            
        }
        
      

}
