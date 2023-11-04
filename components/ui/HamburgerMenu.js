"use client";
function HamburgerMenu(props) {
  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={() => {
          props.toggleMenu(); // Call the toggleMenu function
        }}
        className="text-black focus:outline-none lg:hidden"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            props.isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
            props.isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
            props.isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>
    </div>
  );
}

export default HamburgerMenu;
