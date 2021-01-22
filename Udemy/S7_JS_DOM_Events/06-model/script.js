'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelector only select the first element
// const btnsOpenModel = document.querySelector('.show-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

for(let i = 0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', function() {
        // inside remove(), REMEMBER to only pass in class name. the dot is only for selecting a class.
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};

// DRY version
btnCloseModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})


// NON-DRY version 1
function hide(item){
    item.addEventListener('click', function() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}
hide(btnCloseModal);
hide(overlay);


// NON-DRY version 2 ***
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard events are a type of global events
// document.addEventListener('keydown');
// 3 types on listener for keyboard - keypress, keydown, keyup
// keypress is as long as the key is down
// keydown is the moment it goes down

// to find out what key is pressed add e as the input of the function
document.addEventListener('keydown', function(e) {
    // console.log('a key was pressed');
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        // checking if element has class 
            closeModal();
    }
});
