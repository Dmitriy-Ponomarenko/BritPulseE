import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Popup({ onOpen }) {
  const [isOpen, setIsOpen] = useState(true);
  const [animationStyle, setAnimationStyle] = useState("");

  useEffect(() => {
    const x1 = Math.random() * 15 - 7.5;
    const y1 = Math.random() * 15 - 7.5;
    const x2 = Math.random() * 15 - 7.5;
    const y2 = Math.random() * 15 - 7.5;

    const keyframes = `
      @keyframes floatSmooth {
        0% { transform: translate(0, 0); }
        25% { transform: translate(${x1}px, ${y1}px); }
        50% { transform: translate(${x2}px, ${y2}px); }
        75% { transform: translate(${-x1}px, ${-y1}px); }
        100% { transform: translate(0, 0); }
      }
    `;

    setAnimationStyle(keyframes);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="hidden lg:flex fixed bottom-8 right-8 z-50 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 shadow-2xl rounded-2xl p-6 flex-col items-center max-w-xs relative"
      style={{
        position: "absolute",
        width: "250px",
        animation: `floatSmooth ${4 + Math.random() * 2}s ease-in-out infinite`,
        backdropFilter: "blur(8px)",
      }}
    >
      <style>{animationStyle}</style>
      <button
        className="absolute top-1 right-2 p-1 text-white hover:text-gray-200 hover:bg-white/20 rounded-full transition-all duration-200"
        onClick={() => setIsOpen(false)}
        aria-label="Close popup"
      >
        <IoClose size={20} className="w-5 h-5" />
      </button>
      <div className="text-white font-semibold mb-2 text-center drop-shadow">
        The latest cooking blogs from our readers about British cuisine
      </div>
      <button
        className="mt-2 px-5 py-2 bg-white/80 text-blue-700 font-bold rounded-xl hover:bg-white transition"
        onClick={onOpen}
      >
        Watch Video
      </button>
    </div>
  );
}
