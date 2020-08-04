window.addEventListener('load', () => {
  const backgroundImg = document.querySelector('img');
  backgroundImg.src = localStorage.getItem("imgData");
});

function handleBackgroundSubmission() {
  const backgroundImg = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    backgroundImg.src = reader.result;
    localStorage.setItem("imgData", reader.result);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}