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
});


// Count the characters 

const max = 150;
const form = document.querySelector('[data-js="form"]');
const textareas = document.querySelectorAll('textarea');
const infos = document.querySelectorAll('[data-js="info"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const charactersAreaOne = document.querySelector('[data-js="changetextOne"]')
const charactersAreaTwo = document.querySelector('[data-js="changetextTwo"]')

textareas.forEach((textarea, index) => {
  infos[index].textContent = max - textarea.value.length;

  textarea.addEventListener('input', function() {
    infos[index].textContent = max - this.value.length; 
    textarea.style.backgroundColor = this.value.length >= max ? 'var(--pinkcolor)' : '';
});
});


// charactersAreaOne.addEventListener('change', function() {

// 	if (infos[index].textContent < 2) {
// 		charactersAreaOne.textContent = "character left " + (max - this.value.length); 
// 	} else {
// 		charactersAreaOne.textContent = "characters left " + (max - this.value.length);
// 	}		  	 
	
// });

form.addEventListener('submit', (event) => {
	event.preventDefault();
  
	textareas.forEach((textarea, index) => {
	  textarea.value = '';
	  infos[index].textContent = max;
	  textarea.style.backgroundColor = '';
	});
  });
  