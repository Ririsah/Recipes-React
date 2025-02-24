import './Formulary.css';

const Formulary = () => {
    return (
        <div className="formulary-container">

            <form className="formulary">
                <fieldset>
                    <p>I want to get daily recipes!</p>
                    <input className="name-field" type="text" placeholder="name" />
                    <input className="email-field" type="e-mail" placeholder="e-mail" />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            
        </div>
    )
};

export default Formulary;