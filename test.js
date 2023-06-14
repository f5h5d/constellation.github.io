const backBtn = document.getElementsByClassName("back-btn")[0];


const goback = () => {
  location.reload();
}
backBtn.addEventListener("click", goBack);