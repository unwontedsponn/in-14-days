import { SearchIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <header className="border-b p-4">
      
      <div className="flex items-center w-full space-x-4">  
        {/* Logo */}
        <h1 className="text-4xl font-bold">IN 14 DAYS</h1>
        
        {/* Search Box */}
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" width={20} height={20} />
          <input 
            type="text" 
            placeholder="Search items" 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-black"
          />
        </div>
        
        {/* Library Button */}
        <button className="bg-customOrange text-white py-2 px-4 rounded flex-1 text-center hover:text-black hover:outline">Library</button>
        <button className="bg-customTurquoise text-white py-2 px-4 rounded flex-1 text-center hover:text-black hover:outline">Sign Up</button>
        <button className="bg-black text-white py-2 px-4 rounded flex-1 text-center hover:bg-white hover:text-black hover:outline">Login</button>
      </div>
      <p className="text-center pt-4 tracking-widest">{`Transform Your Skills in Just Two Weeks | Quick Lessons, Lasting Knowledge`}</p>
    </header>
  );
}
