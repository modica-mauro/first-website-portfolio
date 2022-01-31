function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function popupImg(id) {
  var img = document.getElementById(id),
    style = img.currentStyle || window.getComputedStyle(img, false),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

  document.getElementById("imgPopup").src = bi;

}
