import React from 'react';

type TextProps = {
    text: string;
};

const Reply: React.FC<TextProps> = ({ text }) => {
    return <div>{text}</div>;
};

export default Reply;
