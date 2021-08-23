// Automatização para dar likes automaticamente

const next = document.querySelector("a.coreSpriteRightPaginationArrow");
let counter = 0;

function doLike() {
  const like_btn = document.querySelector(
    "article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
  );
  if (like_btn) {
    like_btn.click();
    counter++;
    console.log(`Você já curtiu ${counter} post(s)!`);
  }
  next.click();
}
(function loop() {
  setTimeout(() => {
    doLike();
    loop();
  }, 10000);
})();
