document.addEventListener("DOMContentLoaded", () => {
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");

  c1.addEventListener("click", () => {
    // c1.style.display = "none";
    c2.style.display = "flex";
    c2.scrollIntoView({ behavior: "smooth" });
  });

  $(document).ready(() => {
    $(".container-c1")
      .mouseenter(() => {
        $(".card-c1").stop().animate({ top: "-90px" }, "slow");
      })
      .mouseleave(() => {
        $(".card-c1").stop().animate({ top: 0 }, "slow");
      });
  });

  const img = document.getElementById("img");
  let i = 1;
  setInterval(() => {
    img.src = `./assets/${i}.jpg`;

    if (i === 18) {
      i = 1;
    } else {
      i = i + 1;
    }
  }, 1000);
});
