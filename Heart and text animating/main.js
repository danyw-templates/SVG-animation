// Get a length of the path and use it in css (~57):
// window.addEventListener('DOMContentLoaded', () => {
//   const path = document.querySelector('#heart path');
//   console.log(path.getTotalLength());
// })

window.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const neonHeart = document.querySelector('.neon');
    
    const likeUnlikePost = function() {
      if(heart.classList.contains('like')) {
        heart.classList.remove('like');
        heart.classList.add('unlike');
        neonHeart.classList.remove('visible');
      } else {
        heart.classList.remove('unlike');
        heart.classList.add('like');
        neonHeart.classList.add('visible');
      }
    }
  
    
    heart.addEventListener('click', likeUnlikePost);
  })