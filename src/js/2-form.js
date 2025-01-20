const formState = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = { email: "", message: "" };

const localState = JSON.parse(localStorage.getItem(formState));
if (localState) {
  formData = localState;
  document.querySelector('[name="email"]').value = formData.email;
  document.querySelector('[name="message"]').value = formData.message;
}

form.addEventListener('input', onInputSaveToLocalStorage);

form.addEventListener('submit', onSubmitForm);


function onInputSaveToLocalStorage(event) {
  const { name, value } = event.target;
  formData[name] = value.trim(); 

  localStorage.setItem(formState, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log('Form submitted with data:', formData);

  localStorage.removeItem(formState);
  formData = { email: "", message: "" };

  form.reset();
}
