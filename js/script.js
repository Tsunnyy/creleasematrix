// Logo Marquee
const boxes = gsap.utils.toArray(".ourClientsInner");
const loop = horizontalLoop(boxes, { paused: false, repeat: -1 });

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 10000) }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});

var menu = ["1", "2", "3", "4", "5"];
var howWeWorkSlider = new Swiper(".howWeWorkSlider", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".howWeWorkSlider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menu[index] + "</span>";
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});

// Gsap 
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline()

gsap.from(".heroSectionR img", {
    opacity: 0,
    duration: 1.2,
    y: 150,
}, "a")

tl.from(".heroSectionL h1", {
    opacity: 0,
    x: -50,
})
tl.from(".heroSectionL span", {
    opacity: 0,
    x: -50,
})
tl.from(".heroSectionL p", {
    opacity: 0,
    x: -50,
})

// Product SLider

// let productSection = gsap.utils.toArray(".ourProductMain")
// const productsTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".ourProductMain",
//         pin: true,
//         start: "top top",
//         end: "bottom 200%",
//         markers: true,
//         scrub: 5,
//         sragger: 1,
//     }
// });

// productSection.forEach((image, i) => {
//     if (i) {
//         productsTimeline.from(image, {
//             opacity: 0,
//             duration: 1,
//         });
//     }
// });