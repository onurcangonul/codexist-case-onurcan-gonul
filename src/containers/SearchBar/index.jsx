import React from 'react'

const SearchBar = (props) => {
  const { setSearch, searchBook } = props;
    return (
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-44 p-2">
        <h2 className="flex justify-center mt-6 mb-2 font-semibold text-lg text-white">
          Kitapları Arayın ve Maceralara Katılın
        </h2>
        <div className="relative flex justify-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchBook}
            type="search"
            id="default-search"
            className="block md:w-2/4 w-[80%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kitap Ara..."
            required
          />
        </div>
      </div>
    );
}

export default SearchBar