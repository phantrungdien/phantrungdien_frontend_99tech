import { IRequestQA } from "@domain/home";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const renderQAndA = (values: IRequestQA) => {
    return (
      <div className="mb-3">
        <p className="mb-1">
          {`Problem ${values?.no}: `}
          <a
            href={values?.urlQ || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            {values?.title}
          </a>
        </p>
        <p>
          Answer:{" "}
          <Link
            to={values?.redirectTo}
            className="px-2 rounded-md bg-gray-300 hover:bg-white border border-[#d1d5dc]"
          >
            {values?.redirectTo}
          </Link>
        </p>
      </div>
    );
  };

  const arrQA = [
    {
      no: 1,
      urlQ: "https://s5tech.notion.site/Problem-1-Three-ways-to-sum-to-n-6052097f0f144200bbea7c2fa75c0124",
      title: "Three ways to sum to n",
      redirectTo: "/problem1",
    },
    {
      no: 2,
      urlQ: "https://s5tech.notion.site/Problem-2-Fancy-Form-033865bc7c98401296f1caa748be1b04",
      title: "Currency Converter",
      redirectTo: "/problem2",
    },
    {
      no: 3,
      urlQ: "https://s5tech.notion.site/Problem-3-Messy-React-20bf71f8e9de4228b606f240c446b722",
      title: "Messy React",
      redirectTo: "/problem3",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl mb-8">
        Phan Trung Điền - Frontend Developer
      </h1>
      <div className="w-full">
        {arrQA?.map((item: IRequestQA) => renderQAndA(item))}
      </div>
    </div>
  );
};
