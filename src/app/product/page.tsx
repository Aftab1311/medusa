import {
    BestSellerCard,
    BigButton,
    FAQItem,
  } from '../../../components/ReusableComponents';
  import React from 'react';
  
  const page = () => {
    return (
      <div className="w-full mt-12 flex gap-5 px-2 md:px-8">
        <div className="w-full md:w-[80%] ">
          <div className="hidden md:block mb-6">
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
  
            <h2
              className="mt-6 font-poppins font-[700] text-[48px] leading-[60px]
            max-sm:text-[36px] max-sm:leading-[36px] max-sm:font-[500]
            "
            >
              Instant Millet Mix 228g
            </h2>
            <p className=" mt-4 font-[300] text-[20px] font-poppins">
              Ragi Malt | Dark Chocolate | Honey
            </p>
            <p
              className="mt-3 font-poppins font-[700] text-[#FF7119] text-[36px] text-start
          max-sm:text-[24px]
          "
            >
              <span className="font-poppins font-[300] text-[#A7A8AB] mr-3 line-through">
                &#8377;999.00{' '}
              </span>{' '}
              &#8377;999.00
            </p>
          </div>
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[45%] max-md:w-[100%]">
              <div className="flex flex-col items-center w-[100%]">
                <div className="border-2 border-[#A7A8AB] rounded-2xl w-full flex items-center justify-center py-24">
                  <img
                    src="/best-seller-box.png"
                    alt=""
                    className="w-[200px] h-[290px]"
                  />
                </div>
                <div className="flex justify-between w-full mt-6">
                  <div className="border-2 border-[#A7A8AB] rounded-2xl px-6 py-4 max-md:px-8 max-sm:px-4">
                    <img
                      src="/best-seller-box.png"
                      alt=""
                      className="w-[50px] h-[70px]"
                    />
                  </div>
                  <div className="border-2 border-[#A7A8AB] rounded-2xl px-6 py-4 max-md:px-8 max-sm:px-4">
                    <img
                      src="/best-seller-box.png"
                      alt=""
                      className="w-[50px] h-[70px]"
                    />
                  </div>
                  <div className="border-2 border-[#A7A8AB] rounded-2xl px-6 py-4 max-md:px-8 max-sm:px-4">
                    <img
                      src="/best-seller-box.png"
                      alt=""
                      className="w-[50px] h-[70px]"
                    />
                  </div>
                  <div className="border-2 border-[#A7A8AB] rounded-2xl px-6 py-4 max-md:px-8 max-sm:px-4">
                    <img
                      src="/best-seller-box.png"
                      alt=""
                      className="w-[50px] h-[70px]"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="w-[55%] max-md:w-[100%]">
              <div className="max-md:hidden">
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
  
                <h2 className="mt-6 font-poppins font-[700] text-[48px] leading-[60px]">
                  Instant Millet Mix 228g
                </h2>
                <p className=" mt-4 font-[300] text-[20px] font-poppins">
                  Ragi Malt | Dark Chocolate | Honey
                </p>
                <p
                  className="mt-3 font-poppins font-[500] text-[#FF7119] text-[36px] text-start
          max-sm:text-[14px]
          "
                >
                  <span className="font-poppins font-[300] text-[#A7A8AB] mr-3 line-through">
                    &#8377;999.00{' '}
                  </span>{' '}
                  &#8377;999.00
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-5 mt-3">
                <div className="flex flex-col justify-center items-center">
                  <p
                    className="w-12 h-12 rounded-3xl bg-[#A7A8AB] mb-4
                  
                  "
                  ></p>
                  <p className="max-sm:text-[14px]">Gluten Free</p>
                </div>
                <div className="flex flex-col justify-center items-center max-sm:justify-center">
                  <p className="w-12 h-12 rounded-3xl bg-[#A7A8AB] mb-4"></p>
                  <p className="max-sm:text-[14px]">Gluten Free</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="w-12 h-12 rounded-3xl bg-[#A7A8AB] mb-4"></p>
                  <p className="max-sm:text-[14px]">Gluten Free</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="w-12 h-12 rounded-3xl bg-[#A7A8AB] mb-4"></p>
                  <p className="max-sm:text-[14px]">Gluten Free</p>
                </div>
              </div>
  
              <ul className="my-6 list-disc ml-8 font-poppins text-[15px] font-[400]">
                <li>
                  Made using blend of supergrains (Ragi, Jowar, Rice, Corn) and
                  Cocoa
                </li>
                <li>
                  Zero maida, refined sugar, salt, trans fat, palm oil,
                  preservatives, artificial colours or flavours
                </li>
                <li>100% vegetarian</li>
                <li>
                  How to store: Keep in a cool, dry place. Once it’s opened, store
                  it in an airtight container.
                </li>
                <li>Best before 9 months from the date of packaging</li>
                <li>
                  Storage requirements- Once opened, transfer the contents to an
                  air tight container and store in a cool dry place
                </li>
              </ul>
  
              <div className="flex gap-5 items-center">
                <div className="w-[150px] h-[50px] flex items-center justify-between p-6 border-2 border-[#A7A8AB] rounded-3xl">
                  <p className="cursor-pointer">-</p>
                  <p className="font-poppins font-[400] text-[15px]">1</p>
                  <p className="cursor-pointer">+</p>
                </div>
  
                <div className="w-[30%]">
                  <BigButton content="Buy Now" />
                </div>
              </div>
            </div>
          </div>
  
          <p className="font-poppons font-[700] text-[24px] mt-20">Description</p>
          <p className="font-[400] text-[15px] font-poppins mt-6">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
  
          <div className="my-12">
            <p className="font-poppins font-[700] text-[24px]">FAQs</p>
            <div className="mt-6">
              <FAQItem
                question="How many servings are there in a packet?"
                answer="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
              />
              <FAQItem
                question="How many servings are there in a packet?"
                answer="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
              />
              <FAQItem
                question="How many servings are there in a packet?"
                answer="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
              />
              <FAQItem
                question="How many servings are there in a packet?"
                answer="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
              />
              <FAQItem
                question="How many servings are there in a packet?"
                answer="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
              />
            </div>
          </div>
  
          <div className="my-12">
            <p className="font-poppins font-[700] text-[24px]">
              Related Products
            </p>
            <div className="grid grid-cols-3 gap-x-8 mt-6 max-md:grid-cols-2">
              <BestSellerCard content="Instant Millet Mix 228g" />
              <BestSellerCard content="Instant Millet Mix 228g" />
              <div className="max-md:mt-6">
                <BestSellerCard content="Instant Millet Mix 228g" />
              </div>
            </div>
          </div>
        </div>
  
        <div className="w-[20%] hidden lg:block">
          <p className="font-poppins font-[700] text-[24px]">Cart</p>
          <div className="mt-6 mb-4 pb-4 border-b-2 border-[#A7A8AB] flex justify-between gap-2">
            <div className="w-[102px] h-[102px] border-2 border-[#A7A8AB] rounded-2xl px-6 py-4">
              <img
                src="/best-seller-box.png"
                alt=""
                className="w-[50px] h-[65px]"
              />
            </div>
            <div>
              <p className="font-[500] font-poppins text-[20px] w-[80%]">
                Instant Millet Mix 228g
              </p>
              <p className="font-poppins font-[400] text-[15px]">1 x ₹999.00</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="font-poppins font-[400]">Subtotal</p>
              <p className="font-poppins font-[400]">₹999.00</p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-1/2">
                <BigButton content="View Cart" />
              </div>
              <div className="w-[48%]">
                <BigButton content="Checkout" />
              </div>
            </div>
          </div>
  
          <div>
            <p className="font-poppins font-[700] text-[24px] mt-12">
              Popular Products
            </p>
            <div className="divide-y-2 border-[#A7A8AB]">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
  
          <div>
            <p className="font-poppins font-[700] text-[24px] mt-12">
              Popular Categories
            </p>
            <div>
              <p className="my-4 pt-4 border-t-2 border-[#A7A8AB] font-poppins font-[500] text-[20px]">
                Khichdi Mix
              </p>
              <p className="mb-4 pt-4 border-t-2 border-[#A7A8AB] font-poppins font-[500] text-[20px]">
                Ragi Mix
              </p>
              <p className="mb-4 pt-4 border-t-2 border-[#A7A8AB] font-poppins font-[500] text-[20px]">
                Sattu Mix
              </p>
              <p className="mb-4 py-4 border-y-2 border-[#A7A8AB] font-poppins font-[500] text-[20px]">
                Pluses Mix
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default page;
  
  const ProductCard = () => {
    return (
      <div className="mt-4 pt-4 flex justify-between gap-2 ">
        <div className="w-[102px] h-[102px] border-2 border-[#A7A8AB] rounded-2xl px-6 py-4">
          <img src="/best-seller-box.png" alt="" className="w-[50px] h-[65px]" />
        </div>
        <div>
          <p className="font-[500] font-poppins text-[20px] w-[100%]">
            Instant Millet Mix 228g
          </p>
          <p className="font-poppins font-[400] text-[15px]">1 x ₹999.00</p>
        </div>
      </div>
    );
  };
  