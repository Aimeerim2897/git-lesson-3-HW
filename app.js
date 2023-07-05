const emptyDiv = document.getElementById("user-list")
const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.onclick = () => {
    if(input.value.trim()){
        fetch("https://jsonplaceholder.typicode.com/users/" + input.value)
        .then((res) => res.json())
        .then((user) => {
            renderCard(user)
        })
    }
}
function renderCard(array = []) {
    emptyDiv.innerHTML = ""
    if (array.length === 0) {
        emptyDiv.innerHTML = `
        <div class="spinner-border" role="status">
    <span id="spinner-border" class="visually-hidden">Loading...</span>
    </div> `
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        emptyDiv.innerHTML += `
        <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title"><i>${array[i]?.name}</i></h5>
    <p> Phone:<strong> ${array[i]?.phone}</strong></p>
    <p> Website:<strong> ${array[i]?.website}</strong></p>
    <p class="card-text">Company name:<strong> ${array[i]?.company?.name}</strong></p>
  </div>
</div>
        `
    }
}
renderCard();

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((userData) => {
        console.log(userData);
        renderCard(userData) 
    })
}
getUsers();
