const textFirst = document.querySelector('.text.first');
const textSecond = document.querySelector('.text.second');
textFirst.innerHTML = textFirst.textContent.replace(/\S/g, "<span>$&</span>")
textSecond.innerHTML = textSecond.textContent.replace(/\S/g, "<span>$&</span>")

anime.timeline(
    {
        loop: false
    }
)

.add(
    {
        targets: '.text.first span',
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
    }
)

.add(
    {
        targets: '.text.first span',
        translateX: [0, -1000],
        rotate: [0, -360],
        scale: [1, 1],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),

    }
)

.add(
    {
        targets: '.text.first span',
        delay:0,
        begin: function() {
            document.querySelector('.text.first').style.display = 'none';
            document.querySelector('.text.second').style.display = 'block';
        },
    }
)
.add(
    {
        targets: '.text.second span',
        translateX: [1000, 0],
        rotate: [360,0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
    }
)
.add(
    {
        targets: '.text.second span',
        translateX: [0, 0],
        scale: [1,50],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
    }
)