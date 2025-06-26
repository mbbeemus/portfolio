document.addEventListener("DOMContentLoaded", function () {
    const header = `
      <!--FOOTER-->
      <div class="footer">
    <div class="row" id="footer-text">


      <div class="col-md-3" id="contact">
        <p class="footer-text"><b>Mallory Beemus</b><br>
        James Madison Univeristy<br> Harrisonburg, Virginia<br>
          School of Media Art and Design<br>
          <em>Interactive Design</em><br></p>

      </div>

      <div class="col-md-1" id="bottom-nav">
      <a href="index.html">Home</a><br>
      <a href="about.html">About</a><br>
        <a href="_images/resume.pdf" target="_blank">Resume</a><br>
        <a href="blog.html">Blog</a><br>
        
        
      </div>

      <div class="col-md-2" id="bottom-nav">
         <a href="portfolio.html">Portfolio</a><br>
      <a href="portfolio.html#web">Web Development</a><br>
        <a href="portfolio.html#design">UI Design</a><br>
        <a href="portfolio.html#research">UX Research</a><br>
  
        
      </div>




      <div class="col-md-3" id="links">

        <div id="link-text">
          <a class="footer-link" href="https://www.jmu.edu/smad/" target="_blank">SMAD - School of Media Art and Design</a><br>

          <a href="https://www.jmu.edu/index.shtml" target="_blank">JMU - James Madison Univeristy</a><br>

          <a href="https://www.instagram.com/smadclub_jmu/" target="_blank" >SMAD Club</a><br>

          <a href="https://mbbeemus.github.io/JMUBoarderline/index.html" target="_blank" >Boarderline Ski and Snowboard Club</a><br>
        </div>


      </div>

      <div class="col-md-3" id="socials">

        <div class="footer-icons">
          <a href="resume.html">
            <img src="_images/linkedin-2.svg" alt="LinkedIn Logo" class="footer-icon">
          </a>
          <a href="resume.html">
            <img src="_images/instagram.svg" alt="Instagram Logo" class="footer-icon">
          </a>
          <a href="resume.html">
            <img src="_images/github.svg" alt="Github Logo" class="footer-icon">
          </a>
        </div>


        <p class="footer-text">Email: <a href="mailto:mbbeemus@gmail.com">mbbeemus@gmail.com</a><br>
        Phone: <a href="tel:757-651-6795">(757)651-6795</a></p>

        

      </div>


  </div>
</div>

  
    `;

    document.getElementById("footer").innerHTML = header;
  });