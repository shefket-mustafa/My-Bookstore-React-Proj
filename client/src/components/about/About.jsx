export default function About() {
  return (
    <section className="about_section bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-stretch"> {/* Ensures equal heights */}
          
          
          <div className="col-md-4 d-flex">
            <div className="detail-box text-left p-4 h-100 d-flex flex-column">
              <h2 className="text-dark">Who We Are 🧐</h2>
              <p className="text-muted flex-grow-1">
                At Bookstore, we are dedicated to connecting book lovers from all walks of life. Whether you’re a student searching for textbooks, a collector of rare editions, or simply a reader looking for your next favorite book, we provide a simple, affordable, and enjoyable way to buy, sell, and exchange books online.
              </p>
            </div>
          </div>

          
          <div className="col-md-4 d-flex">
            <div className="detail-box text-center p-4 h-100 d-flex flex-column">
              <h2 className="text-dark">Our Mission 📚</h2>
              <p className="text-muted flex-grow-1">
                We believe in the power of books to educate, inspire, and bring people together. Our mission is to create a platform where books find new homes, reducing waste and promoting sustainable reading habits.
              </p>
            </div>
          </div>

          
          <div className="col-md-4 d-flex">
            <div className="detail-box text-right p-4 h-100 d-flex flex-column">
              <h2 className="text-dark">What We Offer 🔄</h2>
              <ul className="list-unstyled text-muted flex-grow-1 mt-3">
                <li>📚 A wide selection of books across different genres.</li>
                <li>🔄 An easy book exchange system to swap books with fellow readers.</li>
                <li>💰 A buy & sell marketplace for affordable book deals.</li>
                <li>🌱 A sustainable approach to book ownership, reducing waste and giving books a second life.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
