"use client";

import React, { useRef } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Error authenticating user ${error.message}`);
  }
};

const ImageUpload = ({onFileChange} :{onFileChange : (filepath:string)=> void}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = React.useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.error("Error uploading file", error);
    toast({
      title: "Error uploading file",
      description: `Error uploading file ${error.message}`,
      variant : "destructive"
    })
  };
  const onSucess = (response: any) => {
    setFile(response)
    onFileChange(response.filePath)


    toast({
      title: "File uploaded successfully",
      description: `File uploaded successfully to ${response.filePath}`,
      variant: "default"
    })
  };

  return (
    <ImageKitProvider
      publicKey={'public_TVLXTpzjiCcWA2dckt4mYTgysLk='}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onSuccess={onSucess}
        onError={onError}
        fileName="test-upload.png"
      />

      <Button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          width={20}
          height={20}
          alt="upload icon"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </Button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
