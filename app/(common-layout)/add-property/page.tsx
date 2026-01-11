"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import ArticleForm from "@/components/zmarketCustomComponent/ArticleForm";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import { ArticleDto } from "@/public/dto/article.dto";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const emptyArticle:ArticleDto = {
    id: "",
    name: "",
    description: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      longitude: "",
      latitude: ""
    },
    price: "",
    img: [],
    cateorygId: ""
  }
  const [createArticleDto,setCreateArticleDto]= useState<ArticleDto>(emptyArticle);
 
  return (
    <>
      <ArticleForm data={createArticleDto} />
    </>
  );
 };

export default page;
