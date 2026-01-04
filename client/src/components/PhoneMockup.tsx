import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
        {children}
      </div>
    </div>
  );
}

export function ChatMessage({ 
  text, 
  isUser = false, 
  delay = 0,
  type = "text" // text, summary, card
}: { 
  text: string | ReactNode, 
  isUser?: boolean, 
  delay?: number,
  type?: "text" | "summary" | "card"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`flex w-full mt-4 space-x-3 max-w-xs ${isUser ? "ml-auto justify-end" : ""}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
          <span className="text-xs">AI</span>
        </div>
      )}
      <div className={`${type === "card" ? "w-full" : ""}`}>
        <div 
          className={`
            relative p-3 rounded-2xl text-sm shadow-sm
            ${isUser 
              ? "bg-blue-500 text-white rounded-br-none" 
              : type === "card" 
                ? "bg-white border border-pink-100 rounded-bl-none p-0 overflow-hidden" 
                : "bg-gray-100 text-gray-800 rounded-bl-none"
            }
          `}
        >
          {type === "card" ? (
            <div className="flex flex-col">
              <div className="bg-pink-50 p-2 border-b border-pink-100 flex items-center gap-2">
                <span className="text-lg">💡</span>
                <span className="font-bold text-pink-600 text-xs">用語解説</span>
              </div>
              <div className="p-3 text-gray-700 text-xs leading-relaxed">
                {text}
              </div>
            </div>
          ) : (
            text
          )}
        </div>
        {!isUser && type !== "card" && (
          <span className="text-[10px] text-gray-400 ml-1 mt-1 block">Just now</span>
        )}
      </div>
    </motion.div>
  );
}
