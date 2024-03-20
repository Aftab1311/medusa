import React from 'react';
import { BlogCard } from './ReusableComponents';

const Blogs = () => {
  return (
    <div className=" mt-20 container">
      <div>
        <div>
          <img src="leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Blogs
        </p>
        <div className="flex justify-between gap-3 my-8 max-md:flex-col ">
          <BlogCard date="9th" />
          <BlogCard date="19th" />
          <BlogCard date="29th" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
