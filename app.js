const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo("h2", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=1");

gsap.to('.top-cloud', {x: -600, duration: 2});
gsap.to('.bottom-cloud', {x: 600, duration: 2});
