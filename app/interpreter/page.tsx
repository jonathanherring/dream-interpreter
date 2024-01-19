'use client'
import React, { useState } from 'react';
import Input from '../../components/input/page';
import Reply from '../../components/reply/page';

const Interpreter: React.FC = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <Input inputValue= {inputValue} onChange = {handleInputChange} />
            <Reply text={inputValue}/>
        </div>
    );
};

export default Interpreter;
