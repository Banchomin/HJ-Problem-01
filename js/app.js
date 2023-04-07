const listModal = document.querySelector("#modal_1");
const list_btn = document.querySelector("#list");
function show() {
  if (listModal.style.display == "none") {
    listModal.style.display = "block";
  } else {
    listModal.style.display = "none";
  }
}

list_btn.addEventListener("click", show);
