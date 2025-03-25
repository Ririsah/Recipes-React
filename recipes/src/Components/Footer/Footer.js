import './Footer.css';

const Footer = () => {
    return (
        <footer>

            <div className="footer-container">
                <div className="footer-tittle">
                    <h4>GREEN.</h4>
                </div>
                <hr />
                <div className="footer-services">
                    <ul className="service">
                        <h5>Company</h5>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact me</a></li>
                        <li><a className="num" href="tel:+5521912345678">+ (21) 9 1234 5678</a></li>
                        <li><a className="num" href="tel:+5521987654321">+ (21) 9 8765 4321</a></li>
                    </ul>
                    <ul className="service">
                        <h5>Services</h5>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Suggest a recipe</a></li>
                    </ul>
                    <ul className="service">
                        <h5>Account</h5>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">New Password</a></li>
                    </ul>
                    <ul className="service">
                        <h5>Social</h5>
                        <li><a className="social" href="#">Twitter</a></li>
                        <li><a className="social" href="#">Facebook</a></li>
                        <li><a className="social" href="#">Youtube</a></li>
                    </ul>
                </div>
                <hr />
                <p><strong>©2024 Theme by</strong> CatLovers group | <strong>All Rights Reserved</strong>  | <strong>Powered by</strong> WordPress</p>
            </div>

        </footer>
    )
};

export default Footer;