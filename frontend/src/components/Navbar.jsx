// // import React, { useEffect, useState } from "react";
// // import { Clapperboard, Dices } from "lucide-react";
// // import ThemeToggle from "./ThemeToggle";

// // const Navbar = () => {
// //   const [show, setShow] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;

// //       if (currentScrollY > lastScrollY && currentScrollY > 60) {
// //         setShow(false); // scrolling down
// //       } else {
// //         setShow(true); // scrolling up
// //       }

// //       setLastScrollY(currentScrollY);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   return (
// //     <nav
// //       className={`w-full border-b border-base-300 bg-base-100
// //       fixed top-0 z-50 transition-transform duration-300
// //       ${show ? "translate-y-0" : "-translate-y-full"}`}
// //     >
// //       <div className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-end">
// //         {/* Center: Logo + Name */}
// //         <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
// //           <Clapperboard size={18} className="text-primary" />

// //           <span className="text-lg sm:text-xl font-semibold tracking-tight text-base-content">
// //             Reel
// //             <span className="font-normal opacity-70">Roulette</span>
// //           </span>
// //         </div>

// //         {/* Right: Theme Toggle */}
// //         <div className="flex items-center">
// //           <ThemeToggle />
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Clapperboard } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 60) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 z-50 w-full
//       border-b border-neutral-500 bg-base-100
//       transition-transform duration-300
//       ${show ? "translate-y-0" : "-translate-y-full"}`}
//     >
//       <div className="relative mx-auto max-w-7xl px-4 py-3 flex items-center">
//         {/* Left spacer */}
//         <div className="w-8" />

//         {/* Center branding */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
//           <Clapperboard size={16} className="text-base-content" />
//           <span className="text-sm sm:text-base font-semibold tracking-tight">
//             Reel<span className="font-normal opacity-60">Roulette</span>
//           </span>
//         </div>

//         {/* Right controls */}
//         <div className="ml-auto">
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Clapperboard, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-neutral-600 bg-base-100 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-2 flex items-center h-12">
        {/* Left spacer */}
        {/* <div className="w-8" /> */}

        {/* upcoming feture button and its modal */}
        <button
          onClick={() => document.getElementById("future_features").showModal()}
          className="btn btn-ghost btn-sm gap-2 opacity-70 hover:opacity-100 transition"
        >
          <Sparkles size={14} />
          <span className="hidden sm:inline">Upcoming</span>
        </button>

        {/* Center branding */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Clapperboard size={16} className="text-base-content" />
          <span className="text-sm sm:text-base font-semibold tracking-tight">
            Spotlight
          </span>
        </div>

        <dialog id="future_features" className="modal">
          <div className="modal-box p-0 overflow-hidden relative max-w-md rounded-none border border-neutral-600 max-h-[80vh]">
            <div className="flex flex-col max-h-[80vh]">
              {/* 🧭 Header */}
              <div className="border-b border-neutral-500 p-4 bg-base-100">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Upcoming Features
                </h3>
              </div>

              {/* 📄 Content */}
              <div className="p-6 space-y-3 overflow-y-auto flex-1">
                <ul className="space-y-2 text-sm text-base-content/80">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Dedicated movie search page</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Google login</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Personal watchlist</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Pick one movie from your watchlist</span>
                  </li>
                </ul>
              </div>

              {/* ❌ Sticky close */}
              <div className="sticky bottom-0 bg-base-100 border-t border-neutral-500 p-4">
                <form method="dialog" className="flex justify-end">
                  <button className="px-4 py-2 text-sm border border-neutral-500 hover:bg-base-200 transition">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </dialog>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
