import  throttle  from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
import '../03-feedback.html';

const formData={};

const refs = {
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const myForm = document.querySelector('.feedback-form');

populateMassageOutput();

myForm.addEventListener('submit', throttle(onFormSubmit, 500));
myForm.addEventListener('input', throttle(onInput, 500));

function populateMassageOutput()
{    
    const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedMessage)
    {        
        refs.email.value=savedMessage.email;
        refs.textarea.value=savedMessage.message;
    }   
}

function onFormSubmit(e)
{
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function onInput(e)
{    
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));    
}