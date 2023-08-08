// const portrait = document.getElementById('portrait');
//         const eyes = portrait.getElementById('eyes');
//         const head = portrait.getElementById('head-main');
//         const eyebrows = portrait.getElementById('eyebrows');

//         // Add event listener for mousemove event
//         document.addEventListener('mousemove', handleMousemove);

//         // Function to handle mousemove event
//         function handleMousemove(event) {
//             const mouseX = event.clientX;
//             const mouseY = event.clientY;

//             // Calculate the angle between the mouse position and the center of the eyes
//             const eyeCenterX = 211.52; // x-coordinate of the eye center
//             const eyeCenterY = 122.31; // y-coordinate of the eye center
//             const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

//             // Calculate the tilt angle for the head
//             const headTiltAngle = Math.atan2(mouseY - 164.56, mouseX - 225.3);

//             // Calculate the vertical position of the eyebrows
//             const eyebrowPosition = Math.max(Math.min((mouseY - eyeCenterY) / 10, 10), -10);

//             // Rotate the eyes and the head
//             eyes.setAttribute('transform', `rotate(${angle * (180 / Math.PI)}, ${eyeCenterX}, ${eyeCenterY})`);
//             head.setAttribute('transform', `rotate(${headTiltAngle * (180 / Math.PI)}, ${eyeCenterX}, ${eyeCenterY})`);

//             // Move the eyebrows
//             eyebrows.setAttribute('transform', `translate(0, ${eyebrowPosition})`);
//         }

const root = document.documentElement;

document.addEventListener("mousemove", e => {
    root.style.setProperty("--mouse-x", e.clientX / innerWidth);
    root.style.setProperty("--mouse-y", e.clientY / innerHeight);
    });