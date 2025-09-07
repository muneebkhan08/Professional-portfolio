// "use client";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// export function Typewrite() {
//   const words = [
//     {
//       text: "Ready",
//     },
//     {
//       text: "to",
//     },
//     {
//       text: "take",
//     },
//     {
//       text: "your",
//     },
//     {
//         text: "Digital",
//         className: "text-blue-500 dark:text-blue-500",
//     },
//     {
//       text: "presence",
//     },
//     {
//       text: "to",
//     },
//     {
//       text: "the",
//     },
//     {
//       text: "next",
//     },
//     {
//       text: "level?",
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]  ">
      
//       <TypewriterEffectSmooth words={words} />

//       <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-2 ">
//         Reach out to me today and let's discuss how I can help you achieve your goals. 
//       </p>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//           See More
//         </button>
//         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           Discuss Project
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";

// type Word = {
//   text: string;
//   className?: string;
// };

// type TypewriterProps = {
//   words: Word[];
//   typingSpeed?: number; // ms per character
//   pauseDuration?: number; // ms between words
// };

// export const TypewriterEffectSmooth: React.FC<TypewriterProps> = ({
//   words,
//   typingSpeed = 100,
//   pauseDuration = 500,
// }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

//   useEffect(() => {
//     // End condition: if all words have been processed, do nothing.
//     if (currentWordIndex >= words.length) return;

//     const currentWord = words[currentWordIndex].text;

//     // If the current word is a newline trigger
//     if (currentWord === "\n") {
//       setDisplayText((prev) => prev + "\n");
//       const timeout = setTimeout(() => {
//         setCurrentWordIndex((i) => i + 1);
//         setCurrentLetterIndex(0);
//       }, pauseDuration);
//       return () => clearTimeout(timeout);
//     }

//     // Type letters one by one.
//     if (currentLetterIndex < currentWord.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + currentWord[currentLetterIndex]);
//         setCurrentLetterIndex((i) => i + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeout);
//     } else {
//       // After finishing a word, add a space (unless it's the last word), then move to the next word.
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + " ");
//         setCurrentWordIndex((i) => i + 1);
//         setCurrentLetterIndex(0);
//       }, pauseDuration);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentLetterIndex, currentWordIndex, words, typingSpeed, pauseDuration]);

//   return (
//     // Added "relative" and "z-50" for front positioning; text-white for white text.
//     <pre className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-4xl md:text-5xl lg:text-6xl font-bold whitespace-pre-wrap text-center">
//       {displayText}
//     </pre>
//   );
// };

// export function Typewrite() {
//   const words: Word[] = [
//     { text: "Ready"},
//     { text: "to"},
//     { text: "take"},
//     { text: "your"},
//     { text: "Digital", className: "text-blue-500 dark:text-blue-500" },
//     { text: "\n" }, // Forces a line break
//     { text: "presence"},
//     { text: "to"},
//     { text: "the"},
//     { text: "next" },
//     { text: "level?" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]">
//       <TypewriterEffectSmooth words={words} />
//       <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl my-6">
//         Reach out to me today and let's discuss how I can help you achieve your goals.
//       </p>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-5">
//         <button className="w-40 h-12 rounded-xl bg-black border-2 dark:border-gray-600 border-transparent text-gray-300 text-xl hover:text-white hover:border-white">
//           See More
//         </button>
//         <button className="w-45 h-12 rounded-xl bg-[#6134e6b1] hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 text-gray-100 border border-black text-xl px-5 hover:text-black">
//           Discuss Project
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Typewrite;

// "use client";

// import React, { useEffect, useState } from "react";

// type Word = {
//   text: string;
//   className?: string;
// };

// type TypewriterProps = {
//   words: Word[];
//   typingSpeed?: number; // ms per character
//   pauseDuration?: number; // ms between words
//   reloadInterval?: number; // ms between resets
// };

// export const TypewriterEffectSmooth: React.FC<TypewriterProps> = ({
//   words,
//   typingSpeed = 100,
//   pauseDuration = 500,
//   reloadInterval = 5000, // Default to 5 seconds
// }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
//   const [resetKey, setResetKey] = useState(0);

//   // Effect to reset the animation every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Reset state to start animation from the beginning
//       setDisplayText("");
//       setCurrentWordIndex(0);
//       setCurrentLetterIndex(0);
//       setResetKey(prev => prev + 1);
//     }, reloadInterval);

//     return () => clearInterval(intervalId);
//   }, [reloadInterval]);

//   // Typing effect with dependency on resetKey to restart
//   useEffect(() => {
//     // End condition: if all words have been processed, do nothing.
//     if (currentWordIndex >= words.length) return;

//     const currentWord = words[currentWordIndex].text;

//     // If the current word is a newline trigger
//     if (currentWord === "\n") {
//       setDisplayText((prev) => prev + "\n");
//       const timeout = setTimeout(() => {
//         setCurrentWordIndex((i) => i + 1);
//         setCurrentLetterIndex(0);
//       }, pauseDuration);
//       return () => clearTimeout(timeout);
//     }

