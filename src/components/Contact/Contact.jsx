import React from 'react';
import "./contact.scss"
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://user-images.githubusercontent.com/79061264/128789704-2568dddf-3635-4b3f-9807-bb9432f8a0d7.jpg" alt="Message me - Photo by Alok Sharma from Pexels" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will be in touch soon :)</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;






// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <section>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <section>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;