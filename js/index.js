// Bookmark part

const myImgs = document.querySelectorAll('[data-js="bookmarkimg"]');

myImgs.forEach(img => {
    img.addEventListener("click", function() {
        if (img.src.endsWith("/img/bookmark.png")) {
            img.src = "./img/bookmark_filled.png";
        } else {
            img.src = "./img/bookmark.png";
        }
    });
});

// Show and hide the answer part

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