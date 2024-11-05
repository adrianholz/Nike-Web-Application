import "../App.css";

function Kids() {
  return (
    <div className="product-page-background">
      <aside className="sidebar product-page-sidebar">
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

      <div className="gradient-background product-page-header">
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
      </div>

      <main className="product-page">
        <div
          className="marquee marquee-decorator top-marquee"
          aria-hidden="true"
        >
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
        <div className="product-page-inner">
          <div className="product-page-item">
            <img src="/img/png/kids-1.png" alt="Nike Kids's Shoes" />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <a href="#" className="call-to-action">
              Add to Cart
            </a>
          </div>
          <div className="product-page-item">
            <img src="/img/png/kids-2.png" alt="Nike Kids's Shoes" />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <a href="#" className="call-to-action">
              Add to Cart
            </a>
          </div>
          <div className="product-page-item">
            <img src="/img/png/kids-3.png" alt="Nike Kids's Shoes" />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <a href="#" className="call-to-action">
              Add to Cart
            </a>
          </div>
          <div className="product-page-item">
            <img src="/img/png/kids-4.png" alt="Nike Kids's Shoes" />
            <h2>Nike Air Max Ultra Blaster</h2>
            <span>$89</span>
            <a href="#" className="call-to-action">
              Add to Cart
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
      </main>

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

export default Kids;
