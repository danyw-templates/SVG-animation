const root = document.documentElement;
const head = document.getElementById('head-main');
const portrait = document.getElementById('portrait');
const portraitRect = portrait.getBoundingClientRect();

const portraitX = portraitRect.left + portraitRect.width / 2;
const portraitY = portraitRect.top + portraitRect.height / 2;
let width = window.innerWidth;
let height = window.innerHeight;
// add event listener to update width and height on resize

const headMaxRotation = 7; // Maximum rotation angle in degrees

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  root.style.setProperty('--mouse-x', mouseX / width);
  root.style.setProperty('--mouse-y', mouseY / height);

  headTilt(headMaxRotation, mouseX, mouseY, portraitX, portraitY);
});


function headTilt(headMaxRotation, mouseX, mouseY, portraitX, portraitY) {
  const headTiltAngle =
    -headMaxRotation *
    ((mouseX - portraitX + mouseY - portraitY) / (portraitX + portraitY));
  const x = (mouseX - width / 2) / (width / 2);
  const y = (mouseY - height / 2) / (height / 2);
  const tiltX = y * 8;
  const tiltY = x * -7;
  head.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotate(${headTiltAngle}deg)`;
}
