
import React from 'react';

interface InputProps {
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Input: React.FC<InputProps> = ({inputValue, onChange}) => {

    return (
        <input type="text" value={inputValue} onChange={onChange} />
    );
};

export default Input;
