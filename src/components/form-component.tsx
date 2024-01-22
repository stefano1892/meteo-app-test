import React from "react";

interface FormComponentProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    city: string;
}

const FormComponent = ({handleInputChange, handleSubmit, city}: FormComponentProps) => {
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