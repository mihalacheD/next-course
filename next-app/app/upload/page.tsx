'use client';
import React from 'react';
import { CldUploadWidget,  CldOgImage } from 'next-cloudinary';
import { useState } from 'react';


interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')


  return (
    <>
    {publicId && <CldOgImage src={publicId}  width={270} height={180} alt='img'/>}
    <CldUploadWidget uploadPreset='ktnrqgzy'
                     onSuccess={( result, widget ) => {
                  if(result.event !== 'success') return;
                  const info = result.info as CloudinaryResult;
                  setPublicId(info.public_id);
                     }}>
      {({ open }) => <button
                         className='btn btn-primary'
                         onClick={() => open()}>Upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default UploadPage


