// const textFirst = document.querySelector('.text.first');
// const textSecond = document.querySelector('.text.second');
// textFirst.innerHTML = textFirst.textContent.replace(/\S/g, "<span>$&</span>")
// textSecond.innerHTML = textSecond.textContent.replace(/\S/g, "<span>$&</span>")

// anime.timeline(
//     {
//         loop: false
//     }
// )

// .add(
//     {
//         targets: '.text.first span',
//         translateY: [-600, 0],
//         scale: [10, 1],
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 1500,
//         delay: anime.stagger(100),
//     }
// )

// .add(
//     {
//         targets: '.text.first span',
//         translateX: [0, -1000],
//         rotate: [0, -360],
//         scale: [1, 1],
//         opacity: [1, 0],
//         easing: "easeOutExpo",
//         duration: 2000,
//         delay: anime.stagger(100),

//     }
// )

// .add(
//     {
//         targets: '.text.first span',
//         delay:0,
//         begin: function() {
//             document.querySelector('.text.first').style.display = 'none';
//             document.querySelector('.text.second').style.display = 'block';
//         },
//     },'-=1000'
// )
// .add(
//     {
//         targets: '.text.second span',
//         translateX: [1000, 0],
//         rotate: [360,0],
//         scale: [1, 1],
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 1000,
//         delay: anime.stagger(100),
//     }
// )
// .add(
//     {
//         targets: '.text.second span',
//         translateX: [0, 0],
//         scale: [1,50],
//         opacity: [1, 0],
//         easing: "easeOutExpo",
//         duration: 2000,
//         delay: anime.stagger(100),
//     }
// )

const backImgAppendTag = document.querySelector('.back-anime .text');
const rand100 = Math.floor(Math.random() * 501);

for(let i = 0; i < rand100; i++){
    span = document.createElement('span');
    backImgAppendTag.appendChild(span)
}

const items = document.querySelectorAll('section.back-anime .text span');

items.forEach(item =>{
    let rand500 = Math.floor(Math.random() * 1001);
    item.style.transform = `translate(${rand500}px, ${rand500}px )`
})
var animation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 10000,
    loop: true,
  });
  animation
  .add({
    targets: 'section.back-anime .text span',
    rotate: function(){
        return anime.random(0, 90);
    },
    translateX: function(){
        return anime.random(-500, 500)
    },
    translateY: function(){
        return anime.random(-500, 500)
    },
    duration: 10000,
  })

//   .add({
//     targets: 'section.back-anime .text span',

//     translateX: function(){
//         return anime.random(-500, 500)
//     },
//     translateY: function(){
//         return anime.random(-500, 500)
//     },
//     duration: 5000,
//   },'-=500')