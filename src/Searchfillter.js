import React from 'react';
import { useCart } from './CartContext'; 
import { useState } from 'react';
const SearchForm = () => {
    const {handleChange}=useCart(); 
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="">
      <div className="flex justify-center"> {/* Add a flex container to horizontally center */}
    <div className="relative m-0 -mr-0.5 min-w-0" style={{width: '60%'}}>
        <div className="flex items-center">
            <input
                type="search"
                className="relative block w-full rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={handleChange}
                style={{width: '60%'}}
            />
            <button
                className="relative z-[2] rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init="true"
                data-te-ripple-color="light"
                style={{ backgroundColor: 'blueviolet' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

        </div>
    );
};

export  {SearchForm};
