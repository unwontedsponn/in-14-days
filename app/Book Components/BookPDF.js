'use client'
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Book() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPageNumber(1);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    } else if (e.deltaY < 0 && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <main className="bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col shadow-xl rounded-lg overflow-hidden py-4 px-6">

          {/* Section 1: Book display and purchase options */}
          <div className="grid grid-cols-5 gap-4 p-6 border-b">

            {/* Left column for image */}
            <div className="col-span-2">
              <img src="/images/cover.png" alt="Book cover" className="w-full h-auto shadow-2xl"/>
            </div>

            {/* Right column for text */}
            <div className="col-span-3 flex flex-col h-full px-4">

              {/* Section 1 */}
              <div>
                <h1 className="text-3xl font-bold mb-2">Beginner to Composer in 14 Days</h1>
                <p className="text-gray-500 text-xs">Ben Spooner & Hayley JC Spooner</p>
              </div>
              
              {/* Section 2 */}
              <div className="border-t py-2 my-2">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700 text-xs">
                  {`Beginner To Composer In 14 Days is delightfully different. Moving swiftly from theory to action, Ben emerges as the teacher you always wished you'd had, championing radical creative freedom, improvisation and composition - even for beginners. Especially for beginners in fact. "Students need freedom to truly fall in love with their instrument" he writes, "frameworks that pique their curiosity over and over again so that practice becomes play". Whether you're a complete beginner or have a little knowledge up your sleeve, you'll adore this dynamic and intimate guide to learning the piano, peppered with evocative vignettes of a life lived with music at its heart. Best of all, you'll come away with a method you can use time and time again to create your very own music, captured on professional quality lead sheets you can share with other musicians, to bring your work to life. Suitable for adults and a useful resource for teachers. Complements graded and traditional approaches to learning.`}
                </p>
              </div>

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="relative bg-white rounded-lg border-4" onWheel={handleWheel}>

                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute z-10 top-0 right-0 p-2 text-5xl font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                      style={{ lineHeight: '1rem' }}
                    >
                      &times; {/* Unicode multiplication sign used as close icon */}
                    </button>

                    {/* Content Container */}
                    <div id="book-container" style={{ width: '1000px', height: '700px' }}>
                      <Document
                        file="/books/composer.pdf"  // Ensure this path is correct
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} width={1000} />
                      </Document>
                    </div>
                    
                    {/* Left Arrow */}
                    <button
                      onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-5xl text-gray-500 hover:text-gray-700"
                      aria-label="Previous page"
                    >
                      &#8592; {/* Unicode left arrow */}
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={() => setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages)}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-5xl text-gray-500 hover:text-gray-700"
                      aria-label="Next page"
                    >
                      &#8594; {/* Unicode right arrow */}
                    </button>
                  </div>
                </div>
              )}
              
              {/* Section 3 */}
              <div className="flex gap-2 mt-auto w-full">
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black">Amazon</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black">Apple Books</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black" onClick={openModal}>Sample</button>
              </div>
            </div>
          </div>

          {/* Section 2: Additional Info */}
          <div className="divide-x divide-gray-300 grid grid-cols-6 text-center text-gray-500 text-xs py-4">
            <div>GENRE<br/><strong>Arts & Entertainment</strong></div>
            <div>RELEASED<br/><strong>2023</strong><br/><strong>29 September</strong></div>
            <div>LENGTH<br/><strong>168 pages</strong></div>
            <div>PUBLISHER<br/><strong>B&H Spooner</strong></div>
            <div>LANGUAGE<br/><strong>English</strong></div>
            <div>SIZE<br/><strong>10.1 MB</strong></div>
          </div>
        </div>
      </div>
    </main>
  );
}