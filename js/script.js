const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Header
const header = document.createElement('navbar');
header.innerHTML = `<nav class="navbar navbar-expand-lg">
            <div class="container-fluid p-0">
                <a href="/index.html" class="logo">
                    <img src="/img/logo.svg" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#whyLeaseMatrix">Why Lease Matrix?</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/products/leadmanagement.html"><img src="/img/product/1.svg" alt="product Icon">
                                        Lead Management</a></li>
                                <li><a class="dropdown-item" href="/products/proposalmanagement.html"><img src="/img/product/2.svg" alt="product Icon">
                                        Proposal Management (LOI)</a></li>
                                <li><a class="dropdown-item" href="/products/inventorymanagement.html"><img src="/img/product/3.svg" alt="product Icon">
                                        Inventory Management</a></li>
                                <li><a class="dropdown-item" href="/products/leasemanagement.html"><img src="/img/product/4.svg" alt="product Icon">
                                        Lease Management</a></li>
                                <li><a class="dropdown-item" href="/products/reportsmanagement.html"><img src="/img/product/5.svg" alt="product Icon">
                                        Reports</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#howItWorks">How it works</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Resources
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="https://www.creleasematrix.com/blog/" target="_blank">Blogs</a></li>
                                <li><a class="dropdown-item" href="#">Case Studies</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="button_group d-flex gap-3 align-items-center">
                        <button class="button bg-006CFF" data-bs-toggle="modal" data-bs-target="#bookaDemoModal">Book a
                            Demo</button>
                        <li class="nav-item dropdown button">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Login
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="https://landlord.creleasematrix.com/">Landlord</a></li>
                                <li><a class="dropdown-item" href="https://occupier.creleasematrix.com/">Occupier</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>`;
document.body.prepend(header)

// Footer
const footer = document.createElement("div")
footer.innerHTML = `
<footer>
            <div class="row m-0 footerMain">
                <div class="col-12 col-md-8 ps-0 footerMainL">
                    <div class="row m-0">
                        <div class="col-12 col-md-5 ps-0 footerMainLSideL">
                            <a href="/index.html" class="logo">
                                <img src="/img/logo.svg" alt="Logo">
                            </a>
                            <p class="desc">
                                CRE Lease Matrix is India’s leading big data platform designed to revolutionize lease
                                management. Our end-to-end solution empowers developers, landlords, and occupiers to
                                efficiently manage their property portfolios, reduce operational costs, and uncover new
                                opportunities. With powerful insights, advanced data security, and 24/7 accessibility,
                                we streamline your lease lifecycle from document collection to critical date tracking.
                                Experience smarter lease management and maximize your ROI with CRE Lease Matrix.
                            </p>

                            <div class="d-flex gap-3 align-items-center socialIcons">
                                <a href="" target="_blank">
                                    <img src="/img/social/1.svg" alt="Social Media">
                                </a>
                                <a href="" target="_blank">
                                    <img src="/img/social/2.svg" alt="Social Media">
                                </a>
                                <a href="" target="_blank">
                                    <img src="/img/social/3.svg" alt="Social Media">
                                </a>
                                <a href="" target="_blank">
                                    <img src="/img/social/4.svg" alt="Social Media">
                                </a>
                                <a href="" target="_blank">
                                    <img src="/img/social/5.svg" alt="Social Media">
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 pe-0 footerMainLSideR">
                            <div class="row m-0">
                                <div class="col-12 col-md-3 p-0">
                                    <h4>Our Brands</h4>
                                    <ul>
                                        <li>
                                            <a href="https://crematrix.com/" target="_blank">CRE Matrix</a>
                                        </li>
                                        <li>
                                            <a href="https://floortap.com/" target="_blank">FloorTap</a>
                                        </li>
                                        <li>
                                            <a href="https://crematrix.com/raw" target="_blank">RAW</a>
                                        </li>
                                        <li>
                                            <a href="https://indextap.com/" target="_blank">IndexTap</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-3 p-0">
                                    <h4>Information</h4>
                                    <ul>
                                        <li>
                                            <a href="https://www.creleasematrix.com/blog/">Blogs</a>
                                        </li>
                                        <li>
                                            <a href="">Case Studies</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-5 p-0">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li>
                                            <a href="tel:+919769976058"><img src="/img/call.svg" alt="Icon"> +91 97699
                                                76058</a>
                                        </li>
                                        <li>
                                            <a href="mailto:business@crematrix.com"><img src="/img/mail.svg" alt="Icon">
                                                business@crematrix.com</a>
                                        </li>
                                        <li>
                                            <p><img src="/img/location.svg" alt="Icon"> 12th Floor, Lodha Supremus,
                                                1203, Saki Vihar Rd, opposite MTNL, Powai,
                                                Mumbai -400072</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 pe-0 footerMainR">
                    <form>
                        <h6>Request Demo</h6>
                        <div class="formMain">
                            <div class="form-fields">
                                <label for="name">Name</label>
                                <input type="text" name="name" placeholder="Enter Full Name">
                            </div>
                            <div class="form-fields">
                                <label for="phone">Phone Number</label>
                                <input type="tel" name="contact_number" placeholder="Enter Phone Number">
                            </div>
                            <div class="form-fields">
                                <label for="email">Email Address</label>
                                <input type="email" name="email_id" placeholder="Enter Email Address">
                            </div>
                        </div>
                        <button type="submit" class="button bg-006CFF">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
        <div class="copyright text-center">
            <p>Copyright 2022 CRE Matrix All Rights Reserved.</p>
        </div>
        `
