import './Cover.css';
import '../Vars/Vars.css';

const Cover = () => {
    return (
        <div className="cover-container">

            <div className="cover">
                <section className="text-cover">
                    <h1>GREEN.</h1>
                    <h2>Fresh and organic recipes</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original form, accompanied by English
                        versions from the 1914 translation by H. Rackham.
                    </p>
                    <div>
                        <div className="Eliza-photo" aria-label="Eliza's photo"></div>
                        <p className="Eliza-card">Eliza Dawson</p>
                    </div>
                </section>
            </div>
            
        </div>
    )
};

export default Cover;