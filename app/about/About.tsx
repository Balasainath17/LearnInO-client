import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        About <span className="text-gradient">LearnInO?</span>
      </h1>

      <br />
      <div className="w-[85%]  m-auto">
        <p className="text-[18px] font-Poppins text-justify">
        LearnInO (Learn_In_Online) is an advanced Learning Management System (LMS) designed to offer a seamless online learning experience. We understand the diverse needs of modern learners. Our platform caters to educational institutions, corporations, and individual learners, providing a versatile solution that meets a wide range of learning and training requirements. We are more than just a technology provider; we are partners in the journey of education, dedicated to empowering our users with the tools they need to succeed.
          <br />
          <br />
          At LearnInO, our mission is to democratize education by providing an accessible, engaging, and high-quality learning experience to students and professionals worldwide. We envision a future where education knows no boundaries, where every learner, irrespective of their geographical location or financial background, has access to the knowledge and skills needed to succeed in an ever-evolving world. Our platform embodies the principle that learning is a continuous journey, and we are committed to supporting that journey with innovative tools and resources.
          <br />
          <br />
          LearnInO offers a comprehensive suite of features designed to enhance the learning experience. Our platform includes interactive course modules, customizable learning paths,  and a robust analytics dashboard. We support a variety of content formats, including video lectures, resources, and discussion forums, ensuring that learning is engaging and interactive. Learners can access their courses anytime, anywhere, making learning flexible and convenient.
          <br />
          <br />
          At LearnInO, we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But LearnInO is more than just a community &ndash; we&apos;re a
          family. Our supportive community of like-minded individuals is here to
          help you every step of the way, whether you&apos;re just starting out
          or looking to take your skills to the next level.
          <br />
          <br />
          With LearnInO by your side, there&apos;s nothing standing between
          you and your dream job. Our courses and community will provide you
          with the guidance, support, and motivation you need to unleash your
          full potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join the LearnInO family today and
          let&apos;s conquer the programming industry together! With our
          affordable courses, informative videos, and supportive community, the
          sky&apos;s the limit.
        </p>
        <br />
        <br />
        <br />
        <div className="flex flex-col justify-center items-center text-center">
        <Image
            src={require("../../public/Images/bala.jpg")}
                width={200}
              height={200}
            alt=""
            className="rounded-full border-[6px] border-[#0d39ff]"
          />
              <span className="text-[22px] mt-3 font-semibold title-text-gradient">Balasainath</span>
                <h5 className="text-[18px] font-Poppins mt-2">
                  Founder of <span className="text-gradient font-[600]">LearnInO</span>
                </h5>
                <br />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;