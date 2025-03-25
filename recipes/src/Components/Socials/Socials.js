import './Socials.css';

import dot from '../../assets/Images/Symbols/dot.png';
import follower1 from '../../assets/Images/Followers/follower_1.jpg';
import follower2 from '../../assets/Images/Followers/follower_2.jpg';
import follower3 from '../../assets/Images/Followers/follower_3.jpg';
import follower4 from '../../assets/Images/Followers/follower_4.jpg';
import follower5 from '../../assets/Images/Followers/follower_5.jpg';

const Socials = () => {
    return (
        <section className="Socials-container">

            <div className="followers-container">
                <div className="followers-title">
                    <h4>FOLLOWERS</h4>
                    <img className="dot" src={dot} alt="dot" />
                </div>
                <ul>
                    {[
                        { id: 1, name: "MAIN_Thresh", local: "Cotia, São Paulo", img: follower1 },
                        { id: 2, name: "AuFangirl_066", local: "Bangu, Rio de Janeiro", img: follower2 },
                        { id: 3, name: "Sivir_BelfordRoxo", local: "Jardim Bangu, Rio de Janeiro", img: follower3 },
                        { id: 4, name: "Gnarossauro", local: "Angra, Angra dos Reis", img: follower4 },
                        { id: 5, name: "Bia_Wick", local: "Tijuca, Rio de Janeiro", img: follower5 },
                    ].map((followers) => (
                            <li className="follower-field">
                                <div className="follower-icon" style={{ backgroundImage: `url(${followers.img})` }}></div>
                                <div className="follower-name">
                                    <h5>{followers.name}</h5>
                                    <p>{followers.local}</p>
                                </div>
                            </li>
                    ))}
                </ul>
            </div>
            <aside className="suggestion-container">
                <p>Got a suggestion?</p>
                <p className="suggestion-item">Share it with the community!</p>
                <form className="suggestion-form">
                    <input type="text" placeholder="name" aria-label="recipe name" required />
                        <textarea placeholder="describe your recipe" cols="40" rows="10"
                            aria-label="recipe description" required>
                        </textarea>
                        <button type="submit">submit</button>
                </form>
            </aside>

        </section>
    )
};

export default Socials;