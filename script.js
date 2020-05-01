const emailFormDiv = document.querySelector('.email-form-div');
const emailLabel = document.querySelector('#email-label');
const emailForm = document.querySelector('#email');
const submitButton = document.querySelector('.submit-button');
console.log(emailFormDiv);

function handleEmailLabelForm(e) {
  let emailPromptText;
  if (emailPromptText === undefined  ) {
    console.log(emailPromptText);
    emailForm.style.backgroundColor = 'pink';
    emailPromptText = document.createElement('div');
    emailPromptText.classList.add('email-prompt-text');
    emailPromptText.innerText = 'please enter a valid email address';
    emailFormDiv.appendChild(emailPromptText);
    checkEmail();
  }
}

function checkEmail(email) {
  const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return EMAIL_REG.test(email);
}

emailForm.addEventListener('click', handleEmailLabelForm);
