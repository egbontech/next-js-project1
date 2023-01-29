import Link from 'next/link'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/Md'

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-links">
        <Link href="">
          <a>
            <div className="sidebar-category-container">
              <div className="sidebar-category">
                <div className="sidebar-image-text">
                  <div className="sidebar-category-image">
                    <img src="/assets/images/chair.jpeg" alt="" />
                  </div>
                  <p>Furniture</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="left-sidebar-links">
        <Link href="">
          <a>
            <div className="sidebar-category-container">
              <div className="sidebar-category">
                <div className="sidebar-image-text">
                  <div className="sidebar-category-image">
                    <img src="/assets/images/men.jpeg" alt="" />
                  </div>
                  <p>Men&apos;s Fashion</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="left-sidebar-links">
        <Link href="">
          <a>
            <div className="sidebar-category-container">
              <div className="sidebar-category">
                <div className="sidebar-image-text">
                  <div className="sidebar-category-image">
                    <img src="/assets/images/women.png" alt="" />
                  </div>
                  <p>Women&apos;s Fashion</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="left-sidebar-links">
        <Link href="">
          <a>
            <div className="sidebar-category-container">
              <div className="sidebar-category">
                <div className="sidebar-image-text">
                  <div className="sidebar-category-image">
                    <img src="/assets/images/phone.jpeg" alt="" />
                  </div>
                  <p>Mobile,Tablets And Assesories</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="left-sidebar-links">
        <Link href="">
          <a>
            <div className="sidebar-category-container">
              <div className="sidebar-category">
                <div className="sidebar-image-text">
                  <div className="sidebar-category-image">
                    <img src="/assets/images/laptop.jpeg" alt="" />
                  </div>
                  <p>Laptops & Computers</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LeftSideBar
