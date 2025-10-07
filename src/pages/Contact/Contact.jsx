// import React, { useState, useRef, useEffect } from "react";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("✅ Message Sent Successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="contact" ref={sectionRef}>
//       <div className={`contact-container ${isVisible ? "animate-container" : ""}`}>
//         <div className={`contact-header ${isVisible ? "animate-header" : ""}`}>
//           <h2>Get in Touch</h2>
//           <p className="contact-subtitle">
//             Send a message and I'll get back to you as soon as possible.
//           </p>
//         </div>

//         <div className={`contact-content ${isVisible ? "animate-content" : ""}`}>
//           <form className="contact-form">
//             {["name","email","message"].map((field, i) => (
//               <div className="form-group" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
//                 {field !== "message" ? (
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     placeholder={field === "name" ? "Your Name" : "Your Email"}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                   />
//                 ) : (
//                   <textarea
//                     name="message"
//                     rows="5"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 )}
//                 <i className={`fas fa-${field === "name" ? "user" : field === "email" ? "envelope" : "pen"}`}></i>
//               </div>
//             ))}
//             <button type="submit" onClick={handleSubmit}>
//               Send Message <i className="fas fa-paper-plane"></i>
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


































import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_q9lu7xo",   // 🔹 Replace with your EmailJS Service ID
        "template_09om01n",  // 🔹 Replace with your Template ID
        formData,
        "1WvRWjdB3IxAu5Xm3"    // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("❌ Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className={`contact-container ${isVisible ? "animate-container" : ""}`}>
        <div className={`contact-header ${isVisible ? "animate-header" : ""}`}>
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Send a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? "animate-content" : ""}`}>
          <form className="contact-form" onSubmit={handleSubmit}>
            {["name","email","message"].map((field, i) => (
              <div className="form-group" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                )}
                <i className={`fas fa-${field === "name" ? "user" : field === "email" ? "envelope" : "pen"}`}></i>
              </div>
            ))}
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"} <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;