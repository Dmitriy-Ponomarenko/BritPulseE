import React, { useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import pdfFile from "/Lista-de-vocabulario-Andalucia.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PagesProps {
  children?: React.ReactNode;
  number: number;
}

const Pages = forwardRef<HTMLDivElement, PagesProps>((props, ref) => {
  return (
    <div
      className="demoPage bg-white shadow-lg rounded-lg p-4"
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h2 className="text-lg font-bold text-gray-800">Page {props.number}</h2>
      <div className="text-gray-600">{props.children}</div>
    </div>
  );
});

Pages.displayName = "Pages";

const Flipbook: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
        BritPulse Magazine
      </h1>
      <HTMLFlipBook
        width={350} // Adjusted width
        height={500} // Adjusted height
        className="flipbook"
        style={{
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        size="stretch"
        startPage={0}
        showCover={true}
        mobileScrollSupport={true}
        minWidth={200}
        maxWidth={800}
        minHeight={300}
        maxHeight={1000}
        drawShadow={true}
        flippingTime={800}
        useMouseEvents={true}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        clickEventForward={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {[...Array(numPages).keys()].map((page) => (
          <Pages key={page} number={page + 1}>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={page + 1} width={350} />
            </Document>
          </Pages>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
