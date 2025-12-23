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
import { Clapperboard } from "lucide-react";
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
        <div className="w-8" />

        {/* Center branding */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Clapperboard size={16} className="text-base-content" />
          <span className="text-sm sm:text-base font-semibold tracking-tight">
            Spotlight
          </span>
        </div>

        {/* Right controls */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
