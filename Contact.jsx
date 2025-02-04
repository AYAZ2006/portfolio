import React from 'react';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1d1a3854-d4dd-44be-99f7-7c1a810c00cd");
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
    if(res.success){
      console.log("Success:", res);
      alert("Message sent successfully!");
      event.target.reset();
    }
    else{
      console.error("Error:", res);
      alert("Failed to send message. Try again.");
    }
  }
  return (
    <div id="contactleft">
      <div id="given">
        <div className="call">
          <img src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png" alt="phone_no" className="phone"/>
          <h3>7075118027</h3>
        </div>
        <div className="call">
          <img src="https://cdn-icons-png.flaticon.com/128/7286/7286142.png" alt="email_id" className="phone"/>
          <h3>hajrasultana7075@gmail.com</h3>
        </div>
        <div className="call">
          <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="location_id" className="phone"/>
          <h3>Hyderabad, B.H.E.L</h3>
        </div>
      </div>
      <div id="input">
        <h1 id="tagline">LET'S CONNECT</h1>
        <form onSubmit={onSubmit}>
          <div className="in">
            <input type="text" name="name" placeholder="Your Name" id="in1" required />
          </div>
          <div className="in">
            <input type="email" name="email" placeholder="Your Email" id="in2" required />
          </div>
          <div className="in">
            <textarea name="message" placeholder="Your Message" id="in3" required></textarea>
          </div>
          <div className="in">
            <button type="submit" id="enter">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
