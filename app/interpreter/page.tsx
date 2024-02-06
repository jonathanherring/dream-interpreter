"use client"

import React, { useState } from 'react';
import Input from '../../components/input/page';
import Reply from '../../components/reply/page';

const Interpreter: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        //lodash debounce this
    };
    return (
        <div>
            <Reply text={response}/>
            <Input inputValue= {inputValue} onChange = {handleInputChange}  setResponse = {setResponse}/>
        </div>
    );
};

export default Interpreter;
