import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import bgImg from "../../../assets/images/Community/ellips.svg";
import { Link } from "react-router-dom";
function SocialMedia() {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row-reverse lg:flex-row-reverse mt-4 mb-20 px-4 md:px-20 lg:px-40 py-10">
      <div
        className="flex justify-center gap-9 items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Adjust padding as needed
        }}
      >
        <div className="flex  flex-col justify-center items-center">
          <svg
            width="18px"
            height="48"
            fill="#d6bb96"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 40 48"
            class="sc-e700408c-0 hxsnHS"
          >
            <path
              d="M36.803 9.878c-.103 0-.208.002-.308.007h-.057c-.63 0-6.424.247-15.574 8.833-1.731 1.624-1.333 2.689-.949 3.719.368.985.716 1.916-.81 3.348-.019.016-1.8 1.586-4.273 3.678-1.208-3.974-1.844-7.153-1.999-9.996-.159-2.927.679-3.987 1.488-5.012 1.406-1.782 2.62-3.321-2.298-14.125-.088-.194-.251-.33-.397-.33a.22.22 0 0 0-.16.067c-.073.073-.105.199-.098.373.011.281.566 3.142 1.103 5.909.421 2.175.82 4.23.834 4.418.004.053-.02.107-.07.158-.116.122-.348.207-.565.207-.1 0-.34-.021-.399-.218l-.427-1.427C11.063 6.876 9.44 1.443 9.226.764 9.158.547 9.01.407 8.848.407a.262.262 0 0 0-.194.086C8.6.552 8.54.665 8.56.87c.025.236.315 2.294.621 4.473.375 2.659.8 5.671.816 5.903.011.165-.219.316-.436.366-.277.018-.522-.078-.57-.224-.075-.224-.824-3.217-1.485-5.858-.531-2.119-1.033-4.121-1.099-4.349-.078-.266-.24-.36-.363-.36a.27.27 0 0 0-.199.089c-.08.085-.117.218-.104.375.06.726.623 6.7.864 9.25l.114 1.205a.23.23 0 0 1-.065.187c-.095.101-.285.165-.495.165-.242 0-.432-.084-.473-.207-.058-.181-.463-2.237-.891-4.414-.543-2.764-1.105-5.621-1.2-5.89-.103-.285-.24-.346-.337-.346-.17 0-.31.19-.322.443-.541 11.61 1.188 12.712 3.19 13.988 1.154.736 2.347 1.497 3.309 4.307 1.399 4.088 1.85 8.686 2.084 12.246-4.504 3.69-7.912 6.23-10.131 7.546-.927.55-1.394 1.176-1.388 1.86.011 1.358 1.867 2.436 1.94 2.477.053.038 1.334.926 2.837.926 1.123 0 2.057-.496 2.788-1.486.32-.663 2.025-3.056 4.246-5.813.085 1.681.2 3.557.432 5.009C12.945 47.105 14.1 48 15.618 48c.344 0 .708-.047 1.018-.093.873-.13 1.697-.303 2.186-1.004.61-.874.61-2.51.005-5.145-.399-1.728-1.143-3.858-2.004-6.324-.284-.814-.58-1.657-.873-2.522 2.335-2.529 4.341-4.36 5.97-5.445 1.969-1.714 5.443-4.728 8.805-7.644 4.53-3.928 8.807-7.64 9.018-7.838.252-.236.321-.535.196-.84-.25-.61-1.338-1.267-3.136-1.267Z"
              fill="#d6bb96"
            ></path>
          </svg>

          <div className="bg-[#d6bb96] w-[1px]  h-[260px]"></div>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl text-blue-900 mb-4">
            Follow along on <br /> the gastronomic journey
          </h2>
          <p>
            Connect with us on our social media to watch new restaurants get
            announced and snag more deals
          </p>
        </div>
      </div>
      <div className="text-center lg:pl-20">
        <div className="flex justify-center gap-8">
          {/* Facebook */}
          <a href="#social-media-link">
            <FaFacebookF className="w-10 h-10 text-blue-600" />
          </a>
          {/* Twitter */}
          <a href="#social-media-link">
            <FaTwitter className="w-10 h-10 text-blue-400" />
          </a>
          {/* Instagram */}
          <a href="#social-media-link">
            <FaInstagram className="w-10 h-10 text-pink-500" />
          </a>
          {/* LinkedIn */}
          <a href="#social-media-link">
            <FaLinkedinIn className="w-10 h-10 text-blue-800" />
          </a>
        </div>
        <hr className="my-5" />
        <p>
          Or visit our &nbsp;
          <Link className="text-orange-600" to={"/faq"}>
            FAQs
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SocialMedia;
