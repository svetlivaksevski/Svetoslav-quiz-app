// Show the cards

document.querySelector('[data-js="form"]').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const question = document.getElementById('yourQuestion').value;
    const answer = document.getElementById('yourAnswer').value;
    const tags = document.getElementById('yourTags').value;


    const cardHTML = `
	  <section class="card"><h2 class="card__heading">${question}</h2>
	  <img src="./img/bookmark.png" class="bmimg" data-js="bookmarkimg">
	  <button class="buttons" data-js="button">Show answer</button>
	  <p class="hidden_answer" data-js="answer">${answer}</p>
	  <div class="dots">
			<span class="tags">#${tags}</span> 
		</div>
	  </section>
    `;


    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);

	document.getElementById('yourQuestion').value = '';
    document.getElementById('yourAnswer').value = '';
    document.getElementById('yourTags').value = '';
});


// Count the characters 

const max = 150;
const textareas = document.querySelectorAll('textarea');
const infos = document.querySelectorAll('[data-js="info"]');

textareas.forEach((textarea, index) => {

  infos[index].textContent = max - textarea.value.length;

  textarea.addEventListener('input', function() {
    infos[index].textContent = max - this.value.length;
});
});