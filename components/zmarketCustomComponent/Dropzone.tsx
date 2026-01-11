'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Dropzone = ({ className, }:any) => {
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


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    console.log("enter in form submit");
    

    if (!files?.length) return

    const formData = new FormData()
    files.forEach(file => formData.append('file', file))
    formData.append('upload_preset', 'friendsbook')

    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
    // const data = await fetch(URL, {
    //   method: 'POST',
    //   body: formData
    // }).then(res => res.json())

    console.log(formData)
  }

  return (

    <>
      <div
        {...getRootProps({
          className: className
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center bg-[var(--bg-2)] gap-4'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className='mt-10'>
        
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
        <div className='flex gap-4'>
          <button
            type='button'
            onClick={removeAll}
            className='mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors'
          >
            Remove all files
          </button>
        </div>
      </section>
    </>
  )
}

export default Dropzone