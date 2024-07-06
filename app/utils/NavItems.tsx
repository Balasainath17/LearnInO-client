import Link from "next/link";
import React from "react";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({activeItem,isMobile}) => {
  return (
    <>
        <div className="hidden 800px:flex space-x-6">
            {
                navItemsData && navItemsData.map((i,index) => (
                    <Link href={`${i.url}`} key={index} passHref>
                        <span 
                        className={`${
                            activeItem === index? "text-[#cb2056] dark:text-[#7fdba1] " : "text-black dark:text-white "
                        }text-[18px] px-3 font-Poppins font-[400] transition-colors duration-200 
            hover:text-[#dd4c08] hover:dark:text-[#dba08e]`}
                        >
                            {i.name}

                        </span>
                    </Link>
                ))
            }
        </div>
        {
            isMobile && (
                <div className="800px:hidden mt-5">
                    <div className="w-full text-center py-6">
                        <Link href={"/"} passHref>
                            <span className={`text-[25px] font-Poppins font-[500] text-gradient `}>
                                LearnInO</span>
                        </Link>
                    </div>
                    {
                        navItemsData && navItemsData.map((i,index) => (
                            // check this if any error occurs in future...
                        <Link href={`${i.url}`} key={index} passHref>
                        <span 
                         className={`${
                             activeItem === index? "text-[#cb2056] dark:text-[#7fdba1]  " : "text-black dark:text-white "
                         } block py-5 text-[18px] px-6 font-Poppins font-[400] transition-colors duration-200 
                        hover:text-[#dd4c08] hover:dark:text-[#dba08e]`}
                         >
                            {i.name}
                         </span> 
                     </Link>
                     ))
                    }
                </div>

            )
        }
    </>
  )
};

export default NavItems;
