const canvas = document.getElementById("blobs");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,184,148,0.1)";
  ctx.beginPath();
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  for (let a = 0; a < Math.PI * 2; a += 0.01) {
    let r = 100 + 20 * Math.sin(a * 6 + t);
    let x = centerX + r * Math.cos(a);
    let y = centerY + r * Math.sin(a);
    if (a === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  t += 0.01;
  requestAnimationFrame(draw);
}
draw();
