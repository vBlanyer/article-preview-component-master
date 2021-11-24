const buttonShare = document.querySelector(".card__share-icon");
const cardShareContent = document.querySelector(".card__share-content");
const cardInfoUser = document.querySelector(".card__info-user");
const cardShare = document.querySelector(".card__share");
const cardFooter = document.querySelector(".card__footer");

buttonShare.addEventListener("click", ()=>{
	cardInfoUser.classList.toggle("card__hidden");
	cardShareContent.classList.toggle("card__hidden");
	cardFooter.classList.toggle("bg-dark");
	cardShare.classList.toggle("card__flex-end");
});