'use client';
import { useState } from 'react';

interface SmallButtonProps {
  content: string;
}

const SmallButton: React.FC<SmallButtonProps> = ({ content }) => {
  return (
    <button className="font-[700] text-Poppins text-[15px] bg-[#FF7119] text-white px-3 py-2 rounded-r-3xl rounded-bl-3xl">
      {content}
    </button>
  );
};
interface BigButtonProps {
  content: string;
}

const BigButton: React.FC<BigButtonProps> = ({ content }) => {
  return (
    <button
      className="font-[700] w-[100%] text-Poppins text-[15px] bg-[#FF7119] text-white px-4 py-2 rounded-r-2xl rounded-bl-2xl 
    max-sm:text-[12px]
    "
    >
      {content}
    </button>
  );
};

interface CategoriesCardProps {
  text: string;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ text }) => {
  return (
    <div className=" bg-white rounded-xl overflow-hidden ease-in-out">
      <div>
        <img
          src="/category-img.png"
          alt="carrot img"
          className=" -rotate-3 hover:rotate-0 origin-top-left duration-300 -ml-4 cursor-pointer"
        />
      </div>
      <h4 className="text-[20px] font-poppins font-[300] text-center mt-2 pb-2 max-sm:font-[500]">
        {' '}
        {text}
      </h4>
    </div>
  );
};

interface BestSellerCardProps {
  content: string;
}

const BestSellerCard: React.FC<BestSellerCardProps> = ({ content }) => {
  return (
    <div className="border-white rounded-[40px] border-4  py-8  h-auto max-sm:py-4 max-sm:rounded-[20px]">
      <div className="flex justify-between px-4 max-sm:flex-col ">
        <div className="flex gap-3 ">
          <div className="">
            <p
              className="font-[600] font-Poppins text-[12px] bg-[#FAB143] px-2 py-1  rounded-sm uppercase
              max-md:text-[10px]
              max-sm:text-[8px]
              "
            >
              New Launch
            </p>
          </div>
          <div>
            <p
              className="font-[600] font-Poppins text-[12px] bg-[#89A809] px-2 py-1  rounded-sm
              max-md:text-[10px]
              max-sm:text-[8px]
              "
            >
              Instant Cereal
            </p>
          </div>
        </div>
        <div className="flex gap-1 max-sm:mt-2">
          <div>
            <img src="/star.png" alt="stars" />
          </div>
          <p className="font-[600] font-Poppins text-[12px] my-auto">4.1(12)</p>
        </div>
      </div>
      <div>
        <img
          src="/best-seller-box.png"
          alt=""
          className="mx-auto my-8 max-sm:w-[90px] max-sm:my-2"
        />
      </div>
      <p
        className="font-poppins text-[20px] font-[500] text-center
        max-sm:text-[12px] 
        "
      >
        {content}
      </p>
      <p
        className="font-[400] text-[15px] text-center my-4
        max-sm:text-[12px] max-sm:my-2
        "
      >
        Ragi Malt | Dark Chocolate | Honey
      </p>
      <p
        className="font-poppins font-[500] text-[#FF7119] text-[20px] text-center
        max-sm:text-[14px]
        "
      >
        <span className="font-poppins font-[300] text-[#A7A8AB] text-[20px] mr-3 line-through">
          &#8377;999.00{' '}
        </span>{' '}
        &#8377;999.00
      </p>
      <div className="mt-4 w-[60%] mx-auto max-sm:w-[90%]">
        <BigButton content="Buy Now" />
      </div>
    </div>
  );
};

interface RootsCardProps {
  text: string;
}

const RootsCard: React.FC<RootsCardProps> = ({ text }) => {
  return (
    <div className=" bg-white rounded-xl overflow-hidden ease-in-out  max-md:mt-3">
      <h4 className="text-[27px] font-paytone font-[400] text-start mt-2 pb-2 pl-2 max-sm:text-[16px]">
        {' '}
        {text}
      </h4>
      <div>
        <img
          src="/healthy-img.jpg"
          alt="carrot img"
          className=" -rotate-6 hover:rotate-0 origin-top-left duration-300 mt-6 cursor-pointer rounded-xl max-sm:w-[180px]"
        />
      </div>
    </div>
  );
};

