// Automatização para seguir automaticamente

let contador = 0;
let arr = document.querySelectorAll(".L3NKy");
arr.forEach((v, i) => {
  setTimeout(() => {
    if (!v.classList.contains("_8A5w5")) {
      v.click();
      contador++;
      console.log(`Seu bot ja seguiu ${contador} pessoas!`);
    } else {
      console.log("Seu bot já seguiu esta usuario!");
    }
  }, i * 10000);
});
