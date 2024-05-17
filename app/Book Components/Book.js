export default function Book() {
  return (
    <main className="bg-white p-8">  {/* Increase padding for more space around */}
      <div className="max-w-4xl mx-auto">  {/* Increase max-width for larger display */}
        <div className="flex flex-col shadow-xl rounded-lg overflow-hidden py-4 px-6">  {/* Add overflow-hidden for cleaner borders */}

          {/* Section 1: Book display and purchase options */}
          <div className="grid grid-cols-5 gap-4 p-6 border-b">  {/* Use grid layout for better control */}

            {/* Left column for image */}
            <div className="col-span-2">
              <img src="/images/cover.png" alt="Book cover" className="w-full h-auto"/>  {/* Responsive width */}
            </div>

            {/* Right column for text */}
            <div className="col-span-3 flex flex-col h-full">

              {/* Section 1 */}
              <div>
                <h1 className="text-3xl font-bold mb-2">Ben Spooner's Beginner to Composer in 14 Days</h1>  {/* Larger text */}
                <p className="text-gray-500">Ben Spooner & Hayley JC Spooner</p>
              </div>
              
              {/* Section 2 */}
              <div className="">
                <h2 className="text-xl font-semibold mb-2">Publisher Description</h2>
                <p className="text-gray-700 text-xs">
                  {`Beginner To Composer In 14 Days is delightfully different. Moving swiftly from theory to action, Ben emerges as the teacher you always wished you'd had, championing radical creative freedom, improvisation and composition - even for beginners. Especially for beginners in fact. "Students need freedom to truly fall in love with their instrument" he writes, "frameworks that pique their curiosity over and over again so that practice becomes play". Whether you're a complete beginner or have a little knowledge up your sleeve, you'll adore this dynamic and intimate guide to learning the piano, peppered with evocative vignettes of a life lived with music at its heart. Best of all, you'll come away with a method you can use time and time again to create your very own music, captured on professional quality lead sheets you can share with other musicians, to bring your work to life. Suitable for adults and a useful resource for teachers. Complements graded and traditional approaches to learning.`}
                </p>
              </div>
              
              {/* Section 3 */}
              <div className="flex gap-2 mt-auto w-full">
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center">Amazon</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center">Apple Books</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex-1 text-center">Sample</button>
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
  )
}