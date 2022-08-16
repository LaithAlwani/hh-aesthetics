import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    const request = {
      name,
      email,
      message,
    };
    e.preventDefault();
    console.log(request);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <h2>Let's Get in Touch</h2>
      <div className="card">
        <div className="contact-icons">
          <MdOutlineLocationOn />
          <p>9-3780 Fallowfield Rd Ottawa, ON. K2J 1A1</p>

          <MdLocalPhone />
          <p>613 820 3694</p>

          <MdOutlineMail />
          <p>HHestheticsottawa@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
