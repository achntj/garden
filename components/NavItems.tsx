import NavLink from "./NavLink";
import {
  ChatBubbleLeftEllipsisIcon,
  CpuChipIcon,
  CodeBracketIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  SparklesIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Socials from "./Socials";

export default function NavItems() {
  return (
    <div className="block space-y-2">
      <NavLink href="/" name="Home">
        <HomeIcon />
      </NavLink>
      <NavLink href="/projects" name="Projects">
        <CodeBracketIcon />
      </NavLink>
      <NavLink href="/posts" name="Posts">
        <PencilSquareIcon />
      </NavLink>
      <NavLink href="/contact" name="Contact">
        <ChatBubbleLeftEllipsisIcon />
      </NavLink>
      <h3 className="font-bold text-gray-700 text-base px-2 block !my-4">
        Digital Garden
      </h3>
      <NavLink href="/spotify" name="Listening to">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.1966 21.2764C30.4604 16.6821 17.6998 16.2597 10.3146 18.5011C9.12845 18.861 7.87433 18.1915 7.51523 17.0056C7.15585 15.8189 7.82446 14.5656 9.01123 14.2051C17.4891 11.6318 31.5819 12.1288 40.4879 17.4155C41.5549 18.0488 41.9045 19.4265 41.2723 20.4914C40.6395 21.5581 39.2607 21.9098 38.1966 21.2764ZM37.9433 28.0812C37.4005 28.9619 36.249 29.2381 35.3694 28.6973C28.92 24.733 19.0848 23.5843 11.4544 25.9005C10.4651 26.1994 9.41991 25.6417 9.11927 24.6539C8.82122 23.6645 9.37921 22.6214 10.3671 22.3204C19.0837 19.6752 29.9199 20.9563 37.3277 25.5088C38.2072 26.0504 38.4841 27.2025 37.9433 28.0812ZM35.0066 34.6163C34.5753 35.3236 33.6545 35.5451 32.9498 35.1141C27.314 31.6696 20.2203 30.8918 11.8662 32.7999C11.0612 32.9844 10.2588 32.48 10.0753 31.6753C9.89077 30.8703 10.3935 30.0678 11.2002 29.8841C20.3424 27.7943 28.1844 28.6936 34.5102 32.5591C35.2155 32.9899 35.4376 33.9113 35.0066 34.6163ZM23.9999 0C10.7454 0 0 10.7451 0 23.9996C0 37.2555 10.7454 48 23.9999 48C37.2549 48 48 37.2555 48 23.9996C48 10.7451 37.2549 0 23.9999 0Z"
            fill="currentColor"
          />
        </svg>
      </NavLink>

      <NavLink href="/now" name="Now">
        <InformationCircleIcon />
      </NavLink>

      <NavLink href="/design" name="Design Inspiration">
        <SparklesIcon />
      </NavLink>
      <NavLink href="/uses" name="Uses">
        <CpuChipIcon />
      </NavLink>

      <NavLink href="/coursework" name="Course Work">
        <BookOpenIcon />
      </NavLink>

      <div className="flex flex-col bg-neutral-300 sm:bg-neutral-50 bg-opacity-40 dark:bg-neutral-900 p-2 rounded-lg space-y-4">
        <h3 className="font-bold text-gray-700 text-base mt-3 block">
          On the Web
        </h3>
        <Socials />
      </div>
    </div>
  );
}
