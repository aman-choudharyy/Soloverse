

export default function Contact() {
  return (
    <div className="contact-bg">

      <div className="glass-card">

        <h2>Get In Touch 👋</h2>
        <p>Crafted for those who move differently.</p>

        <form className="glass-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="contact" placeholder="Your contact" />




          <textarea placeholder="Write your message..."></textarea>

          <button className="shop-btn">Send Message →</button>

        </form>
        {/* <div className="map-container">
            <iframe
             src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"
            ></iframe>
        </div> */}

      </div>

    </div>
  );
}
