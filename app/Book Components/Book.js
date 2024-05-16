export default function Book() {
  return (
    <main className="bg-white p-4">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col p-4 shadow-xl rounded-lg">


          {/* Section 1 */}
          <div className="flex border-b py-6">

              {/* Left column */}
              <img src="/images/cover.png" alt="Book cover" className="flex-none w-48 h-auto" />

              {/* Right column */}
              <div className="flex flex-col justify-between flex-grow ml-4">

                {/* Row 1 */}
                <div className="border-b">
                  <h1 className="text-2xl font-bold">Ben Spooner's Beginner to Composer in 14 Days</h1>
                  <div className="text-gray-500 text-xs mb-2">Ben Spooner & Hayley JC Spooner</div>

                  <div className="flex justify-between">
                    <div>
                      <div className="text-yellow-400">★ ★ ★ ★ ★</div>
                      <div className="text-gray-500 text-sm ml-2">1 Rating</div>
                    </div>

                    <div className="flex space-x-2">
                      <div>img1</div>
                      <div>img2</div>
                    </div>
                  </div>
                </div>

                {/* Button row - ensure this is at the bottom */}
                <div className="flex justify-between mt-auto">
                  <button className="px-4 py-2 rounded bg-blue-500 text-white text-xs">£4.99</button>
                  <button className="px-4 py-2 rounded bg-blue-500 text-white text-xs">Want to Read</button>
                  <button className="px-4 py-2 rounded bg-blue-500 text-white text-xs">Sample</button>
                </div>
              </div>
            </div>
          
          {/* Section 2 */}
          <div className="border-b py-6">
            <h2>Publisher Description</h2>
            <div className="text-gray-700 text-sm">
              <p>Beginner To Composer In 14 Days is delightfully different. Moving swiftly from theory to action, Ben emerges as the teacher you always wished you'd had, championing radical creative freedom, improvisation and composition - even for beginners...</p>
            </div>
          </div>
          

          {/* Section 3 */}
          <div className="flex divide-x divide-gray-300 text-center text-gray-500 text-xs py-6">
            <div className="flex-1 px-2">
              <div>GENRE</div>
              <div>image</div>
              <div>Arts & Entertainment</div>
            </div>
            <div className="flex-1 px-2">
              <div>RELEASED</div>
              <div>2023</div>
              <div>29 September</div>
            </div>
            <div className="flex-1 px-2">
              <div>LENGTH</div>
              <div>168</div>
              <div>Pages</div>
            </div>
            <div className="flex-1 px-2">
              <div>PUBLISHER</div>
              <div>B&H Spooner</div>
            </div>
            <div className="flex-1 px-2">
              <div>LANGUAGE</div>
              <div>EN</div>
              <div>English</div>
            </div>
            <div className="flex-1 px-2">
              <div>SIZE</div>
              <div>10.1</div>
              <div>MB</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}