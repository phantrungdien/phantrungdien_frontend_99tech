import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl mb-8">
        Phan Trung Điền - Frontend Developer
      </h1>
      <div className="w-full">
        <div className="mb-3">
          <p className="mb-1">
            Problem 1:{" "}
            <a
              href="https://s5tech.notion.site/Problem-1-Three-ways-to-sum-to-n-6052097f0f144200bbea7c2fa75c0124"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              Three ways to sum to n
            </a>
          </p>
          <p>
            Answer:{" "}
            <Link
              to="/problem1"
              className="px-2 rounded-md bg-gray-300 hover:bg-white border border-[#d1d5dc]"
            >
              /problem1
            </Link>
          </p>
        </div>
        <div className="mb-3">
          <p className="mb-1">
            Problem 2:{" "}
            <a
              href="https://s5tech.notion.site/Problem-1-Three-ways-to-sum-to-n-6052097f0f144200bbea7c2fa75c0124"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              Currency Converter
            </a>
          </p>
          <p>
            Answer:{" "}
            <Link
              to="/problem2"
              className="px-2 rounded-md bg-gray-300 hover:bg-white border border-[#d1d5dc]"
            >
              /problem2
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
