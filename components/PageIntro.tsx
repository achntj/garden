export default function PageIntro({ children, classes }) {
  return (
    <div className="relative">
      <div
        className={`absolute -inset-px opacity-50 dark:bg-gradient-to-r dark:from-white dark:to-pink-600 bg-gradient-to-r from-[#dcd5fc] via-[#c7fdf1] to-[#d3c8ff] rounded-lg border-[1px] dark:blur transition duration-500 ${classes}`}
      ></div>
      <div className="relative dark:bg-[#050505] rounded-lg p-8 mb-10 sm:flex items-end justify-between">
        {children}
      </div>
    </div>
  );
}
