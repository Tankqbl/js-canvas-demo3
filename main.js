let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let paint1 = false;
let paint2 = false;
let eraser = document.getElementById("eraser");
let clear1 = false;
let clear2 = false;
let rainbowpen1 = false;
let rainbowpen2 = false;
let hue = 0;
let shuimo1 = false;
let shuimo2 = false;
let op = 0.3;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let last;
ctx.strokeStyle = "none";
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.lineCap = "round";
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
shuimo.addEventListener("click", e => {
  paint1 = false;
  paint2 = false;
  rainbowpen1 = false;
  rainbowpen2 = false;
  clear1 = false;
  clear2 = false;
  shuimo1 = true;
});
colorful.addEventListener("click", e => {
  paint1 = false;
  paint2 = false;
  rainbowpen1 = true;
  clear1 = false;
  clear2 = false;
  shuimo1 = false;
  shuimo2 = false;
});
brush.addEventListener("click", e => {
  paint1 = true;
  clear1 = false;
  clear2 = false;
  rainbowpen2 = false;
  rainbowpen1 = false;
  shuimo1 = false;
  shuimo2 = false;
});
eraser.addEventListener("click", () => {
  clear1 = true;
  paint1 = false;
  paint2 = false;
  rainbowpen1 = false;
  rainbowpen2 = false;
  shuimo1 = false;
  shuimo2 = false;
});
canvas.onmousedown = e => {
  if (paint1 === true) {
    paint2 = true;
  }
  if (clear1) {
    clear2 = true;
  }
  if (rainbowpen1) {
    rainbowpen2 = true;
  }
  if (shuimo1) {
    shuimo2 = true;
  }
  last = (e.clientX, e.clientY);
};
canvas.onmousemove = e => {
  if (paint2) {
    ctx.strokeStyle = `black`;
    drawLine(last[0], last[1], e.clientX, e.clientY);
    last = [e.clientX, e.clientY];
  }
  if (clear2) {
    ctx.beginPath();
    ctx.clearRect(e.clientX, e.clientY, 20, 20);
  }
  if (rainbowpen2) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
    drawLine(last[0], last[1], e.clientX, e.clientY);
    last = [e.clientX, e.clientY];
  }
  if (shuimo2 === true) {
    ctx.strokeStyle = `rgba(0,0,0,${op})`;
    op += 0.1;
    drawLine(last[0], last[1], e.clientX, e.clientY);
    last = [e.clientX, e.clientY];
    if (op > 1) {
      op = 0.3;
      console.log("op fail");
    }
  }
};

canvas.onmouseup = e => {
  paint2 = false;
  clear2 = false;
  rainbowpen2 = false;
  shuimo2 = false;
};
