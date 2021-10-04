import React,{useState}from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');   
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    function handleChange(e) {
        // update the name property of formState 
        if (e.target.name === 'email')
        {
        const isValid = validateEmail(e.target.value);
    
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } 
        else 
        {
            if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
            } else {
            setErrorMessage('');
            }
        }
        if (!errorMessage) 
        {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        }
    }
    function handleSubmit(e) {
        e.preventDefault();
}

return (
        <section id ="contact" className="justify-content-center">
        <h1 data-testid="h1tag">Let's Connect</h1>
            <form id="contact-form" className = "justify-content-center" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name}onBlur={handleChange} name="name"/>
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message}  onBlur={handleChange} rows="5" cols="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button data-testid="button" className="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}
export default ContactForm;