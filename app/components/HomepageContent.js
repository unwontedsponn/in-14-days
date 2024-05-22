import Thumbnail from "../components/Thumbnail";

export default function HomepageContent({ title, borderB, openModal }) {

  return (
    <section className={`pt-6 py-10 ${borderB || ''}`}>

      <div className="flex justify-between pb-5">
        <p className="text-xl">{title}</p>
        <p className="hover:underline cursor-pointer">See All</p>
      </div>
      
      <div className="grid grid-cols-6 grid-flow-col gap-4">
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
        <Thumbnail
          src="images/cover.png"
          title="BEGINNER TO COMPOSER"
          author='Ben Spooner & Hayley JC Spooner'
          tag="Learn the piano through composing a piece captured on a professional lead sheet."
          onClick={openModal}
        />
      </div>
    </section>
  );
}
