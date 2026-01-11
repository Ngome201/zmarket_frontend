"use client";
import categoryEl from "@/public/img/category-section-el.png";
import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";
import { Tab } from "@headlessui/react";
import { featuredItems } from "@/public/data/featured";
import {articleDatas} from "@/public/zmarket.data.ts/article.data"
import FeaturedCardHome1 from "./FeaturedCardHome1";
import Link from "next/link";
import { useEffect, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Property = () => {

  const [articles,setArticles] =useState([]);

  // useEffect(()=>(
  //       setArticles(State.getStatesOfCountry(country?.isoCode))
  //   ),[country])


  return (
    <section className="bg-[var(--bg-2)] py-[30px] lg:py-[80px]  relative">
      {/* <Image
        className="absolute hidden lg:block top-12 right-12"
        src={categoryEl}
        alt="img"
      /> */}
      <div className="container">
        <div className="max-w-[750px] mx-auto flex flex-col items-center text-center px-3">
          {/* <SubHeadingBtn text="Properties" classes="bg-white" /> */}
          <h2 className="h2 mt-3 pt-5 pb-8 lg:pb-14">Découvrir les articles de votre choix</h2>
          {/* <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Top articles du moments
          </p> */}
        </div>
        <div className="">
          <Tab.Group>
            <div className="flex justify-between flex-wrap items-center mb-6 gap-4 px-3">
              <Tab.List className="flex gap-3 flex-wrap">
                {articleDatas.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "rounded-full px-7 py-4 leading-5 duration-300 font-semibold",
                        selected
                          ? "bg-primary shadow text-white outline-none"
                          : "text-neutral-600 hover:bg-primary bg-[var(--primary-light)] hover:text-white"
                      )
                    }>
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
              <Link href="#" className="btn-outline  flex items-center gap-2">
                View All
                <i className="las la-long-arrow-alt-right text-2xl"></i>
              </Link>
            </div>
            <Tab.Panels className="mt-2">
              {articleDatas.map((posts, idx) => (
                <Tab.Panel key={idx} className="grid grid-cols-12 gap-6">
                  {posts.articles.map((item) => (
                    <FeaturedCardHome1 key={item.id} item={item} />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <div className="flex justify-center mt-10">
            <Link
              href="#"
              className="btn-primary flex items-center gap-2 font-medium">
              <i className="las la-hourglass-start text-2xl"></i> Show More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
