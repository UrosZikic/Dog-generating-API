var dog = document.querySelector(".dog");
var breed = document.querySelector(".breed");

function generateNewDog() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((item) => item.json())
    .then((data) => {
      console.log(data);
      dog.src = data.message;
      dog.style.display = "block";

      var breedName = data.message.slice(30, data.message.lastIndexOf("/"));
      var displayBreed = `<p>${breedName}</p>`;
      breed.innerHTML = displayBreed;
    });
}
