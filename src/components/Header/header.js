import './header.css'

export default function Header(){
    return(
      <div class="header">
        <div class="header-nav">
  
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="#services-section" class="nav-link">Services</a></li>
              <li><a href="#about-section" class="nav-link">About</a></li>
              <li><a href="/resume" class="nav-link">Resume</a></li>
              <li><a href="#portfolio-section" class="nav-link">Projects</a></li>
              <li><a href="https://leitarts.medium.com/" target="_blank" rel="noreferrer" class="nav-link">Blog</a></li>
              <li><a href="#contact-section" class="nav-link">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
  
        </div>
    </div>
    );
  }







