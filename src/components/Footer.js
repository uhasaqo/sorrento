import '../styles/Footer.css'
export function Footer(props) {
  return (
    <footer className="main-footer">

      <p className="copyright"><b> &copy; 2021 Sorrento by the Sea</b><br></br><i>(website, apartment photos)</i></p>
      <p className="address-footer"><b><a href="tel:0435 123 456" label="Click to call us!">0435 123 456</a> / 42 Holyrood Avenue, Sorrento, Victoria 3943</b></p>

      <nav className="social-nav">
        <a href="https://facebook.com/SorrentobytheSea">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/SorrentobytheSea">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/SorrentobytheSea">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com/SorrentobytheSea">
          <i className="fab fa-youtube"></i>
        </a>
      </nav>

    </footer>
  )
}


export default Footer