document.body.append(footer)

// Modal
const modal = document.createElement("div")
modal.innerHTML = `<div class="modal fade" id="bookaDemoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> -->
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row m-0 modalMainClass">
                            <div class="col-12 col-md-6 p-0 modalMainClassL">
                                <img src="/img/modalLogo.svg" alt="CRE | Logo">
                                <div class="madeByContent">
                                    <span>Made By</span>
                                    <a href="https://crematrix.com/" target="_blank">CRE MATRIX</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 modalMainClassR">
                                <h5 class="text-center">Book a Demo</h5>
                                <form id="modalForm">
                                    <div class="formInner">
                                        <label for="fullname">Name</label>
                                        <input type="text" required name="name" placeholder="Enter Full Name">
                                    </div>
                                    <div class="formInner">
                                        <label for="email">Work Email</label>
                                        <input type="email" required name="email_id" placeholder="Enter Email">
                                    </div>
                                    <div class="formInner">
                                        <label for="phone">Phone Number</label>
                                        <input type="number" required name="contact_number" placeholder="Enter Phone Number">
                                    </div>
                                    <div class="formInner">
                                        <label for="company_name">Your Company</label>
                                        <input type="text" required name="company_name"
                                            placeholder="Enter Company Name">
                                    </div>
                                    <div class="formInner">
                                        <label for="designation">Your Designation ( Optional )</label>
                                        <input type="text" name="designation" placeholder="Enter Designation">
                                    </div>
                                    <div class="formInner">
                                        <label for="about_us">How did you Hear About Us ?</label>
                                        <select class="abourUsDropdown" name="about[]" multiple="multiple">
                                            <option value="email">Email</option>
                                            <option value="events_and_conferences">Events and conferences</option>
                                            <option value="google">Google</option>
                                            <option value="others">Others</option>
                                            <option value="social_media">Social media</option>
                                            <option value="word_of_mouth">Word of mouth</option>
                                        </select>
                                    </div>

                                    <button type="submit" class="button bg-006CFF">Book A demo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
document.body.append(modal)

$(document).ready(function () {
    // $("form").submit(function (e) {
    //     e.preventDefault();
    //     console.log(e)
    // });
    $('.abourUsDropdown').select2({
        allowClear: true,
        placeholder: "Select"
    });

    $('#modalForm').on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            url: 'https://api.creleasematrix.com/demo',
            type: 'post',
            dataType: 'json',
            data: $('#modalForm').serialize(),
            success: function (data) {
                alert(data)
                console.log(data)
            }
        });
    });

});

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

// Slider
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

// Product Slider
var swiper = new Swiper(".productSliderOnMob", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

let mm = gsap.matchMedia();

mm.add("(min-width: 767px)", () => {
    gsap.from(".whyLeaseMatrixSliderL > *", {
        opacity: 0,
        duration: 1.5,
        stagger: 1,
        scrollTrigger: {
            trigger: ".whyLeaseMatrixSliderL",
            start: "top 60%",
            end: "bottom bottom",
            // markers: true,
            scrub: 5,
        },
    }, "same")

    gsap.from(".whyLeaseMatrixSliderR img", {
        opacity: 0,
        duration: 1.5,
        stagger: 1,
        scrollTrigger: {
            trigger: ".whyLeaseMatrixSliderR",
            start: "top 60%",
            end: "bottom bottom",
            // markers: true,
            scrub: 5,
        },
    }, "same")

    gsap.from(".ourClients .ourClientsInner", {
        opacity: 0,
        duration: 3000,
        scrollTrigger: {
            trigger: ".ourClients .ourClientsInner",
            start: "top 80%",
            end: "bottom bottom",
            // markers: true,
            stagger: 2,
            scrub: 5,
        }
    });

    let howWeWorkDetailsH2 = gsap.utils.toArray(".howWeWorkDetails h2")
    let howWeWorkDetailsP = gsap.utils.toArray(".howWeWorkDetails p")

    howWeWorkDetailsP.forEach((howWeWorkDetailP) => {
        gsap.from(howWeWorkDetailP, {
            opacity: 0,
            x: -50,
            scrollTrigger: {
                trigger: howWeWorkDetailP,
                start: "top 80%",
                end: "bottom bottom",
                // markers: true,
                scrub: 5,
                once: true,
            },
        });
    }, "z");

    howWeWorkDetailsH2.forEach((howWeWorkDetailh2) => {
        gsap.from(howWeWorkDetailh2, {
            opacity: 0,
            x: -50,
            scrollTrigger: {
                trigger: howWeWorkDetailh2,
                start: "top 80%",
                end: "bottom bottom",
                // markers: true,
                scrub: 5,
                once: true,
            },
        });
    }, "z");

    gsap.from(".howWeWorkSlider-pagination .swiper-pagination-bullet", {
        opacity: 0,
        stagger: .5,
        scrollTrigger: {
            trigger: ".howWeWorkSlider-pagination",
            start: "top 60%",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
            once: true,
            yoyo: false
        },
    }, "z")

    const titles = gsap.utils.toArray(".title");
    titles.forEach((title) => {
        gsap.from(title, {
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom bottom",
                // markers: true,
                scrub: 5,
                once: true,
            },
        });
    });

    gsap.from(".howWeWorkR img", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".howWeWorkR",
            start: "top 40%",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
            once: true,
            yoyo: false
        },
    }, "z")

    gsap.from(".whoWeServeGrid .whoWeServeGridInner", {
        opacity: 0,
        duration: 1.5,
        stagger: 2,
        scrollTrigger: {
            trigger: ".whoWeServeGrid",
            start: "top 40%",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
            once: true
        },
    })

    gsap.from(".blogsGrid .blogsGridInner", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 2,
        scrollTrigger: {
            trigger: ".blogsGrid",
            start: "top 40%",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
            once: true
        },
    })

    const heroImages = gsap.utils.toArray(".heroSectionR .heroAfterImage")

    let imgTl = gsap.timeline()
    imgTl.repeat(-1);

    heroImages.forEach((heroImage, index) => {
        imgTl.fromTo(heroImage,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                stagger: 2,
                onComplete: () => {
                    gsap.to(heroImage, {
                        opacity: 0,
                        duration: 1,
                    });
                }

            }
        );
    });




});


gsap.from(".logo", {
    opacity: 0,
    duration: 1.5,
})

gsap.from(".navbar-nav .nav-link", {
    opacity: 0,
    stagger: .5,
})




// Product SLider
const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

gsap.set(photos, { yPercent: 101 })

const allPhotos = gsap.utils.toArray(".desktopPhoto")

ScrollTrigger.create({
    trigger: ".productGallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right"
})

details.forEach((detail, index) => {
    let headline = detail.querySelector("h1");
    let animation = gsap.timeline()
        .to(photos[index], { yPercent: 0 })
        .set(allPhotos[index], { autoAlpha: 0 });

    ScrollTrigger.create({
        trigger: headline,
        start: "top 80%",
        end: "top 50%",
        animation: animation,
        scrub: true,
        markers: false,
        onEnter: () => {
            // Pause scrolling when entering the section
            ScrollTrigger.getById(`section${index}`).pause();
        },
        onLeaveBack: () => {
            // Resume scrolling when leaving back
            ScrollTrigger.getById(`section${index}`).resume();
        }
    });

    // Create a separate ScrollTrigger to control the pause
    ScrollTrigger.create({
        id: `section${index}`,
        trigger: detail,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
            // Pause scrolling when the section is fully in view
            ScrollTrigger.getAll().forEach(st => st.pause());
        },
        onLeave: () => {
            // Resume scrolling when leaving the section
            ScrollTrigger.getAll().forEach(st => st.resume());
        }
    });
});
