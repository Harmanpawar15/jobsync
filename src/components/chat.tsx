'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'; 

interface Message {
  role: string;
  content: string;
}

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]); // chck typeeeeeeee
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [hiringManager, setHiringManager] = useState('');
  const [profileInfo, setProfileInfo] = useState('');
  const [keySellingPoints, setKeySellingPoints] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const messageArray: Message[] = [...messages, { role: 'user', content: input }];
      const response = await fetch('/api/generateMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          hiringManager,
          profileInfo,
          keySellingPoints
        }),
      });

      if (!response.ok) {
        throw new Error(`API REQ FAILED`);
      }

      const data = await response.json();
      
     
      setMessages([...messageArray, { role: 'assistant', content: data.content }]);
      setInput('');
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString() || 'Something went wrong!');}
    // } finally {
      
    // }
  };

  return (
    <div className="chat-container">



      <form onSubmit={handleSubmit} className='relative'>
        <input
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your Name'
          className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'
        />
        <input
          name='hiringManager'
          value={hiringManager}
          onChange={(e) => setHiringManager(e.target.value)}
          placeholder='Hiring Manager Name'
          className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'
        />
        <textarea
          name='profileInfo'
          value={profileInfo}
          onChange={(e) => setProfileInfo(e.target.value)}
          placeholder='Profile Info'
          className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'
        />
        <textarea
          name='keySellingPoints'
          value={keySellingPoints}
          onChange={(e) => setKeySellingPoints(e.target.value)}
          placeholder='Key Selling Points'
          className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'
        />
        <button
          type='submit'
          disabled={isLoading}
          className='absolute right-1 top-1 h-8 w-10'
        >
          <PaperAirplaneIcon className='h-5 w-5 text-black' />
        </button>
      </form>

      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <p>{msg.content}</p>
          </div>
 ))}
      {error && <p className="error">{error}</p>}
    </div>


    </div>
  );
}
