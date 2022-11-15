import { useRef} from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();
    // formObject.reset();
    if (form.current[0].value.length > 0 && form.current[1].value.length > 0) {
      emailjs
        .sendForm(
          "service_e0iih9e",
          "template_bkrfm9s",
          form.current,
          "BpalnPa0xN3IZ7sON"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Thankyou !");

            console.log("message sent succesfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please enter correct input!");
    }
  };





  return (
    <div className="Contacts" id="contacts">
      <h1
        style={{
          textDecoration: "underline",
        }}
      >
        Contacts :{" "}
      </h1>
      <div className="email_setup">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input placeholder="Enter your name:" type="text" name="user_name" />
          <br />
          <label>Email</label>
          <input
            placeholder="Enter your mail-address:"
            type="email"
            name="user_email"
          />
          <br />
         { /*<label className="labelmsg">Message</label>*/}

          <textarea name="message" defaultValue={"hello.."} />
          <br />
          <input id="send_btn" type="submit" value="Send" />
        </form>
      </div>
      <div className="contacts_details">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <h1>Phone : 94796-92888</h1>
          <br />
          <br />

          <i class="fa-solid fa-at"></i>
          <h1>Email : stymngrya@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
