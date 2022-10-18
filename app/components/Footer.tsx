import { format } from "date-fns";
import { Link } from "@remix-run/react";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";

export default function Footer() {
  // year formatting
  const year = format(new Date(), "yyyy");

  // scroll to top functionality
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    });
  }, []);

  return (
    <footer className=" bg-cwsBlue text-white mt-auto">
      <div className="flex max-w-screen-lg m-auto">
        <div className="w-1/3 p-12  ">
          <h2 className="text-cwsGreen">Product Categories</h2>
          <div>
            <Link to="/">Hosting and Domains</Link>
          </div>
          <div>Monthly Maintenance</div>
          <div>Web Design & Development</div>
        </div>
        <div className="w-1/3 p-12">
          <h2 className="text-cwsGreen">Quick Links</h2>
          <div>Meet Our Team</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
        <div className="w-1/3 p-12">
          <SocialIcon
            style={{ height: 25, width: 25 }}
            className="m-1"
            target="_blank"
            url="https://twitter.com/childrenhaving"
            bgColor="white"
            label="twitter"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            className="m-1"
            target="_blank"
            url="https://facebook.com/chcband"
            bgColor="white"
            label="facebook"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            className="m-1"
            target="_blank"
            url="https://instagram.com/childrenhavingchildren"
            bgColor="white"
            label="instagram"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            className="m-1"
            target="_blank"
            url="mailto:skaiser33@gmail.com"
            bgColor="white"
            label="email"
          />

          <div className="flex  p-12 text-sm">
            Copyright © {year} Steven Kaiser
          </div>
        </div>
        <button
          type="button"
          className={
            showTop
              ? "inline-flex focus:ring-offset-gray-100 px-5 items-center hover:cursor-pointer"
              : "hidden"
          }
          id="scroll-to-top"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
