import { SearchIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <header className="flex justify-center border-b px-4 py-10">
      <div className="flex items-center w-full space-x-4">
        
        {/* Logo */}
        <h1 className="text-4xl">IN 14 DAYS</h1>
        
        {/* Search Box */}
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" width={20} height={20} />
          <input 
            type="text" 
            placeholder="Search items" 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        {/* Library Button */}
        <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Library</button>
      </div>
    </header>
  );
}
