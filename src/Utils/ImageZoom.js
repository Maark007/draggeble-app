export function imageZoom(imgID, resultID, littleIndicator) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  img.parentElement.insertBefore(lens, img);
  cx = result?.offsetWidth / lens.offsetWidth ;
  cy = result?.offsetHeight / lens.offsetHeight;
  if (result) {
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
  }

  moveLens();
  function moveLens() {
    var pos, x, y;
    pos = getCursorPos();
    x = pos.x - lens.offsetWidth / 4;
    y = pos.y - lens.offsetHeight / 4;

    if (x > img.clientWidth - lens.offsetWidth) {
      x = img.clientWidth - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.clientHeight - lens.offsetHeight) {
      y = img.clientHeight - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    if (result) {
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
  }

  function getCursorPos() {
    const myCursor = littleIndicator;
    return { x: myCursor?.x, y: myCursor?.y };
  }
}
