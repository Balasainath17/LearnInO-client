'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import defaultImage from '../../../public/Images/main banner.png'

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data,isLoading } = useGetHeroDataQuery("Banner", {});
  const [search,setSearch] = useState("");
  const router = useRouter()
  

  const handleSearch = () => {
   if(search === ""){
    return
   }else{
    router.push(`/courses?title=${search}`);
   }
  }


  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div className="w-full 1000px:flex items-center">
      {/* <div className="absolute top-[80px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:left-8 1500px:left-14"></div> */}
      <div className="1000px:w-[50%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10 ">
        <Image
          src={data?.layout?.banner?.image?.url || defaultImage}
          width={400}
          height={400}
          alt=""
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
        />
      </div>
      <div className="1000px:w-[50%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px] ">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[50px] font-[900] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%]">
          {/* {data?.layout?.banner?.title} */}
          Empower Your Mind,
          <br />
          <span className="title-text-gradient 1000px:text-[65px] text-[35px]">Learn</span> <span className="title-text-gradient 1000px:text-[65px] text-[35px]">In</span> <span className="title-text-gradient 1000px:text-[65px] text-[35px]">O</span>nline
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
         {data?.layout?.banner?.subTitle}
        </p>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-none dark:bg-[#575757] bg-[#7b5555] placeholder:text-[#ded7d7dd] rounded-[5px] p-2 w-full h-full outline-none  text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
          onClick={handleSearch}
          >
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
          {/* <Image
            src={require("../../../public/assests/client-1.jpg")}
            alt=""
            className="rounded-full"
          />
          <Image
            src={require("../../../public/assests/client-2.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/assests/client-3.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          /> */}
          {/* <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[#7b5555]"
            >
              View Courses
            </Link>{" "}
          </p> */}
        </div>
        <br />
      </div>
    </div>
    )
   }
   </>
  );
};

export default Hero;