export default function Thumbnail({ src, title, author, onClick }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <img src={src} alt="" className="w-full h-auto group-hover:outline group-hover:outline-2 group-hover:outline-black"/>
      <div className="">
        <h1 className="group-hover:underline">{title}</h1>
        <h2 className="text-xs">{author}</h2>
      </div>
    </div>
  );
}
