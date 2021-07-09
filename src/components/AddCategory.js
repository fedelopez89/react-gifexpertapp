import React, {useState} from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        /* console.log(e); */
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategory ((arr) => [inputValue, ...arr]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: Proptypes.func.isRequired
}