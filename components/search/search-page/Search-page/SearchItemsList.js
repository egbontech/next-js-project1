import Link from 'next/link';
import React from 'react'
const options = [
    {
      value: "Phones and accessories",
      label: "Chocolate",
      url: "/assets/images/phone.jpeg",
    },
    { value: "strawberry", label: "Strawberry", url: "/assets/images/men.jpeg" },
    { value: "strawberry", label: "Strawberry", url: "/assets/images/women.png" },
    {
      value:
        "strawberry sxjsimxosmoas   jsxisxosocsocos   jsoxsokcoskcskp0scsnics   scjmsmojo",
      label: "Strawberry",
      url: "/assets/images/chair.jpeg",
    },
    {
      value: "strawberry",
      label: "Strawberry",
      url: "/assets/images/phone.jpeg",
    },
    { value: "vanilla", label: "Vanilla", url: "/assets/images/phone.jpeg" },

  ];
  
  
const SearchItemsList = () => {
  return (
    <div className="search-options-container">   
    {options?.map((item,index) => {
        return (
          <Link href=""key={index}>
          <a  className="search-options-items">
          <div className="image">
              <img src={`${item.url}`} alt="image" />
            </div>
            <p>
              {item.value}
            </p>
          </a>
          </Link>            
        )
    })}
            
  </div>
  )
}

export default SearchItemsList
