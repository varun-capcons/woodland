import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaCartPlus,
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaUser,
} from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="py-4 shadow-sm font-avenirm bg-green-100 lg:bg-white">
        <div className="container flex items-center justify-between">
          {/* logo start */}
          <Link href="/">
            <a className="block w-24">
              <img
                src="/images/logo.png"
                alt="easyshop logo"
                className="w-full"
              />
            </a>
          </Link>
          {/* logo end*/}
          {/* search start */}
          <div className="w-full xl:max-w-lg lg:max-w-lg lg:flex relative hidden">
            <span className="absolute left-4 top-4 text-md text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-12 w-full border border-r-0 border-primary p-3 rounded-1-md focus:ring-primary"
            />
            <button className="bg-primary px-8 text-white border border-6 hover:border-primary hover:bg-transparent hover:text-primary transition rounded-r-md focus:ring-primary">
              Search
            </button>
          </div>
          {/* search ends */}
          {/* icons start */}
          <div className="flex space-x-10">
            <div className="flex flex-col items-center justify-center">
              <Link href="/wishlist">
                <a>
                  <span class="relative inline-block">
                    <FaRegHeart size={24} />
                    <span class="absolute top-1 right-19 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
                      99
                    </span>
                  </span>
                  <p className="font-avenirm">wishlist</p>
                </a>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Link href="cart">
                <a>
                  <span class="relative inline-block">
                    <FaCartPlus size={24} />
                    <span class="absolute top-1 right-19 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
                      9
                    </span>
                  </span>
                  <p className="font-avenirm">cart</p>
                </a>
              </Link>
            </div>
            <Link href="/account">
              <div className="flex flex-col items-center justify-center">
                <span class="relative inline-block">
                  <FaUser size={24} />
                </span>
                <p className="font-avenirm">Account</p>
              </div>
            </Link>
          </div>
          {/* icon ends */}
        </div>
      </header>
      <header className="bg-black container items-center justify-between font-semibold hidden lg:block">
        <div className="flex justify-between px-8 items-center">
          <div class="flex justify-center items-center space-x-9">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span className="text-white items-center flex">
                <FaBars />
                <p className="ml-2 font-avenirm">All Category</p>
              </span>
              {/* dropdown menu */}
            </div>
            <Link href="/categories/new-arrival">
              <a className="text-white font-avenirm">New Arrival</a>
            </Link>
            <Link href="/categories/men">
              <a className="text-white font-avenirm">Men</a>
            </Link>
            <Link href="/categories/women">
              <a className="text-white font-avenirm">Women</a>
            </Link>
            <Link href="/categories/">
              <a className="text-white font-avenirm">StreetWear</a>
            </Link>
          </div>
          <div>
            <Link href="/accounts">
              <a className="text-white font-avenirm">Outlet</a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
