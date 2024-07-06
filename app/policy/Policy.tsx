import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} items-center pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul className=" ml-[15px] text-[20px] font-Poppins text-justify" style={{ listStyle: "inside" }}>
        <li className="py-3" >The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
        <li className="py-3">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
        <li className="py-3">You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        <li className="py-3">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
        <li className="py-3">It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
        <li className="py-3">This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
        <li className="py-3">All trademarks reproduced in this website which is not the property of, or licensed to, the operator is acknowledged on the website.</li>
        <li className="py-3">Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense. From time to time this website may also include links to other websites.</li>
        <li className="py-3">These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We take no responsibility for the content of the linked website(s).</li>
      </ul>
      </div>
    </div>
  );
};

export default Policy;