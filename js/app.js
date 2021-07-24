const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  // console.log(label.textContent.split(''));
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms;"> ${letter} </span>`
    )
    .join("");

  // console.log(label.innerText);
});
