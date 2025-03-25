import './Recipes.css';

import dot from '../../assets/Images/Symbols/dot.png';
import rating1 from '../../assets/Images/Symbols/rating.png';
import rating2 from '../../assets/Images/Symbols/rating2.png';
import receita1 from '../../assets/Images/Recipes/receita_1.png';
import receita2 from '../../assets/Images/Recipes/receita_2.png';
import receita3 from '../../assets/Images/Recipes/receita_3.png';
import receita4 from '../../assets/Images/Recipes/receita_4.png';
import receita5 from '../../assets/Images/Recipes/receita_5.png';
import receita6 from '../../assets/Images/Recipes/receita_6.png';
import receita7 from '../../assets/Images/Recipes/receita_7.png';
import receita8 from '../../assets/Images/Recipes/receita_8.png';
import receita9 from '../../assets/Images/Recipes/receita_9.png';


const Recipes = () => {
    return (
        <section className="recipes-container">

            <div>
                <div className="search-bar">
                    <input
                        placeholder="Type to search for a recipe..."
                        type="text"
                    />
                    <button>Search</button>
                </div>
                <div className="search-bar-information">
                    <p>More than <strong>2,540</strong> recipes registered.</p>
                </div>
            </div>
            <div className="recipes-grid">
                {[
                    { id: 1, name: "Fit Pasta", img: receita1, rating: rating1 },
                    { id: 2, name: "Fit Mousse", img: receita2, rating: rating2 },
                    { id: 3, name: "Fit Pizza", img: receita3, rating: rating1 },
                    { id: 4, name: "Fit BBQ", img: receita4, rating: rating2 },
                    { id: 5, name: "Fit Steak", img: receita5, rating: rating1 },
                    { id: 6, name: "Fit Salad", img: receita6, rating: rating1 },
                    { id: 7, name: "Fit Snack", img: receita7, rating: rating2 },
                    { id: 8, name: "Fit Salad", img: receita8, rating: rating1 },
                    { id: 9, name: "Fit Salad", img: receita9, rating: rating2 },
                ].map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>
                        <div className="raiting-section">
                            <img className="dot" src={dot} alt="dot" />
                            <img className="raiting" src={recipe.rating} alt="recipe rating" />
                        </div>
                        <div className="recipe-image" style={{ backgroundImage: `url(${recipe.img})` }}></div>
                        <div className="description-section">
                            <h4>{recipe.name}</h4>
                            <hr />
                            <p>Lorem Ipsum is simply dummy text.</p>
                        </div>
                        <div className="btn-section">
                            <button>View</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Recipes;
