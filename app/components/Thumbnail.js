export default function Thumbnail({src, title, author, tag, onClick}) {
  return (
    <main className="cursor-pointer border-4 border-black hover:bg-gray-300 transition duration-300" onClick={onClick}>
      <img src={src} alt="" className="w-full h-auto"/>
      <div className="border-t-4 border-black p-4">
        <h1 className="text-xl">{title}</h1>
        <h2 className="text-sm">{author}</h2>
        {/* <p>{tag}</p> */}
      </div>
    </main>
  )
}