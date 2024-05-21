"use client"
import { useState } from 'react';
import Thumbnail from "../components/Thumbnail";
import BookInfo from "../components/BookInfo";

export default function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="grid grid-cols-5 grid-flow-col gap-8 py-10">
      <Thumbnail
        src="images/cover.png"
        title="BEGINNER TO COMPOSER"
        author='Ben Spooner & Hayley JC Spooner'
        tag="Learn the piano through composing a piece captured on a professional lead sheet."
        onClick={openModal}
      />
      <Thumbnail
        src="images/cover.png"
        title="BEGINNER TO COMPOSER"
        author='Ben Spooner & Hayley JC Spooner'
        tag="Learn the piano through composing a piece captured on a professional lead sheet."
        onClick={openModal}
      />
      <Thumbnail
        src="images/cover.png"
        title="BEGINNER TO COMPOSER"
        author='Ben Spooner & Hayley JC Spooner'
        tag="Learn the piano through composing a piece captured on a professional lead sheet."
        onClick={openModal}
      />
      <Thumbnail
        src="images/cover.png"
        title="BEGINNER TO COMPOSER"
        author='Ben Spooner & Hayley JC Spooner'
        tag="Learn the piano through composing a piece captured on a professional lead sheet."
        onClick={openModal}
      />
      <Thumbnail
        src="images/cover.png"
        title="BEGINNER TO COMPOSER"
        author='Ben Spooner & Hayley JC Spooner'
        tag="Learn the piano through composing a piece captured on a professional lead sheet."
        onClick={openModal}
      />

      {isModalOpen && (<BookInfo onClose={closeModal}/>)}
    </main>
  );
}