interface BlogCardProps {
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date }) => {
  return (
    <div
      className="group cursor-pointer w-[460px] h-auto relative rounded-3xl  overflow-hidden
      max-md:w-[100%] max-md:mt-6
      "
    >
      <img
        src="/baby.png"
        alt=""
        className="absolute -z-10 w-[100%] h-[100%] bg-black group-hover:brightness-50 group-hover:scale-110 duration-300"
      />

      <div className="z-10 px-4 py-3">
        <div className="flex gap-2 items-center">
          <p className="font-poppins font-[500] text-[20px] text-[#A7A8AB] group-hover:text-white">
            Kids Sleep{' '}
          </p>
          <p className="bg-[#A7A8AB] rounded-3xl w-[10px] h-[10px] group-hover:bg-white"></p>
          <p className="font-poppins font-[500] text-[20px] text-[#A7A8AB] group-hover:text-white">
            2-4 Months{' '}
          </p>
          <p className="bg-[#A7A8AB] rounded-3xl w-[10px] h-[10px] group-hover:bg-white"></p>
          <p className="font-poppins font-[500] text-[20px] text-[#A7A8AB] group-hover:text-white">
            Games
          </p>
        </div>
        <h3 className="font-poppins leading-[36px] mt-1 font-[500] text-[36px] text-white ">
          The Importance of sleep in child’s development
        </h3>

        <div className="flex gap-3 items-center mt-20">
          <div>
            <img src="/profile-pic.png" alt="" className="w-[40px]" />
          </div>
          <div className="flex text-white items-center gap-3">
            <p className="font-poppins font-[500] text-[20px]">By Mrs Mommy</p>
            <p className="bg-white rounded-3xl w-[10px] h-[10px]"></p>
            <p className="font-poppins font-[500] text-[20px]">
              {' '}
              jan {date},2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RecipiesCardProps {
  recipie: string;
}

const RecipiesCard: React.FC<RecipiesCardProps> = ({ recipie }) => {
  return (
    <div
      className="w-[430px] h-[410px] bg-white overflow-hidden rounded-2xl 
       max-md:w-[100%] max-md:mt-6"
    >
      <div className="px-4 pt-4">
        <p className="font-paytone font-[400] text-[#282828] text-[27px]">
          {recipie}
        </p>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex  gap-2">
            <div>
              <img src="/time.png" alt="" className="w-[20px]" />
            </div>
            <p className="font-poppins text-[15px] font-[400]">20 mins</p>
          </div>
          <div className="flex gap-2">
            <p
              className="font-[600] font-Poppins text-[12px] bg-[#FAB143] px-2 py-1  rounded-[5px]
            max-md:text-[10px]
            max-sm:text-[8px]
            "
            >
              Breakfast
            </p>
            <p
              className="font-[600] font-Poppins text-[12px] bg-[#7B61FF] px-2 py-1  rounded-[5px]
            max-md:text-[10px]
            max-sm:text-[8px]
            "
            >
              2 months +
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <img src="/recipe-img.png" alt="" />
      </div>
    </div>
  );
};

const BlogPageCard = () => {
  return (
    <div className="">
      <div>
        <img src="/kid.png" alt="" className="w-[100%]" />
      </div>
      <div className="flex gap-2 mt-4">
        <div className="flex items-center ">
          <p className="w-2 h-2 rounded-xl bg-violet-600 mr-2"></p>
          <p className="uppercase font-[600] text-poppins text-[12px]">Kids</p>
        </div>
        <div className="flex items-center">
          <p className="w-2 h-2 rounded-xl bg-[#89A809] mr-2"></p>
          <p className="uppercase font-[600] text-poppins text-[12px]">
            Play area
          </p>
        </div>
      </div>

      <p className="font-[500] text-[48px] font-poppins max-sm:leading-tight max-sm:text-[35px]">
        Why are grains important for kids?
      </p>
      <p className="font-poppins font-[300] text-[20px] my-6">
        March 1, 2023 / By Mrs Mommy{' '}
      </p>
      <p className="font-poppins font-[400] text-[15px]  ">
        Holistically pontificate installed base portals after maintainable
        products. Phosfluorescently engage worldwide methodologies with
        technology. Dynamically procrastinate B2C users after installed base
        benefits. Dramatically visualize customer directed convergence without
        revolutionary ROI.
      </p>

      <div className="flex justify-between items-center my-6">
        <div className="flex gap-4 mt-2">
          <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
          <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
          <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
          <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
        </div>

        <div className="md:w-[15vw]">
          <BigButton content="Read More" />
        </div>
      </div>
    </div>
  );
};

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Looking For..."
        className="border border-gray-300 p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[80%]"
      />
      <div>
        <img src="/search-icon.png" alt="" className="h-10 w-10" />
      </div>
    </form>
  );
};

const BlogPageSideCard = () => {
  return (
    <div className="flex gap-2 mt-6 pt-6">
      <div className=" w-[50%]">
        <img src="/kid.png" alt="" className="h-full rounded-xl" />
      </div>
      <div className="">
        <h4 className="font-poppins font-[300] text-[18px]">March, 2023</h4>
        <h4 className="font-[500] font-poppins text-[18px] mt-2">
          Why are grains important for kids?
        </h4>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4">
      <div
        className={`flex border-[#FFE2C3] border-2 hover:bg-[#FFE2C3]  items-center justify-between px-4  cursor-pointer ${
          isExpanded
            ? 'font-[600] rounded-t-3xl pt-4 bg-[#FFE2C3]'
            : 'rounded-3xl py-4 font-[400]'
        }`}
        onClick={handleToggle}
      >
        <div className="w-4/5 flex items-center gap-2">
          <div className="flex items-center">
            <svg
              fill="#FF7119"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
            </svg>
          </div>

          <p className="font-poppins text-[15px]">{question}</p>
        </div>
        <div className="w-1/5 text-right">
          {isExpanded ? (
            <span className=" text-xl">-</span>
          ) : (
            <span className=" text-xl">+</span>
          )}
        </div>
      </div>
      {isExpanded && (
        <div className=" px-12 py-2 pb-6  bg-[#FFE2C3] rounded-b-3xl">
          <p className="font-poppins font-[400] text-[15px]">{answer}</p>
        </div>
      )}
    </div>
  );
};

export {
  SmallButton,
  BigButton,
  CategoriesCard,
  BestSellerCard,
  RootsCard,
  BlogCard,
  RecipiesCard,
  BlogPageCard,
  BlogPageSideCard,
  SearchBox,
  FAQItem,
};
