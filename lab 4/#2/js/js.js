function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => generateUsersButtons(users))
    .catch((error) => error);
}

function getOneUser(id) {
  let userInfo;
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.json())
    .then((user) => generateUserInfo(user))
    .catch((error) => error);
  return userInfo;
}

function showUserInfo(btn) {
  let userId = btn.parentElement.querySelector("input").value;
  getOneUser(userId);
}

function generateUsersButtons(users) {
  users.forEach((element) => {
    document.querySelector(
      "body div:first-child"
    ).innerHTML += `<div><button onclick='showUserInfo(this)' class='btn'>${element.name}</button>
                    <input type="hidden" value='${element.id}'></div>`;
  });
}

function generateUserInfo(userInfo) {
  let userInfoContainer = document.querySelector("body div.user-info");
  userInfoContainer.innerHTML = "";
  userInfo.forEach((element) => {
    userInfoContainer.innerHTML += `<div><span>${element.id}</span>
                    <span>${element.title}</span>
                    <span>${element.body}</span></div>`;
  });
}

getUsers();
