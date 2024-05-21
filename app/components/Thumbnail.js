export default function Thumbnail({src, title, author, tag, onClick}) {
  return (
    <main className="cursor-pointer" onClick={onClick}>
      <img src={src} alt="" className="border-4 border-black"/>
      <div className="border-x-4 border-b-4 border-black p-4">
        <h1 className="text-xl">{title}</h1>
        <h2 className="text-sm">{author}</h2>
        {/* <p>{tag}</p> */}
      </div>
    </main>
  )
}