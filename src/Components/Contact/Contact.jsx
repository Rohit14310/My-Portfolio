// import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4f81f497-d4b8-40e1-89ba-427c2bee4311");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       alert(res.message);
//     }
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="Contact-title">
//         <h1>Get in Touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="Contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>
//             I'm currently available to take on new projects, so feel free to
//             contact us.
//           </p>
//           <div className="contact-details">
//             <div className="Contact-detail">
//               <img src={mail_icon} alt="" />
//               <p>rohitbora14310@gmail.com</p>
//             </div>
//             <div className="Contact-detail">
//               <img src={call_icon} alt="" />
//               <p>+91 9958517249</p>
//             </div>
//             <div className="Contact-detail">
//               <img src={location_icon} alt="" />
//               <p>New Delhi </p>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//           <label htmlFor=""> Your Name</label>
//           <input type="text" placeholder="Enter Your Name" name="name" />
//           <label htmlFor="">Your Email</label>
//           <input type="email" placeholder="Enter Your Email" name="email" />
//           <label htmlFor="">Write Your Message here</label>
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter Your Message"
//           ></textarea>
//           <button type="submit" className="contact-submit">
//             Submit Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // Get the form element
    const formData = new FormData(form);

    formData.append("access_key", "4f81f497-d4b8-40e1-89ba-427c2bee4311");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset(); // This clears all form fields
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="Contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="Contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            contact us.
          </p>
          <div className="contact-details">
            <div className="Contact-detail">
              <img src={mail_icon} alt="" />
              <p>rohitbora14310@gmail.com</p>
            </div>
            <div className="Contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9958517249</p>
            </div>
            <div className="Contact-detail">
              <img src={location_icon} alt="" />
              <p>New Delhi </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
