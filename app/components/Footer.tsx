import { format } from "date-fns";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const year = format(new Date(), "yyyy");
  return (
    <footer className=" bg-cwsBlue text-white mt-auto">
      <div className="flex">
        <div className="w-1/3 p-12">
          <h2 className="text-cwsGreen">Product Categories</h2>
          <div>Hosting and Domains</div>
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
          <SocialIcon url="https://twitter.com/jaketrent" bgColor="white" />
          {/* <FontAwesomeIcon className="fa-brands fa-facebook-f" /> */}
          {/* Col3 */}
          {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg> */}
        </div>
      </div>
      <div className="flex justify-end p-12">
        Copyright © {year} Steven Kaiser
      </div>
    </footer>
  );
}
