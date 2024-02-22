// Show the cards

document.querySelector('[data-js="form"]').addEventListener('submit', function(e) {
	e.preventDefault(); 
	
    const question = document.getElementById('yourQuestion').value;
    const answer = document.getElementById('yourAnswer').value;
	const tags = document.getElementById('yourTags').value.split(' ');

    const tagsHTML = tags.map(tag => `<div class="tags">#${tag}</div>`).join('');

    const cardHTML = `
	<section class="card"><h2 class="card__heading">${question}</h2>
	<img src="./img/bookmark.png" class="bmimg" data-js="bookmarkimg">
	<button class="buttons" data-js="button">Show answer</button>
	<p class="hidden_answer" data-js="answer">${answer}</p>
	<div class="dots">
	${tagsHTML}
	</div>
	</section>
    `;
	
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
	
	const myImg = document.querySelectorAll('[data-js="bookmarkimg"]');

	myImg.forEach(myImg => {
		myImg.addEventListener("click", function() {
			if (myImg.src.endsWith("/img/bookmark.png")) {
				myImg.src = "./img/bookmark_filled.png";
			} else {
				myImg.src = "./img/bookmark.png";
			}
		});
	});

	const showAnswer = document.querySelectorAll('[data-js="button"]');

	showAnswer.forEach(button => {
	  const hiddenAnswer = button.nextElementSibling; 
	
	  hiddenAnswer.style.display = 'none';
	
	  button.addEventListener('click', function() {
		if (hiddenAnswer.style.display === 'none') {
			hiddenAnswer.style.display = 'block';
		  button.textContent = 'Hide Answer';
		} else {
			hiddenAnswer.style.display = 'none';
		  button.textContent = 'Show Answer';
		}
	  });
	});


	document.getElementById('yourQuestion').value = '';
    document.getElementById('yourAnswer').value = '';
    document.getElementById('yourTags').value = '';
	charactersAreaOne.textContent = 'characters left 150';
	yourQuestion.style.backgroundColor = '';
	charactersAreaTwo.textContent = 'characters left 150';
	yourAnswer.style.backgroundColor = '';
});


// Count the characters 

const max = 150;
const submitButton = document.querySelector('[data-js="submit-button"]');
const charactersAreaOne = document.querySelector('[data-js="changetextOne"]')
const charactersAreaTwo = document.querySelector('[data-js="changetextTwo"]')
const yourQuestion = document.querySelector('[data-js="yourquestion"]')
const yourAnswer = document.querySelector('[data-js="youranswer"]')


yourQuestion.addEventListener('input', function() {
	charactersAreaOne.textContent = `${((max - this.value.length) < 2 ? "character" : "characters")} left ${max - this.value.length}`
	yourQuestion.style.backgroundColor = this.value.length >= max ? 'var(--pinkcolor)' : '';

});	 

yourAnswer.addEventListener('input', function() {
	charactersAreaTwo.textContent = `${((max - this.value.length) < 2 ? "character" : "characters")} left ${max - this.value.length}`
	yourAnswer.style.backgroundColor = this.value.length >= max ? 'var(--pinkcolor)' : '';
  
});	 



