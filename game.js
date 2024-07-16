const myCanvas = document.getElementById("myCanvas");
const context = myCanvas.getContext("2d");

const widthCanvas = myCanvas.width;
const heightCanvas = myCanvas.height;

// tạo nhân vật
const character = {
  x: 100,
  y: 100,
  width: 25,
  height: 25,
  color: "red",
};

setInterval(start, 100);

function start() {
  context.clearRect(0, 0, widthCanvas, heightCanvas); // tọa độ X-Y, width-height của canvas
  // vẽ hình vuông lên canvas
  const { x, y, width, height, color } = character;
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

// di chuyển đối tượng
document.addEventListener("keydown", (key) => {
  switch (key.keyCode) {
    case 37: // move left
      if (character.x > 0) {
        character.x -= 5;
      }
      break;
    case 38: // move up
      if (character.y > 0) {
        character.y -= 5;
      }
      break;
    case 39: // move right
      if (character.x + character.width < widthCanvas) {
        character.x += 5;
      }
      break;
    case 40: // move down
      if (character.y + character.height < heightCanvas) {
        character.y += 5;
      }
      break;
  }
});
