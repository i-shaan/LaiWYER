'use client'
 
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef} from "react";

export default function Home() {
    const { query } = useSearchParams();
  
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput("");
    setIsLoading(true);
    
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    
    try {
      const res = await fetch(`http://localhost:8000/api/summary?query=${encodeURIComponent(userMessage)}`);
      const data = await res.json();
      
      const formattedResponse = data.summary || "I couldn't process that request.";
      setTypingMessage(formattedResponse);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', content: "Sorry, I encountered an error. Please try again." }]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
        console.log(query)
    }
    if (typingMessage) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < typingMessage.length) {
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage?.type === 'bot') {
              return [...prev.slice(0, -1), { 
                type: 'bot', 
                content: lastMessage.content + typingMessage[currentIndex] 
              }];
            } else {
              return [...prev, { type: 'bot', content: typingMessage[currentIndex] }];
            }
          });
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTypingMessage(null);
          setIsLoading(false);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [typingMessage]);

  const speakMessage = async (text: string) => {
    try {
      await fetch(`http://localhost:8000/api/speak?text=${encodeURIComponent(text)}`, {
        method: 'POST'
      });
    } catch (error) {
      console.error('Error speaking message:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <main 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-5 bg-fixed"
      style={{ backgroundImage: `url('/bg.jpg')` }}
    >
      <div className="w-full max-w-md h-[600px] bg-black/80 rounded-xl flex flex-col backdrop-blur-lg">
    
        
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/70 rounded-b-xl"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-blue-800 text-white rounded-br-sm' 
                    : 'bg-neutral-800 text-gray-200 rounded-bl-sm'
                }`}
              >
                {message.type === 'bot' && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚖️</span>
                    <button 
                      onClick={() => speakMessage(message.content)}
                      className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
                    >
                      🔊
                    </button>
                  </div>
                )}
                <div 
                  className="break-words whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex space-x-1 bg-neutral-800 p-3 rounded-2xl rounded-bl-sm">
                <span className="animate-bounce text-gray-500">●</span>
                <span className="animate-bounce delay-100 text-gray-500">●</span>
                <span className="animate-bounce delay-200 text-gray-500">●</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-black/50 rounded-b-xl">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask your legal question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-3 bg-white/10 text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage}
              className="bg-blue-800 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}