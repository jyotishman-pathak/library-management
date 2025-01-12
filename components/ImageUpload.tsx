"use client"


import React from 'react'
import { IKImage,  ImageKitProvider, IKUpload } from "imagekitio-next";

const authenticator = async()=>{
  try {
    
  } catch (error:any) {
    throw new Error( `Error authenticating user ${error.message}`)
  }
}


const ImageUpload = () => {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload