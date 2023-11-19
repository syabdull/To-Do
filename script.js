let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");
let button = document.querySelector("button");
inputTag.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "Enter") {
    let value = inputTag.value;
    if (value.length == 0) {
      return;
    }
    inputTag.value = "";
    let liTag = document.createElement("li");
    liTag.innerHTML = `<div>${value}</div>
                        <div class="delete"><i class="fa fa-trash-can"></i></div>`;
    handleRemoval(liTag);
    ulTag.appendChild(liTag);
  }
});
function handleRemoval(liTag) {
  let delDiv = liTag.querySelector(".delete");
  delDiv.addEventListener("click", () => {
    liTag.remove();
  });
}
