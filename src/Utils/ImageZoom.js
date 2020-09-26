export function imageZoom(imgID, resultID, littleIndicator) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  let originalImage = new Image();
  originalImage.src = img.src;
  result = document.getElementById(resultID);
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  img.parentElement.insertBefore(lens, img);
  cx = result?.offsetWidth / lens.offsetWidth ;
  cy = result?.offsetHeight / lens.offsetHeight;

  let widthRatio = originalImage.width / img.width;
  let heightRatio = originalImage.height / img.height;

  let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
  let leftOffset = ((originalImage.width / ratio) - img.width) / 2;
  let topOffset = ((originalImage.height / ratio) - img.height) / 2;

  if (result) {
    
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
    originalImage.width * cx + "px " + originalImage.height * cy + "px";
  }

  moveLens();
  function moveLens() {
    var pos, x, y;
    pos = getCursorPos();
    x = (pos.x - lens.offsetWidth / 4);
    y = (pos.y - lens.offsetHeight / 4);

    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    x += leftOffset;
    y += topOffset;
    if (result) {
      result.style.backgroundPosition = "-" +  ratio * x * cx + "px -" + ratio * y * cy + "px";
    }
  }

  function getCursorPos() {
    const myCursor = littleIndicator;
    return { x: myCursor?.x, y: myCursor?.y };
  }
}