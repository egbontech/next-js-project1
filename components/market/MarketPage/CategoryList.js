import React from 'react'
import Link from "next/link";

const CategoryList = () => {
  return (
    <>
    <div className="sponsored-container-header">
     <div className="header">
       <h2>View Ads By Category</h2>
     </div>
     </div>
     <div className="sponsored-container snaps category-list">
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/phone.jpeg" alt="slider" />
           </div>
           <div className="title">
             <p>Laptops</p>
           </div>
         </a>
       </Link>
      
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/men.jpeg" alt="slider" />
           </div>
           <div className="title">
             <p>Mobile Phones</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/chair.jpeg" alt="slider" />
           </div>
           <div className="title">
             <p>Furniture</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/phone.jpeg" alt="slider" />
           </div>
           <div className="title">
             <p>Female fashion</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/women.png" alt="slider" />
           </div>
           <div className="title">
             <p>Male fashion</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/women.png" alt="slider" />
           </div>
           <div className="title">
             <p>phones</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/women.png" alt="slider" />
           </div>
           <div className="title">
             <p>Male fashion</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/women.png" alt="slider" />
           </div>
           <div className="title">
             <p>Phones</p>
           </div>
         </a>
       </Link>
       <Link href="">
         <a className="sponsored-item">
           <div className="image">
             <img src="/assets/images/laptop.jpeg" alt="slider" />
           </div>
           <div className="title">
             <p>Female fashion</p>
           </div>
         </a>
       </Link>
      
     </div>
   </>
  )
}

export default CategoryList
