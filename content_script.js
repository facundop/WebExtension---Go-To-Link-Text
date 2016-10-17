var target;

function loadContextMenu(event) {
  target = event.target.innerHTML.trim();
  chrome.runtime.sendMessage({message: "linkMenu", target: target});
}

document.addEventListener('click', function(event){
  if (event.button == 2) {
    loadContextMenu(event);
  }
});