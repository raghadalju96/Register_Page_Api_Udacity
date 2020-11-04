// UI
const username = document.querySelector(".user-name");
const email = document.querySelector(".email");
const submitButton = document.querySelector(".btn");

// events
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addUser({ username: username.value, email: email.value }).then(function () {
    updateUI();
  });
});

// async function
const addUser = async (data) => {
  const res = await fetch("http://localhost:8000/addUser", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

// async function
const updateUI = async () => {
  const req = await fetch("/all");
  try {
    const users = await req.json();
    document.querySelector("#un").innerHTML = "User: " + users.username;
    document.querySelector("#mail").innerHTML = "Email: " + users.email;
    console.log(users.username);
  } catch (error) {
    console.log("Error", error);
  }
};
