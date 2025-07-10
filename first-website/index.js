const listItems = document.querySelectorAll('li');

function ToggleList(listItem) {
  if (!listItem.target.className) {
    listItem.target.className = "done";
  }
  else {
    listItem.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", ToggleList);
});
