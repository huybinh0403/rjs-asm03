import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_item">
          <h3>CUSTOMER SERVICES</h3>
          <span>Help & Contact Us</span>
          <span>Return & Refunds</span>
          <span>Online Store</span>
          <span>Terms & Conditions</span>
        </div>

        <div className="footer_item">
          <h3>COMPANY</h3>
          <span>What We Do</span>
          <span>Available Services</span>
          <span>Latest Posts</span>
          <span>FAQs</span>
        </div>

        <div className="footer_item">
          <h3>SOCIAL MEDIA</h3>
          <span>Twiiter</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Pinterest</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
