import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "https://www.youtube.com/embed/YV8iXpw2OUw",
  "https://www.youtube.com/embed/FZD7tlm7I0E",
  "https://www.youtube.com/embed/P-WNLRsLlvE",
];

export default function VideoModal({ open, onClose, current, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg max-w-4xl w-full h-[600px] p-6 flex flex-col justify-center items-center"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-200 hover:text-red-500 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="flex items-center w-full justify-center gap-4">
          <button
            className="text-2xl text-gray-200 hover:text-blue-400 disabled:opacity-30"
            onClick={onPrev}
            disabled={current === 0}
            aria-label="Previous video"
          >
            <FaChevronLeft />
          </button>
          <div className="w-[480px] h-[270px] sm:w-[640px] sm:h-[360px] md:w-[720px] md:h-[405px] bg-black rounded overflow-hidden flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src={videos[current]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            className="text-2xl text-gray-200 hover:text-blue-400 disabled:opacity-30"
            onClick={onNext}
            disabled={current === videos.length - 1}
            aria-label="Next video"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
