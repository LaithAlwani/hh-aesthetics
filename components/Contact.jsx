import { toast } from "react-hot-toast";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function Contact() {
  const userId = process.env.NEXT_PUBLIC_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.name.value &&
      e.target.email.value &&
      e.target.title.value &&
      e.target.message.value
    ) {
      emailjs.sendForm(serviceId, templateId, e.target, userId).then(
        (result) => {
          if (result.status === 200) {
            toast.success("Request sent!");
            e.target.reset();
          }
        },
        (error) => {
          toast.error("Request Failed");
        }
      );
    } else {
      toast.error("Fill all fields!");
    }
  };

  return (
    <div className="section" id="contact">
      <h2>Contact Us</h2>
      <div className="card">
        <div className="contact-icons">
          <MdOutlineLocationOn />
          <p>
            9-3780 Fallowfield Rd.
            <br /> Ottawa, ON. K2J 1A1
          </p>
          <MdLocalPhone />
          <p>613 820 3694</p>
          <MdOutlineMail />
          <p>HHestheticsottawa@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="title" placeholder="Title" />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
