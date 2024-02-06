'use client';
import React from 'react';

type TextProps = {
    text: string;
};

const Reply: React.FC<TextProps> = ({ text }) => {
    return <div className='size-8/12 bg-slate-700'>{text}</div>;
};

export default Reply;
