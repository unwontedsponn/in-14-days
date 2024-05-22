"use client"
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import HomepageContent from '../components/HomepageContent';
import BookInfo from "../components/BookInfo";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="pt-6 border-b">

      {/* Row 1 - Books */}
      <HomepageContent 
        title='Top Books'
        borderB='border-b'
        openModal={openModal}
      />

      {/* Row 2 - Courses */}
      <HomepageContent 
        title='Top Courses'
        openModal={openModal}
      />
      
      {/* {isModalOpen && (<BookInfo onClose={closeModal}/>)} */}

      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Modal Content */}
            <motion.div 
              className="fixed inset-0 flex items-center justify-center"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded shadow-lg">
                <BookInfo onClose={closeModal} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
