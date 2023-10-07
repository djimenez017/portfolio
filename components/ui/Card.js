import React from "react";
import Image from "next/image";
import Expense from "@/assets/images/Projects/expenses.gif";
import Little from "@/assets/images/Projects/expenses.gif";

export default function Card(props) {
  console.log(props);
  return (
    <div className="flex flex-col justify-center text-white m-3">
      <div className="flex flex-col sm:flex-row sm:space-x-5 md:space-y-0 p-3 max-w-xs sm:max-w-3xl mx-auto border border-orange bg-grey">
        <div className="w-full sm:w-1/3 bg-grey grid place-items-center">
          <Image src={Expense} width={450} height={450} />
        </div>
        <div className="w-full sm:w-2/3 bg-grey flex flex-col p-3">
          <h3 className="font-black md:text-3xl text-xl font-custom text-orange">
            {props.title}
          </h3>
          <p className="sm:text-lg text-gray-500 text-base">
            {props.description}
          </p>{" "}
          <br />
          <p className="">
            Technologies Used: <br />
            <br />
            {props.tech.map((techs) => {
              return <span className="bg-orange m-1 p-1">{techs}</span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
