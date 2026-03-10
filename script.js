var tl = gsap.timeline();

tl.from("#over1 h1", {
  y: 60,
  opacity: 0,
  duration: 0.8,
})

  .from("#over1 h2", {
    y: 60,
    opacity: 0,
    duration: 0.8,
  })

  .from("#over2 h4", {
    y: 40,
    opacity: 0,
    duration: 0.8,
  });

gsap.from("#part2-text h3", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#part2-text h3",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#part2-text p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#part2-text p",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#page3-part1 p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page3-part1 p",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#page6-part2 h3", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page6-part2 h3",
    scroller: "body",
    start: "top 60%",
    end: "top 90%",
  },
});
gsap.from("#page6-part2 p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page6-part2 p",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#page8-part2 h3", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page8-part2 h3",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#page8-part2 p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page8-part2 p",
    scroller: "body",
    start: "top 70%",
    end: "top 90%",
  },
});

gsap.from("#second p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#second p",
    scroller: "body",
    start: "top 50%",
    end: "top 90%",
  },
});

gsap.from("#third p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#third p",
    scroller: "body",
    start: "top 50%",
    end: "top 90%",
  },
});