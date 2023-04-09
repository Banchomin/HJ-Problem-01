const listModal = document.querySelector("#modal_1");
const profileModal = document.querySelector("#modal_2");
const list_btn = document.querySelector("#list");
const profile_btn = document.querySelector("#profile");
const filterElem = document.querySelectorAll(":not(html, body, header, .header_menu, .header_menu *, #modal_1, #modal_1 *, #modal_2, #modal_2 *)");

function showList() {
  if (listModal.style.display === "none") {
    listModal.style.display = "block";
    profileModal.style.display = "none";
    console.log("hello");
  } else {
    listModal.style.display = "none";
  }
}

function showProfile() {
  if (profileModal.style.display === "none") {
    profileModal.style.display = "block";
    listModal.style.display = "none";
    console.log("bye");
  } else {
    profileModal.style.display = "none";
  }
}

function hideAll() {
  profileModal.style.display = "none";
  listModal.style.display = "none";
}

filterElem.forEach((elem) => {
  elem.addEventListener("click", function () {
    hideAll();
  });
});

list_btn.addEventListener("click", showList);
profile_btn.addEventListener("click", showProfile);
