"use client"

import React, { useState } from 'react';
import Input from '../../components/input/page';
import Reply from '../../components/reply/page';

const Interpreter: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');


    //thread is an object of two arrays, one of the arrays is the response, the other is the input
    //Whenevr a new input is added, it is added to the input array, and the response is added to the response array
    // 

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
