'use client'
import React, { useEffect, useState } from 'react';
import { getAssistantResponse, createAssistant, createThread } from '@/app/actions';
import { create } from 'domain';

interface InputProps {
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setResponse: (response: any) => void;
}

interface Thread {
    id: string;
    token: string;
}

interface Assistant {
    id: string;
    name: string;
    description: string;
    workspace_id: string;
    request_timestamp: string;
    response_timestamp: string;
    learning_opt_out: boolean;
    status: string;
    language: string;
    workspace_name: string;
    inactivity_timeout: number;
    context: any;
}

const Input: React.FC<InputProps> = ({ inputValue, onChange, setResponse }) => {
    //build out eh types with actual object
    const [thread, setThread] = useState<Thread | any>(null);
    const [assistant, setAssistant] = useState<Assistant | any>(null);

    useEffect(() => {
        createAssistant().then((assistant) => setAssistant(assistant));
        createThread().then((thread) => setThread(thread));
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('it works')
        const response = await getAssistantResponse(inputValue, assistant, thread);
        setResponse(response);
    };

    return (
        <div className='flex flex-col items-center justify-items-start h-screen w-screen'>
            <div>
                <h1> Welcome to the dream interpreter</h1>
                <p>Here are some tips</p>
                <ul>
                    <li>Use the present tense, this will help you access the dream in your memories again</li>
                    <li>Focus on characters, objects, and feelings</li>
                    <li>If your dream is made of multiple parts, describe one section first, then add on the 2nd</li>
                </ul>
            </div>
            <p>Describe your dream below</p>
            <textarea className="mx-auto text-black size-4/12" value={inputValue} onChange={onChange} />
            <button className="rounded bg-slate-700 p-3 m-3 hover:bg-slate-500" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Input;
