document.addEventListener("DOMContentLoaded", function () {
    const header = `
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-divider"></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">About</a></li>
                <li class="nav-divider"></li>
                <li class="nav-item"><a class="nav-link" href="portfolio.html">Portfolio</a></li>
                <li class="nav-divider"></li>
                <li class="nav-item"><a class="nav-link" href="_images/resume.pdf" target="_blank">Resume</a></li>
                <!--<li class="nav-divider"></li>
                <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>-->
                
            </ul>
          </div>
        </div>
      </nav>
  
    `;

    document.getElementById("navigationBar").innerHTML = header;
  });