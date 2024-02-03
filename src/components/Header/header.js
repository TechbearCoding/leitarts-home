import './header.css'

export default function Header(){
    return(
        <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div>
              <nav class="site-navigation position-relative text-right" role="navigation">
                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="https://leitarts.com" class="nav-link">Home</a></li>
                  <li><a href="#services-section" class="nav-link">Services</a></li>
                  <li><a href="#about-section" class="nav-link">About</a></li>
                </ul>
              </nav>
            </div>
  
            <div class="text-center mx-5">
              <h1 class="m-0 site-logo"><a href="https://leitarts.com">Me</a></h1>
            </div>
  
            <div class="text-left">

              </div>
              <nav class="site-navigation position-relative" role="navigation">
                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="#portfolio-section" class="nav-link">Projects</a></li>
                  <li><a href="https://leitarts.medium.com/" target="_blank" rel="noreferrer" class="nav-link">Blog</a></li>
                  <li><a href="#contact-section" class="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>
  
        </div>
      </header>

    );
}






