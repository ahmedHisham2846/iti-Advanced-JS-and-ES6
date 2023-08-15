async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    generateUsersButtons(users);
  } catch (error) {
    console.log(error);
  }
}

async function getOneUser(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  let user = await response.json();
  generateUserInfo(user)
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
