import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkGreen wrapper">
      <div className="hidden grid-cols-3 xl:grid">
        <div className="space-y-5">
          <div className="">
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="logo" className="w-36" />
              </a>
            </Link>
          </div>

          <ul className="flex justify-start space-x-5">
            <li>
              <Link href="/">
                <a className="text-lg font-semibold hover:text-lightCoral">
                  home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-lg font-semibold hover:text-lightCoral">
                  about
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="font-medium text-left text-gray-400">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>

        <div className="space-y-10">
          <div className="flex justify-end space-x-5">
            <img src="/assets/icon-facebook.svg" alt="facebook" />
            <img src="/assets/icon-pinterest.svg" alt="pinterest" />
            <img src="/assets/icon-twitter.svg" alt="twitter" />
          </div>

          <div className="text-right text-gray-400">
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* tablet footer */}
      <div className="hidden grid-cols-2 gap-10 md:grid xl:hidden ">
        <div className="space-y-10">
          <div className="">
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="logo" className="w-36" />
              </a>
            </Link>
          </div>

          <ul className="flex justify-start space-x-5">
            <li>
              <Link href="/">
                <a className="text-lg font-semibold">home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-lg font-semibold">about</a>
              </Link>
            </li>
          </ul>

          <div className="flex justify-start space-x-5">
            <img src="/assets/icon-facebook.svg" alt="facebook" />
            <img src="/assets/icon-pinterest.svg" alt="pinterest" />
            <img src="/assets/icon-twitter.svg" alt="twitter" />
          </div>
        </div>

        <div className="space-y-10">
          <div className="font-medium text-right text-gray-400">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>

          <div className="text-right text-gray-400">
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* mobile footer */}
      <div className="flex flex-col items-center justify-center my-10 space-y-10 md:hidden">
        <div>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" className="w-36" />
            </a>
          </Link>
        </div>

        <ul className="flex justify-center space-x-5">
          <li>
            <Link href="/">
              <a className="text-lg font-semibold">home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg font-semibold">about</a>
            </Link>
          </li>
        </ul>

        <div className="font-medium text-center text-gray-400">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>

        <div className="flex justify-center space-x-5">
          <img src="/assets/icon-facebook.svg" alt="facebook" />
          <img src="/assets/icon-pinterest.svg" alt="pinterest" />
          <img src="/assets/icon-twitter.svg" alt="twitter" />
        </div>

        <div className="text-center text-gray-400">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
