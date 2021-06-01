import '../styles/Footer.css'
export function Footer(props) {
  return (
  <footer class = "main-footer">

      <nav class="social-nav">
        <a href="https://facebook.com/SorrentobytheSea">
          <i class="fab fa-facebook-square"></i>
          </a>
        <a href="https://instagram.com/SorrentobytheSea">
          <i class="fab fa-instagram-square"></i>
          </a>
        <a href="https://twitter.com/SorrentobytheSea">
          <i class="fab fa-twitter-square"></i>
          </a>
        <a href="https://youtube.com/SorrentobytheSea">
          <i class="fab fa-youtube-square"></i>
          </a>
      </nav>
      <p class="copyright-note">&copy; 2021 Sorrento by the Sea</p>
  </footer>
  )
}


export default Footer


{/* <footer class="main-footer">
        <p class="copyright"><b>&copy; 2021 uhasaqo webdev</b></class>
        <nav class="social-nav">
            <a href="https://twitter.com" , title="Twitter" , alt="Twitter">
                <i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" , title="Instagram" , alt="Instagram">
                <i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com" , title="Facebook" , alt="Facebook">
                <i class="fab fa-facebook"></i></a>
        </nav>
    </footer> */}

/* <script>
window.addEventListener("load", activateStickyFooter);

function activateStickyFooter() {
  adjustFooterCssTopToSticky(); 
  window.addEventListener("resize", adjustFooterCssTopToSticky);
}

function adjustFooterCssTopToSticky() {
  const footer = document.querySelector("#footer");
  const bounding_box = footer.getBoundingClientRect();
  const footer_height = bounding_box.height;
  const window_height = window.innerHeight;
  const above_footer_height = bounding_box.top - getCssTopAttribute(footer);
  if (above_footer_height + footer_height <= window_height) {
    const new_footer_top = window_height - (above_footer_height + footer_height);
    footer.style.top = new_footer_top + "px";
  } else if (above_footer_height + footer_height > window_height) {
    footer.style.top = null;
  }
}

function getCssTopAttribute(htmlElement) {
  const top_string = htmlElement.style.top;
  if (top_string === null || top_string.length === 0) {
    return 0;
  }
  const extracted_top_pixels = top_string.substring(0, top_string.length - 2);
  return parseFloat(extracted_top_pixels); */