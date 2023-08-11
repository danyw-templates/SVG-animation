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
const head = document.getElementById("head-main");

const anchor = document.getElementById("portrait");
const rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;
// const initialAngle = angle(anchorX, anchorY, anchorX + 1, anchorY); // Initial angle with horizontal axis
const maxRotation = 7; // Maximum rotation angle in degrees

const width = window.innerWidth;
const height = window.innerHeight;



document.addEventListener("mousemove", e => {
    root.style.setProperty("--mouse-x", e.clientX / innerWidth);
    root.style.setProperty("--mouse-y", e.clientY / innerHeight);

    // const currentAngle = angle(anchorX, anchorY, e.clientX, e.clientY);

    // const angleDeg = `${angle(e.clientX, e.clientY, anchorX, anchorY)}deg`;
    const angleDeg = angle(e.clientX, e.clientY, anchorX, anchorY);
    root.style.setProperty("--angle", angleDeg);

    // const headTiltAngle = `${Math.min(45, Math.max(-40, angleDeg - 90))}deg`;
    const headTiltAngle = `${angleDeg}deg`;
    // console.log(headTiltAngle);
    root.style.setProperty("--head-tilt-angle", headTiltAngle);

//     const angleX = map(e.clientX, e.clientX - 100, e.clientX + 100, -3, 3);
//   const angleY = map(e.clientY, e.clientY + 100, e.clientY - 100, -3, 3);
// console.log(angleX, angleY);
//   const rotation = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
//   root.style.setProperty("--rot", rotation);



//   const angleX = maxRotation * ((e.clientY - anchorX) / anchorX);
//     const angleY = maxRotation * ((e.clientX - anchorY) / anchorY);

    // const angleT = maxRotation * ((e.clientX - anchorX + e.clientY - anchorY) / (anchorX + anchorY));


//     const deltaX = (e.clientX - anchorX);
//     const deltaY = (e.clientY - anchorY);
//     const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
// let angleT = maxRotation * (deltaX / distance);
// angleT = Math.min(Math.max(angleT, -maxRotation), maxRotation);

//     const rotation = `rotate(${angleT}deg)`;
//     console.log(rotation);
//     head.style.transform = rotation;

    // const angleXX = maxRotation * ((e.clientY - anchorX) / anchorX);

    // moze tak musze prosto
    


    const angleTi = (-maxRotation * ((e.clientX - anchorX + e.clientY - anchorY) / (anchorX + anchorY)));
console.log(angleTi);
const x = (e.pageX - width / 2) / (width / 2);
            const y = (e.pageY - height / 2) / (height / 2);
            const tiltX = y * 8;
            const tiltY = x * -7;
            head.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotate(${angleTi}deg)`;
            // head.style.transform = `rotate(${angleTi}deg)`;


    });


    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx); // range (-PI, PI]
        const deg = (rad * 180) / Math.PI; // rads to degs, range (-180, 180]
        //if (theta < 0) theta = 360 + theta; // range [0, 360)
        return deg;
    }



    function map(value, fromMin, fromMax, toMin, toMax) {
        return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
    }

    // ********************
// const portrait = document.getElementById('portrait');
// const mouseXOffset = window.innerWidth / 2;
// const mouseYOffset = window.innerHeight / 2;

// document.addEventListener('mousemove', (event) => {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   const deltaX = (mouseX - mouseXOffset) * 0.05;
//   const deltaY = (mouseY - mouseYOffset) * 0.05;

//   portrait.style.transform = `translateY(${deltaY}px) rotateX(${deltaY * 2}deg) rotateY(${deltaX}deg)`;
// });
