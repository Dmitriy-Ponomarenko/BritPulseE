import React, { useState } from "react";
import Flipbook from "./components/Flipbook";
import Popup from "./components/Popup";
import VideoModal from "./components/VideoModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoIdx, setVideoIdx] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handlePrev = () => setVideoIdx((idx) => Math.max(0, idx - 1));
  const handleNext = () => setVideoIdx((idx) => Math.min(2, idx + 1));

  React.useEffect(() => {
    if (!modalOpen) setVideoIdx(0);
  }, [modalOpen]);

  return (
    <>
      <div>
        <Flipbook />
        <Popup onOpen={openModal} />
        <VideoModal
          open={modalOpen}
          onClose={closeModal}
          current={videoIdx}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </>
  );
}

export default App;
