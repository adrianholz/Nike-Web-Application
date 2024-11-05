import "../App.css";

function App() {
  return (
    <div>
      <aside className="sidebar anime-left">
        <a href="/">
          <img src="/img/svg/logo.svg" id="logo" alt="Nike Logo" />
        </a>
        <p>Style takes over</p>
        <div className="header-icons">
          <img src="/img/png/search.png" alt="Search Icon" />
          <img src="/img/png/heart.png" alt="Favorites Icon" />
          <img src="/img/png/bag.png" alt="Bag Icon" />
        </div>
      </aside>
      <a href="#" className="contact-us-link">
        <div className="contact-us">
          <img src="/img/png/chat.png" alt="Chat" />
          <p>Contact us</p>
          <p>Click to open a chat</p>
        </div>
      </a>

      <div className="gradient-background">
        <header>
          <nav aria-label="Header Navigation">
            <ul>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/kids">Kids</a>
              </li>
              <li>
                <a href="/sale">Sale</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="main-inner">
            <div className="main-content">
              <h1>Air Max</h1>
              <h2>Nike Air Max 90</h2>
              <p>
                Walking on clouds above the noise, the
                <strong>Air Max 90</strong> blends timeless design with
                cushioned comfort. Sporting a fast-paced look, wavy mudguard and
                Nike Air, this classic icon hit the scene in '87 and continues
                to be the soul of the franchise today.
              </p>
              <a href="#" className="call-to-action">
                Shop now
              </a>
            </div>
            <img src="/img/png/airmax.png" alt="Air Max 90" />
          </div>
        </main>
      </div>

      <section className="products">
        <h2>
          <span>New Arrivals</span>
        </h2>
        <div className="products-inner">
          <div className="collection">
            <div className="product">
              <div>
                <h3>Mid Blazer</h3>
              </div>
              <img src="/img/png/shoe1.png" alt="Mid Blazer" />
            </div>
            <div className="product">
              <div>
                <h3>Fly Zoom</h3>
              </div>
              <img src="/img/png/shoe2.png" alt="Fly Zoom" />
            </div>
            <div className="product">
              <div>
                <h3>Air Max</h3>
              </div>
              <img src="/img/png/shoe3.png" alt="Air Max" />
            </div>
            <div className="product">
              <div>
                <h3>Air Force</h3>
              </div>
              <img src="/img/png/shoe4.png" alt="Air Force" />
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="marquee marquee-decorator" aria-hidden="true">
          <div
            className="marquee-content"
            // style="animation: scroll 30s linear infinite"
          >
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
          </div>
          <div
            className="marquee-content"
            // style="animation: scroll 30s linear infinite"
          >
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
          </div>
        </div>
        <div className="categories-inner">
          <div>
            <h3>Nike for Men</h3>
            <a href="/men" className="call-to-action">
              Shop Now
            </a>
          </div>
          <div>
            <h3>Nike for Women</h3>
            <a href="/women" className="call-to-action">
              Shop Now
            </a>
          </div>
          <div>
            <h3>Nike for Kids</h3>
            <a href="/kids" className="call-to-action">
              Shop Now
            </a>
          </div>
        </div>
        <div className="marquee marquee-decorator" aria-hidden="true">
          <div
            className="marquee-content"
            // style="animation: scroll 30s linear infinite"
          >
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
          </div>
          <div
            className="marquee-content"
            // style="animation: scroll 30s linear infinite"
          >
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
            <span>NIKE </span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <img src="/img/svg/logo-white.svg" alt="Nike Logo White" />
          <div>
            <h2>Links</h2>
            <nav aria-label="Footer Navigation">
              <ul>
                <li>
                  <a href="/men">Nike for Men</a>
                </li>
                <li>
                  <a href="/women">Nike for Women</a>
                </li>
                <li>
                  <a href="/kids">Nike for Kids</a>
                </li>
                <li>
                  <a href="/sale">Items on Sale</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>About Nike</h2>
            <p>
              Inspiring the world's athletes, Nike delivers innovative products,
              experiences and services.
            </p>
          </div>
        </div>
        <div className="copy">
          <p>
            Nike &copy; All rights reserved. Developed by
            <a
              href="https://www.andrix.design"
              target="_blank"
              rel="noreferrer"
            >
              Andrix Design
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