//     // Type letters one by one.
//     if (currentLetterIndex < currentWord.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + currentWord[currentLetterIndex]);
//         setCurrentLetterIndex((i) => i + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeout);
//     } else {
//       // After finishing a word, add a space (unless it's the last word), then move to the next word.
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + " ");
//         setCurrentWordIndex((i) => i + 1);
//         setCurrentLetterIndex(0);
//       }, pauseDuration);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentLetterIndex, currentWordIndex, words, typingSpeed, pauseDuration, resetKey]);

//   return (
//     // Added "relative" and "z-50" for front positioning; text-white for white text.
//     <pre className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-wrap text-center">
//       {displayText}
//     </pre>
//   );
// };

// export function Typewrite() {
//   const words: Word[] = [
//     { text: "Ready"},
//     { text: "to"},
//     { text: "take"},
//     { text: "your"},
//     { text: "Digital", className: "text-blue-500 dark:text-blue-500" },
//     { text: "\n" }, // Forces a line break
//     { text: "presence"},
//     { text: "to"},
//     { text: "the"},
//     { text: "next" },
//     { text: "level?" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]">
//       <TypewriterEffectSmooth 
//         words={words} 
//         reloadInterval={13000} // Reload every 5 seconds
//       />
//       <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-md lg:text-lg my-5">
//         Reach out to me today and let's discuss how I can help you achieve your goals.
//       </p>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-5">
//         <button className="w-40 h-12 rounded-xl bg-black border-2 dark:border-gray-600 border-transparent text-gray-300 text-lg hover:text-white hover:border-white">
//           See More
//         </button>
//         <button className="w-45 h-12 rounded-xl bg-[#6134e6b1] hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 text-gray-100 border border-black text-lg px-5 hover:text-black">
//           Discuss Project
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Typewrite;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsSuitClub } from "react-icons/bs";

type Word = {
  text: string;
  className?: string;
};

type TypewriterProps = {
  words: Word[];
  typingSpeed?: number; // ms per character
  pauseDuration?: number; // ms between words
  reloadInterval?: number; // ms between resets
};

export const TypewriterEffectSmooth: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  pauseDuration = 500,
  reloadInterval = 9000, // Default to 5 seconds
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  // Effect to reset the animation every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Reset state to start animation from the beginning
      setDisplayText("");
      setCurrentWordIndex(0);
      setCurrentLetterIndex(0);
      setResetKey(prev => prev + 1);
    }, reloadInterval);

    return () => clearInterval(intervalId);
  }, [reloadInterval]);

  // Typing effect with dependency on resetKey to restart
  useEffect(() => {
    // End condition: if all words have been processed, do nothing.
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex].text;

    // If the current word is a newline trigger
    if (currentWord === "\n") {
      setDisplayText((prev) => prev + "\n");
      const timeout = setTimeout(() => {
        setCurrentWordIndex((i) => i + 1);
        setCurrentLetterIndex(0);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    // Type letters one by one.
    if (currentLetterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[currentLetterIndex]);
        setCurrentLetterIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // After finishing a word, add a space (unless it's the last word), then move to the next word.
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + " ");
        setCurrentWordIndex((i) => i + 1);
        setCurrentLetterIndex(0);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  }, [currentLetterIndex, currentWordIndex, words, typingSpeed, pauseDuration, resetKey]);

  return (
    // Added "relative" and "z-50" for front positioning; text-white for white text.
    <pre className="relative font-extrabold pb-5 z-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-3xl md:text-4xl lg:text-6xl whitespace-pre-wrap text-center">
      {displayText}
    </pre>
  );
};

export function Typewrite() {
  const words: Word[] = [
    { text: "Ready"},
    { text: "to"},
    { text: "take"},
    { text: "your"},
    { text: "Digital", className: "text-blue-500 dark:text-blue-500" },
    { text: "\n" }, // Forces a line break
    { text: "presence"},
    { text: "to"},
    { text: "the"},
    { text: "next" },
    { text: "level?" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth 
        words={words} 
        reloadInterval={13000} // Reload every 13 seconds
      />
      <p className="text-neutral-600 text-center dark:text-neutral-200 text-md md:text-lg lg:text-2xl my-5 mx-6">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
      <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-5">
        <Link href="/about">
            <button className="px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-black border-2 dark:border-gray-600 border-transparent text-white text-xl hover:text-white hover:border-white">
              See More
            </button>
        </Link>
        {/* <Link href="/contact" className="w-47">
          <button className="w-full h-11 rounded-full bg-[#7d52ffb1] hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 text-gray-100 border border-gray-950 text-xl px-5 hover:text-black">
            Discuss Project
          </button>
        </Link> */}
        <Link href="/contact">
        <button className="px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-xl hover:text-white hover:border-white">
          Talk Bussiness
          <BsSuitClub />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Typewrite;