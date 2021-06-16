import '../styles/Footer.css'
export function Footer(props) {
  return (
    <footer className="main-footer">

      <p className="copyright"><b> &copy; 2021 Sorrento by the Sea</b><br></br><i>(Website, apartment photos only)</i></p>
      <p className="address-footer"><b><a href="tel:0435 123 456" title="Click to call us!">0435 123 456 |</a> 42 Holyrood Avenue, Sorrento, VIC 3943</b></p>

      <nav className="social-nav">
        <a href="https://facebook.com/SorrentobytheSea" title="SBTS Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/SorrentobytheSea" title="SBTS Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/SorrentobytheSea" title="SBTS Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com/SorrentobytheSea" title="SBTS YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </nav>

    </footer>
  )
}


export default Footer