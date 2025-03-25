import './Header.css';
import '../Vars/Vars.css';

import twitterLogo from '../../assets/Images/Logo/twitter.png';
import pinterestLogo from '../../assets/Images/Logo/pinterest.png';
import facebookLogo from '../../assets/Images/Logo/facebook.png';

const Header = () => {
    return (
        <header>

            <nav className="header-container">
                <div className="header-wrapper-1">
                    <div className="nav-itens-1">
                        <p className="green">Green.</p>
                        <aside className="icons">
                            <input className="search-nav" type="text" placeholder="looking for something?" />
                            <img className="logo" src={twitterLogo} alt="Twitter Logo" />
                            <img className="logo" src={pinterestLogo} alt="Pinterest Logo" />
                            <img className="logo" src={facebookLogo} alt="Facebook Logo" />
                            
                        </aside>
                    </div>
                </div> 
                <hr />
                <div className="header-wrapper-2">
                    <div className="nav-itens-2">
                        <ul className="nav-options">
                            <li><a href="#" aria-label="Go to Home">Home</a></li>
                            <li><a href="#" aria-label="Learn more About me">About</a></li>
                            <li><a href="#" aria-label="view our recipes">Recipes</a></li>
                            <li><a href="#" aria-label="view new recipes">News</a></li>
                            <li><a href="#" aria-label="view our Recipes">Trending</a></li>
                            <li><a href="#" aria-label="view our Recipes">Sugestion</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    )
};

export default Header;