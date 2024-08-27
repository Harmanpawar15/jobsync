

'use client';

import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'; 
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "../../utils/cn";
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { FaCheckCircle, FaCopy } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation';

interface Message {
  role: string;
  content: string;
}

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [hiringManager, setHiringManager] = useState('');
  const [profileInfo, setProfileInfo] = useState('');
  const [keySellingPoints, setKeySellingPoints] = useState('');

  const router = useRouter();
  const auth = getAuth();

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      alert("Message copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy text: " + err);
    });
  };

  


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/generateMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          hiringManager,
          profileInfo,
          keySellingPoints,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed`);
      }

      const data = await response.json();
      const trimmedContent = data.content.trim();

      if (trimmedContent) {
        const lastMessage = messages[messages.length - 1];

        if (!lastMessage || lastMessage.content !== trimmedContent) {
          setMessages([...messages, { role: 'assistant', content: trimmedContent }]);
        }
      } else {
        console.log("Received an empty response.");
      }

      setInput('');
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString() || 'Something went wrong!');
      setIsLoading(false);
    }
  };
  



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-auto bg-neutral-900">
      <BackgroundBeams />
      <div className="max-w-md w-full mx-auto rounded-lg p-8 shadow-lg bg-white dark:bg-black relative z-10">
        <div className="mb-8">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Chat with Job Sync:
          </h2>
          <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
            Input your details to generate a personalized message.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <LabelInputContainer>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Tyler Durden"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="hiringManager">Hiring Manager Name</Label>
                <Input
                  id="hiringManager"
                  placeholder="Mr. Smith"
                  type="text"
                  value={hiringManager}
                  onChange={(e) => setHiringManager(e.target.value)}
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="profileInfo">Profile Info</Label>
                <textarea
                  id="profileInfo"
                  placeholder="Your profile information..."
                  value={profileInfo}
                  onChange={(e) => setProfileInfo(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md dark:bg-neutral-800 dark:text-neutral-200"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="keySellingPoints">Key Selling Points</Label>
                <textarea
                  id="keySellingPoints"
                  placeholder="Your key selling points..."
                  value={keySellingPoints}
                  onChange={(e) => setKeySellingPoints(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md dark:bg-neutral-800 dark:text-neutral-200"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                disabled={isLoading}
              >
                Generate Message &rarr;
                <BottomGradient />
              </button>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="button"
                onClick={() => router.push('/payment')}
              >
                Get Pro Version &rarr;
                <BottomGradient />
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}
            </div>
          </form>
        </div>

        
      </div>

      {/* Responses Section */}
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {messages.map((msg, index) => (
            <div key={index} className="relative flex justify-center">
              <BackgroundGradient className="relative h-96 w-96 z-20 hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg p-4">
                <p className="text-xl font-bold mt-2 text-white">
                  Message {index + 1}
                </p>
                <div className="text-neutral-200 mt-4 overflow-hidden text-ellipsis">
                  {msg.content}
                </div>
                {/* Copy Icon */}
                <FaCopy
                  className="absolute top-2 right-2 text-white cursor-pointer hover:text-gray-300"
                  onClick={() => handleCopy(msg.content)}
                />
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


