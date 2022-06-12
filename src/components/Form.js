

const Form = ({ firtsName, setFirstName }) => {
    
    const onSubmit = (e)=>{
        e.preventDefault()
        setFirstName(e.target['firstnameForm'].value)
    }
    return (
        <div>
            <div className="writeFirstname">Pour en savoir plus, merci d'indiquer votre prénom</div>
            <form onSubmit={onSubmit} className='firstNameForm'>
                <input type='text' name='firstnameForm' placeholder='Votre Prénom' defaultValue=""></input>
                <button className='buttonSubmit' type="submit">Enregistrer</button>
            </form>
        </div>
    );
};

export default Form;