// import React from 'react'
// import { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init('kqj16tOqrb3N1eFwA')
// export default function Contact() {
//     const [subject, setSubject] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [emailSent, setEmailSent] = useState(false);
//     const [error, setError] = useState('')

//     const submit = () => {
//         console.log({ subject, message, email });
//         if (subject === '' || message === '' || email === '') {
//             setError('Không được bỏ trống');
//         }
//         if (subject && email && message) {
//             // TODO - send mail
//             const serviceId = 'huy_tg_178';
//             const templateId = 'template_x585lei';
//             // const userId = 'huy-178';
//             const templateParams = {
//                 subject,
//                 email,
//                 message
//             };

//             emailjs.send(serviceId, templateId, templateParams)
//                 .then(response => console.log(response))
//                 .then(error => console.log(error));

//             setSubject('');
//             setEmail('');
//             setMessage('');
//             setEmailSent(true);


//         } else {
//             return
//         }
//     }
//     console.log({ subject, message, email });
//     return (
//         <section className="bg-white dark:bg-gray-900 w-full mx-auto">
//             <div className="pt-40 py-16 lg:py-19 px-4 mx-auto max-w-screen-md">
//                 <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white uppercase">Contact me</h2>
//                 <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//                     This form using emailjs so can send email to me! Regard
//                 </p>
//                 <form action="#" className="space-y-8 w-full">
//                     <div>
//                         <label
//                             htmlFor="email"
//                             className="contact-lable dark:text-gray-300">Your email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:primary-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
//                             placeholder="name@flowbite.com" required
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {<p className='text-error'>{error}</p>}
//                     </div>
//                     <div>
//                         <label
//                             htmlFor="subject"
//                             className="contact-lable dark:text-gray-300">Subject</label>
//                         <input
//                             type="text"
//                             id="subject"
//                             className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
//                             placeholder="Let us know how we can help you" required
//                             onChange={(e) => setSubject(e.target.value)}
//                         />
//                         {<p className='text-error'>{error}</p>}
//                     </div>
//                     <div className="sm:col-span-2">
//                         <label
//                             htmlFor="message"
//                             className="contact-lable dark:text-gray-400">Your message</label>
//                         <textarea
//                             id="message"
//                             rows={6}
//                             className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
//                             placeholder="Leave a comment..." defaultValue={""}
//                             onChange={(e) => setMessage(e.target.value)}
//                         />
//                         {<p className='text-error'>{error}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                         onClick={submit}
//                     >Send message</button>
//                 </form>
//             </div>
//             {
//                 // emailSent ?  : null
//             }
//         </section>
//     )
// }

import React, { Component } from 'react'
import Swal from 'sweetalert2';
import TitleHeader from '../components/TitleHeader';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './StylePage/Contact.scss';
init('kqj16tOqrb3N1eFwA')
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: '',
                subject: '',
                message: ''

            },
            errors: {
                email: '',
                subject: '',
                message: ''
            }
        }
    }

    handleChangeValue = (event) => {
        let { name, value } = event.target;
        let newValue = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors };
        if (value.trim() === '') {
            newErrors[name] = name + ' is required'
        }
        else {
            newErrors[name] = '';
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name === 'email') {
            if (!re.test(value)) {
                newErrors[name] = name + ' in valid!';
            }
            else {
                newErrors[name] = ''

            }
        }
        // set lại state để render lại giao diện
        this.setState({ values: newValue, errors: newErrors })
    }
    hanldeSubmit = e => {
        e.preventDefault()
        const { values, errors } = this.state;
        let valid = true;
        let profileContent = '';

        for (let key in values) {
            if (values[key] === '') {
                valid = false;
                // this.setState({ show: false })
            }
            profileContent += `<p className='text-left' ><b>${key}: </b>${values[key]}</p>`
        }

        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false;
                // this.setState({ show: false })
            }
        }

        if (!valid) {
            Swal.fire({
                icon: 'error',
                title: 'Error...'
            })
        }
        else {

            const { subject, email, message } = this.state.values
            if (subject && email && message) {

                // TODO - send mail
                const serviceId = 'huy_tg_178';
                const templateId = 'template_x585lei';

                // const userId = 'huy-178';
                const templateParams = {
                    subject: subject,
                    user_email: email,
                    message: message
                };

                emailjs.send(serviceId, templateId, templateParams)
                    .then(response => Swal.fire({
                        icon: 'success',
                        title: 'Congratulation!!!',
                        html: response.text,
                    }))
                    .then(error => console.log(error));


            }
        }

    }

    render() {
        const { values, errors } = this.state;
        return (
            <>
                <form className='main-bg-color contact-us' style={{ width: '700px', margin: '0 auto', padding: '100px 0' }} >
                    <TitleHeader titleHeader={'Contact with me'} />
                    <div className="container" style={{ borderRadius: '10px' }}>
                        <div className="row pt-2">
                            <div className="col-md-12" >
                                <div className="group">
                                    <label className="contact-lable dark:text-gray-300">Email</label>
                                    <input
                                        className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                                        type="text"
                                        value={values.email} required style={{ width: '100%', }} name='email' onChange={
                                            this.handleChangeValue
                                        } />
                                    <span className="highlight" />
                                    <span className="bar bar-email" />
                                    <p className='text-danger'>{errors.email}</p>
                                </div>
                            </div>
                            <div className="col-md-12" >
                                <div className="group">
                                    <label className="contact-lable dark:text-gray-300">Subject</label>
                                    <input
                                        className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                                        type="text"
                                        value={values.subject} required style={{ width: '100%', }} name='subject' onChange={
                                            this.handleChangeValue
                                        } />
                                    <span className="highlight" />
                                    <span className="bar bar-email" />
                                    <p className='text-danger'>{errors.subject}</p>
                                </div>
                            </div>
                            <div className="col-md-12" >
                                <div className="group">
                                    <label className="contact-lable dark:text-gray-300">Message</label>
                                    <textarea cols={20} type="text" value={values.message} required style={{ width: '100%', }} name='message' onChange={
                                        this.handleChangeValue
                                    } />
                                    <span className="highlight" />
                                    <span className="bar bar-email" />
                                    <p className='text-danger'>{errors.message}</p>
                                </div>
                            </div>

                            <div className="col-md-12 mt-10">
                                <button
                                    className="btn btn-dark text-white text-center py-3 text-uppercase"
                                    style={{ width: '100%', letterSpacing: '2px', fontSize: '24px' }}
                                    onClick={(e) => this.hanldeSubmit(e)}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
