const mailInput = document.querySelector('.mail__input');
const mailBtn = document.querySelector('.mail__btn');
const mailInputError = document.querySelector('.mail__input__error');
const regaxContent = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

mailBtn.addEventListener('click', () =>{
  if(mailInput.value.match(regaxContent)){
    console.log(mailInput.value);
    mailInput.value = '';
    mailInputError.innerHTML = '';
  }
  else{
    mailInputError.innerHTML = 'Place enter a valid email address';
  }
})
