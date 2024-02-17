import './header.css'

export default function Header(){
    return(
      <header id="header " class="header-top">
      <div class="container">
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/home" class="nav-link">Home</a></li>
            <li><a href="#services-section" class="nav-link">Services</a></li>
            <li><a href="#about-section" class="nav-link">About</a></li>
            <li><a href="/resume" class="nav-link">Resume</a></li>
            <li><a href="#portfolio-section" class="nav-link">Projects</a></li>
            <li><a href="https://leitarts.medium.com/" target="_blank" rel="noreferrer" class="nav-link">Blog</a></li>
            <li><a href="#contact-section" class="nav-link">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
        <div class="social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
  
      </div>
    </header>
    );
  }







