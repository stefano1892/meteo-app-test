const FormComponent = ({handleInputChange, handleSubmit, city}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <input 
                    type="text" 
                    className='cityInput' 
                    placeholder='Inserisci la città...'
                    value={city}
                    onChange={handleInputChange}
                />    
                <button 
                    type='submit' 
                    className='btn btn-submit'
                    disabled = {city === ""}
                >
                    Cerca
                </button>
            </div>
            
        </form>
    );
}
 
export default FormComponent;