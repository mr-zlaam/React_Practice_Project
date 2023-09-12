import { useRef, useState } from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';
import { MdEmail, MdFacebook } from 'react-icons/md'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vj5dt5l', 'template_pm8jp08', form.current, '3GiCw6VvqPwjpoZUi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleInputChange = () => {
        const nameInput = form.current['user_name'];
        const emailInput = form.current['user_mail'];
        const messageInput = form.current['message'];

        setIsButtonDisabled(!nameInput.value || !emailInput.value || !messageInput.value);
    };

    return (
        <>
            <section className="contact">
                <div className="contact_controller bg">
                    <div className="form_controller">
                        <form action="" className='inputs ' ref={form} onSubmit={sendEmail}>

                            <div className="input_boxes">
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    placeholder='Enter Your Name'
                                    autoComplete='off'
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className="input_boxes">
                                <input
                                    type="email"
                                    name="user_mail"
                                    id="mail"
                                    placeholder='Enter Your Email'
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                            </div>
                            <div className="input_boxes">
                                <textarea
                                    name="message"
                                    id="textarea"
                                    cols="30"
                                    rows="5"
                                    placeholder='Share Your Thoughts'
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="button rounded-2xl w-fit m-auto hover: mt-3 active:-80 cursor-pointer">
                                <button value="send" disabled={isButtonDisabled}>
                                    {isButtonDisabled ? 'Fill the Form' : 'Send'}
                                </button>
                            </div>
                        </form>

                        <div className="icons ">
                            <div className="icon_child">
                                <Link className='icon_customize' to="mailto:mrzalaam@gmail.com" target='_blank'>
                                    <MdEmail size={20} className='color_icon' />
                                </Link>
                            </div>
                            <div className="icon_child">
                                <Link className='icon_customize' to="https://web.facebook.com/profile.php?id=100052341221564" target='_blank'>
                                    <MdFacebook size={20} className='color_icon' />
                                </Link>
                            </div>
                            <div className="icon_child">
                                <Link className='icon_customize' to="https://www.linkedin.com/in/%D9%85%D9%84%D9%83-%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85-696066266/" target='_blank'>
                                    <RiLinkedinBoxFill size={20} className='color_icon' />
                                </Link>
                            </div>
                            <div className="icon_child">
                                <Link className='icon_customize' to="https://github.com/zalaam-0" target='_blank' >
                                    <BsGithub size={20} className='color_icon' />
                                </Link>
                            </div>
                            <div className="icon_child">
                                <Link className='icon_customize' to="https://www.instagram.com/info_zlaam/" target='_blank'>
                                    <BsInstagram size={20} className='color_icon' />
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div className="image">
                        <h1 className='font-extrabold text-2xl '>Let's have some chat</h1>
                        <img src="./lawliet.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;
