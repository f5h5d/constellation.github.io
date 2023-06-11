const finger1 = document.getElementsByClassName("finger1")[0];
const finger2 = document.getElementsByClassName("finger2")[0];
const finger3 = document.getElementsByClassName("finger3")[0];
const finger4 = document.getElementsByClassName("finger4")[0];
const finger5 = document.getElementsByClassName("finger5")[0];
const finger6 = document.getElementsByClassName("finger6")[0];
const backdrop = document.getElementsByClassName("backdrop")[0];

const changeColor = (x) => {
  if (x == "1") { finger1.src = "images/finger1W.png"; document.getElementsByClassName("one-detail")[0].classList.remove("hide");}
  if (x == "2") { finger2.src = "images/finger2W.png"; document.getElementsByClassName("two-detail")[0].classList.remove("hide");}
  if (x == "3") { finger3.src = "images/finger3W.png"; document.getElementsByClassName("three-detail")[0].classList.remove("hide");}
  if (x == "4") { finger4.src = "images/finger4W.png"; document.getElementsByClassName("four-detail")[0].classList.remove("hide");}
  if (x == "5") { finger5.src = "images/finger5W.png"; document.getElementsByClassName("five-detail")[0].classList.remove("hide");}
  if (x == "6") { finger6.src = "images/finger6W.png"; document.getElementsByClassName("six-detail")[0].classList.remove("hide");}
  backdrop.classList.remove("hide");
}

const changeColorBack = (x) => {
  if (x == "1") { finger1.src = "images/finger1.png"; document.getElementsByClassName("one-detail")[0].classList.add("hide");}
  if (x == "2") { finger2.src = "images/finger2.png"; document.getElementsByClassName("two-detail")[0].classList.add("hide");}
  if (x == "3") { finger3.src = "images/finger3.png"; document.getElementsByClassName("three-detail")[0].classList.add("hide");}
  if (x == "4") { finger4.src = "images/finger4.png"; document.getElementsByClassName("four-detail")[0].classList.add("hide");}
  if (x == "5") { finger5.src = "images/finger5.png"; document.getElementsByClassName("five-detail")[0].classList.add("hide");}
  if (x == "6") { finger6.src = "images/finger6.png"; document.getElementsByClassName("six-detail")[0].classList.add("hide");}
  backdrop.classList.add("hide");
}


const direct = () => {
  location.assign("pages/1.html");
  console.log('hi')
}


finger1.addEventListener("mouseover", () => changeColor("1"))
finger2.addEventListener("mouseover", () => changeColor("2"))
finger3.addEventListener("mouseover", () => changeColor("3"))
finger4.addEventListener("mouseover", () => changeColor("4"))
finger5.addEventListener("mouseover", () => changeColor("5"))
finger6.addEventListener("mouseover", () => changeColor("6"))

finger1.addEventListener("mouseout", () => changeColorBack("1"))
finger2.addEventListener("mouseout", () => changeColorBack("2"))
finger3.addEventListener("mouseout", () => changeColorBack("3"))
finger4.addEventListener("mouseout", () => changeColorBack("4"))
finger5.addEventListener("mouseout", () => changeColorBack("5"))
finger6.addEventListener("mouseout", () => changeColorBack("6"))


finger1.addEventListener("click", direct)