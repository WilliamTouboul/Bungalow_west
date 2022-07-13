// Wrap every letter in a span

var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);



TweenMax.staggerFrom(
    ".container > .block",
    2, {
        y: "110%",
        ease: Expo.easeInOut,
        delay: 1,
    },
    0.3
);

TweenMax.to(".overlay", 0.5, {
    y: "100%",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 5.2,

});


TweenMax.to(".container", 2, {
    scale: "2",
    y: "90%",
    ease: Expo.easeInOut,
    delay: 5.5,
});


TweenMax.staggerFrom(
    ".navbar > div",
    1.6, {
        opacity: 0,
        y: -100,
        ease: Expo.easeInOut,
        delay: 6,
    },
    0.08
);

TweenMax.to('.logo', 2, {
    easing: "easeOutExpo",
    y: 50,
    delay: 6.5,
    opacity: 1
})

TweenMax.staggerFrom(
    ".site-menu > div",
    1, {
        opacity: 0,
        y: -100,
        ease: Power2.easeOut,
        delay: 6.5,
    },
    0.1
);



anime.timeline().add({
    targets: ".title .letter",
    translateY: [-200, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 8500 + 80 * i,
});