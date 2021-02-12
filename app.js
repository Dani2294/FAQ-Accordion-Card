const accordionQuestion = document.querySelectorAll(".question");

// EVENT LISTENER
accordionQuestion.forEach(accordionQuestion => {
    accordionQuestion.addEventListener("click", event => {
        // AUTOMATIC CLOSE OTHERS QUESTION WHEN OPEN
        const currentlyActive = document.querySelector(".question.active");
        if(currentlyActive && currentlyActive !== accordionQuestion) {
            currentlyActive.classList.toggle("active");
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        // TOGGLE ACTIVE CLASS
        accordionQuestion.classList.toggle("active");

        const accordionAnswer = accordionQuestion.nextElementSibling;

        if(accordionQuestion.classList.contains("active")) {
            accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + "px";
        } else {
            accordionAnswer.style.maxHeight = 0;
        }
    })
})