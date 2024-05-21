'use client';
import { useState } from 'react';
import FlipBookEmbed from './FlipBookEmbed';

export default function BookInfo({onClose}) {
  const [isBookOpen, setIsBookOpen] = useState(false);

  const toggleBook = () => {
    setIsBookOpen(!isBookOpen);
  };

  return (
    <main className="fixed bg-white inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-5"> 
      <div className="p-4 border-4 border-black flex flex-col shadow-xl overflow-hidden px-6 bg-white w-full max-w-4xl mx-auto">

        <button onClick={onClose} className="text-right text-gray-500 hover:text-gray-700 font-bold pt-4">
          Close
        </button>

        {/* Section 1: Book display and purchase options */}
        <div className="grid grid-cols-5 gap-4 px-6 pt-2 pb-10 border-b">

          {/* Left column for image */}
          <div className="col-span-2">
            <img src="/images/cover.png" alt="Book cover" className="w-full h-auto shadow-2xl border-4 border-black"/>
          </div>

          {/* Right column for text */}
          <div className="col-span-3 flex flex-col h-full px-4">

            {/* Section 1 */}
            <div>
              <h1 className="text-3xl font-bold mb-2">BEGINNER TO COMPOSER</h1>
              <h2 className="text-xl font-bold mb-2">IN 14 DAYS</h2>
              <p className="text-gray-500 text-xs">Ben Spooner & Hayley JC Spooner</p>
            </div>
            
            {/* Section 2 */}
            <div className="border-t py-2 my-2">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 text-xs">
                {`Beginner To Composer In 14 Days is delightfully different. Moving swiftly from theory to action, Ben emerges as the teacher you always wished you'd had, championing radical creative freedom, improvisation and composition - even for beginners. Especially for beginners in fact. "Students need freedom to truly fall in love with their instrument" he writes, "frameworks that pique their curiosity over and over again so that practice becomes play". Whether you're a complete beginner or have a little knowledge up your sleeve, you'll adore this dynamic and intimate guide to learning the piano, peppered with evocative vignettes of a life lived with music at its heart. Best of all, you'll come away with a method you can use time and time again to create your very own music, captured on professional quality lead sheets you can share with other musicians, to bring your work to life. Suitable for adults and a useful resource for teachers. Complements graded and traditional approaches to learning.`}
              </p>
            </div>
            
            {/* Section 3 */}
            <div className="flex gap-2 mt-auto w-full">
              <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black">Amazon</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black">Apple Books</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center hover:text-black" onClick={toggleBook}>Sample</button>
            </div>
          </div>
        </div>

        {/* Section 2: Additional Info */}
        <div className="divide-x divide-gray-300 grid grid-cols-6 text-center text-gray-500 text-xs py-4">
          <div>GENRE<br/><strong>Arts & Entertainment</strong></div>
          <div>RELEASED<br/><strong>29.09.23</strong></div>
          <div>LENGTH<br/><strong>168 pages</strong></div>
          <div>PUBLISHER<br/><strong>B&H Spooner</strong></div>
          <div>LANGUAGE<br/><strong>English</strong></div>
          <div>SIZE<br/><strong>10.1 MB</strong></div>
        </div>

        {/* Modal Book Display */}
        {isBookOpen && (
          <FlipBookEmbed
            src="https://online.fliphtml5.com/zyexg/biau/"
            width="100%"
            height="100%"
            isOpen={isBookOpen}
            onClose={toggleBook}
          />
        )}
      </div>
    </main>
  );
}
