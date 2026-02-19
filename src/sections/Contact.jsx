import Button from '../components/Button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");


  const onHandleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted", formData)
      await emailjs.send("service_g6bf0lb", "template_837kdwu", {
        from_name: formData.name,
        to_name: "Thapelo",
        from_email: formData.email,
        message: formData.message,
      }, 
        "2p6BCiiPznxkgt1Wr"
      );
      setIsLoading(false);
      setFormData({name: "", email: "", message: ""})
      showAlertMessage("success", "Message sent successfully");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong");
    };
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
      <div className="flex flex-col items-center justify-center max-w-md p-5
        mx-auto border border-white/10 rounded-2xl bg-primary"
      >
       <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Get In Touch</h2>
          <p className="font-normal text-neutral-400">
            I'm always looking for ways to build better, more secure systems.
            If you have a project in mind or a problem to solve,
            let's talk about how I can help.
          </p>
        </div>
        <form className="w-full" onSubmit={onHandleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-inpt-focus"
              placeholder="e.g. John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={onHandleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-inpt-focus"
              placeholder="e.g. John@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={onHandleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-inpt-focus"
              placeholder="e.g. I'm interested in your project"
              autoComplete="message"
              value={formData.message}
              onChange={onHandleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md
            cursor-pointer bg-radial from-lavender to-royal hover-animation">
             {isLoading ? "...Sending" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
