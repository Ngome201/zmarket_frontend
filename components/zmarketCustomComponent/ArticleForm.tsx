"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import { categoryDtoData } from "@/public/zmarket.data.ts/categoryDto.data";
import { ArticleDto } from "@/public/dto/article.dto";
import { CatalogDto } from "@/public/dto/catalog.dto";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/solid'



const ArticleForm : React.FC<any>= ({data,setVisible}) => {
  
  const [articleDto,setArticleDto]= useState<ArticleDto>(data);
  const [catalogDtos,setCatalogDtos]= useState<CatalogDto[]>([]);

  useEffect (()=>{
    setCatalogDtos(categoryDtoData)
  },[])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement |HTMLSelectElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let article : any = { ...articleDto };
    article[`${name}`] = val;
    
    setArticleDto(article);
    console.log(articleDto)
  };
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles:any) => {

    console.log("enter in drop zone accepted files : ",acceptedFiles);

    if (acceptedFiles?.length) {
      setFiles((previousFiles:File[]) => 
        [...previousFiles,
        ...acceptedFiles.map((file:File) =>
            
            Object.assign(file, { preview: URL.createObjectURL(file) })
        )]
    )
    }

  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    onDrop
  })

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file:any) => URL.revokeObjectURL(file.preview))
  }, [files])

  const removeFile = (name:any) => {
    setFiles((files:any) => files.filter((file:any) => file.name !== name))
  }

  const removeAll = () => {
    setFiles([])
  }
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const imgs = event.target.files;
      let files : File []=[]
      console.log(imgs)

      if (imgs && imgs.length > 0) {
        for (let i = 0; i < imgs.length; i++) {
          files.push(imgs[i]);
        }
      }
      setFiles((previousFiles:File[]) => 
        [...previousFiles,
        ...files.map((file:File) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
        )]
      )
    };
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    console.log("enter in form submit");
    let article= articleDto

    if (!files?.length) return

    const formData = new FormData()
    files.forEach(file => {
      article.img.push(file.name)
      formData.append('file', file)
    })
    formData.append('upload_preset', 'friendsbook')

    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
    // const data = await fetch(URL, {
    //   method: 'POST',
    //   body: formData
    // }).then(res => res.json())

    console.log(formData)
  }

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[66.66%] mx-auto">
          {/* Item 1 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Détails de l'article </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-4">
                <div className="border-t pt-4">
                  
                  
                  <p className="mt-6 mb-4 text-xl font-medium">Nom de l'article:</p>
                  <input
                    type="text"
                    onChange={(e)=>onInputChange(e,"name")}
                    className="w-full border p-2 focus:outline-none rounded-md text-base"
                    placeholder={articleDto.name==""?"Entrez le nom":articleDto.name}
                  />
                  <p className="mt-6 mb-4 text-xl font-medium">Prix:</p>
                  <input
                    type="text"
                    onChange={(e)=>onInputChange(e,"price")}
                    className="w-full border p-2 focus:outline-none rounded-md text-base"
                    placeholder={articleDto.price==""?"Entrez le prix":articleDto.price}
                  />
                  <p className="mt-6 mb-4 text-xl font-medium">Contact:</p>
                  <input
                    type="text"
                    onChange={(e)=>onInputChange(e,"phone")}
                    className="w-full border p-2 focus:outline-none rounded-md text-base"
                    placeholder={articleDto.price==""?"Entrez un numéro à contacter":articleDto.price}
                  />
                  <p className="mt-6 mb-4 text-xl font-medium">Description :</p>
                  <textarea
                    rows={5}
                    onChange={(e)=>onInputChange(e,"description")}
                    className="w-full border p-2 focus:outline-none rounded-md "
                    placeholder={articleDto.description==""?"Description ...":articleDto.description}>

                  </textarea>
                  
                  <p className="mt-6 mb-4 text-xl font-medium"> Categorie </p>
                  <select value={articleDto.cateorygId} 
                    onChange={(e)=>onInputChange(e,'categoryId')}
                    className="w-full bg-transparent px-5 py-3 focus:outline-none border rounded-md text-base pr-3">
                    {
                      categoryDtoData.map((c)=>(
                        <option value={c.id} key={c.id}>{c.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </Accordion>
          </div>
          {/* Item 2 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Images </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full cursor-pointer rounded-2xl border border-dashed">
                    {/* <Dropzone/> */}
                    <span 
                    {...getRootProps({
                      className: "flex flex-col w-full items-center justify-center bg-[var(--bg-2)] max-sm:hidden py-3"
                    })}>
                      <CloudArrowUpIcon className="w-[60px] h-[60px]" />
                      <span className="h3 clr-neutral-500 text-center mt-4 mb-3">
                        Drag & Drop
                      </span>
                      <span className="block text-center mb-6 clr-neutral-500">
                        OR
                      </span>
                    </span>
                    <div className="inline-block py-3 px-6 rounded-full bg-[#354764] text-white my-5">
                      
                    <input onChange={handleFileChange} type="file" id="dropzone-file" multiple 
                      accept=".png, .jpg, .jpeg" className="hidden" />
                      Select Files
                    </div>
                    <span className="flex items-center justify-center flex-wrap gap-5">
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum allowed file size is 9.00 MB
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum 10 files are allowed
                          </span>
                        </span>
                      </span>
                    <div>
                      <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                        {files.map((file :any) => (
                          <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
                            <Image
                              src={file.preview}
                              alt={file.name}
                              width={100}
                              height={100}
                              onLoad={() => {
                                URL.revokeObjectURL(file.name)
                              }}
                              className='h-full w-full object-contain rounded-md'
                            />
                            <button
                              type='button'
                              className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                              onClick={() => removeFile(file.name)}
                            >
                              <XMarkIcon className='w-5 h-5 fill-white hover:fill-secondary-400 transition-colors' />
                            </button>
                            <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                              {file.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div> 
                  </label>
                  
                </div>
                
                <p className="mt-6 mb-4 text-xl font-medium">Address :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Address"
                />
              </div>
            </Accordion>
          </div>
          <div 
          onClick={handleSubmit}
          className="btn-primary font-semibold inline-block">
            Enregistrer
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
