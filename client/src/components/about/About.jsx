import './about.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-bg-box"></div>

      <div className="about-container">
        <div className="row">
          <div className="about-box">
            <h2>Who We Are 🧐</h2>
            <p>
                At Bookstore, we are dedicated to connecting book lovers from
                all walks of life. Whether you`re a student searching for
                textbooks, a collector of rare editions, or simply a reader
                looking for your next favorite book, we provide a simple,
                affordable, and enjoyable way to buy and sell books online.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Mission 📚</h2>
            <p>
                We believe in the power of books to educate, inspire, and bring
                people together. Our mission is to create a platform where books
                find new homes, reducing waste and promoting sustainable reading
                habits.
            </p>
          </div>

          <div className="about-box">
            <h2>What We Offer 🔄</h2>
            <ul>
              <li>📚 A wide selection of books across different genres.</li>
              <li>🔄 An easy book exchange system to swap books with fellow readers.</li>
              <li>💰 A buy & sell marketplace for affordable book deals.</li>
              <li>🌱 A sustainable approach to book ownership.</li>
            </ul>
          </div>
        </div>

        
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.1881364411975!2d23.367307976307195!3d42.63617137116866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86b9b1dd4731%3A0xa88a159830c07cd1!2sAmerican%20collegeMladost%2C%20Aleksandar%20Malinov%20Boulevard%2078%2C%201712%20Sofia!5e0!3m2!1sen!2sbg!4v1743584009660!5m2!1sen!2sbg"
            width="600"
            height="450"
            style={{
              width: "100%",
              height: "100%",
              border: "0",
              display: "block"
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bookstore Location" 
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
