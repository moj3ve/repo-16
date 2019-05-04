window.onload = function () {
  document.getElementById("Lisa").addEventListener("click", packagesEventHandler);
  document.getElementById("GetLisa").addEventListener("click", packagesEventHandler);

  document.getElementById("FakeDisabled").addEventListener("click", packagesEventHandler);
  document.getElementById("GetFakeDisabled").addEventListener("click", packagesEventHandler);

  document.getElementById("Screender").addEventListener("click", packagesEventHandler);
  document.getElementById("GetScreender").addEventListener("click", packagesEventHandler);
}

function packagesEventHandler(e) {
  switch(e.currentTarget.id) {
    case "Lisa":
      window.open("https://esquillidev.github.io/description.html?id=com.esquilli.lisa", "_self");
      break;
    case "GetLisa":
      break;
    case "FakeDisabled":
      window.open("https://esquillidev.github.io/description.html?id=com.esquilli.fakedisabled", "_self");
      break;
    case "GetFakeDisabled":
      window.open("https://cydia.saurik.com/api/share#?source=https://esquillidev.github.io/&package=com.esquilli.fakedisabled");
      break;
    case "Screender":
      window.open("https://esquillidev.github.io/description.html?id=com.esquilli.screender", "_self");
      break;
    case "GetScreender":
      window.open("https://cydia.saurik.com/api/share#?source=https://esquillidev.github.io/&package=com.esquilli.screender");
      break;  
  }
  e.stopPropagation();
}