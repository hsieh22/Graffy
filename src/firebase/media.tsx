'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import { storage } from "./firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { Button } from "@/app/_components/Button";

const Loading = ({ progress }: { progress: number }) => {
  return <>{Math.round(progress) > 0 && <>{`${Math.round(progress)}%`}</>}</>;
};

type fileType = "AUDIO" | "IMAGE";

interface FileUploaderProps {
  id: string;
  fileType: fileType;
  setAsset: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FileUploader = ({
  id,
  fileType,
  setAsset,
  setProgress,
  setIsLoading,
}: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const { fetchSongs, fetchLists } = useCards();

  // Handle functions
  const handleButtonClick = () => {
    // Trigger the click event of the hidden input element
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsLoading(true);

    // upload to firebase
    const uploadedFile = e.target.files[0];
    const storageRef = ref(
      storage,
      `${fileType === "AUDIO" ? "Audio" : "Image"}/${Date.now()}-${uploadedFile.name
      }`,
    );
    const uploadTask = uploadBytesResumable(storageRef, uploadedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },

      () => { }, //handle err
      async () => {
        try {
          // Delete previous image from firebase
          // if (fileType === "IMAGE" && imageAsset && deleteImg) {
          //   await deleteImg(imageAsset);
          // }

          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadUrl)
          setAsset(downloadUrl);

          // update mongoDB backend
          // if (fileType === "AUDIO") {
          //   await updateSong(id, { audioURL: downloadUrl });
          // }
          // if (fileType === "IMAGE") {
          //   await updateList(id, { imageURL: downloadUrl });
          // }

          setProgress(0);
          setIsLoading(false);
          // fetchSongs();
          // fetchLists();
        } catch (err) {
          console.error("Error:", err);
        }
      },
    );
  };

  // Styles

  const editTextStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // opacity: isImgHovered ? 1 : 0, // Show on hover
    transition: "opacity 0.3s", // Add transition for fade-in/out
  };

  return (
    <>
      <input
        type="file"
        name="upload-file"
        accept={fileType === "AUDIO" ? "audio/*" : "image/*"}
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e)}
      />
      {fileType === "AUDIO" ? (
        // <IconButton aria-label="upload file" onClick={handleButtonClick}>
        //   <CloudUploadIcon />
        // </IconButton>
        <Button onClick={handleButtonClick}>
          <span>Upload audio</span>
        </Button>
      ) : (
        // <IconButton style={editTextStyle} size="large" onClick={handleButtonClick}>
        //   <CloudUploadIcon />
        // </IconButton>
          <Button onClick={handleButtonClick}>
            <span>Upload image</span>
          </Button>
      )}
    </>
  );
};


interface FirebaseImageProps {
  listId: string;
  imageURL: string;
}

export function FirebaseImage({ listId, imageURL }: FirebaseImageProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [imageAsset, setImageAsset] = useState<string>(imageURL);
  const [uploadProgress, setUploadProgress] = useState(0);
  // const [isImgHovered, setIsImgHovered] = useState<boolean>(false);

  // handle functions
  // const handleDeleteFile = async (url: string) => {
  //   const deleteRef = ref(storage, url);
  //   await deleteObject(deleteRef).then(() => {
  //     setImageAsset(default_imageURL);
  //     setIsUploading(false);
  //   });
  // };

  // const handleImgMouseOver = () => {
  //   setIsImgHovered(true);
  // };

  // const handleImgMouseOut = () => {
  //   setIsImgHovered(false);
  // };

  // Style
  const imageStyle = {
    width: "100%",
    height: "100%",
    transition: "transform 0.3s", // Add transition for smooth scaling
    // transform: isImgHovered ? "scale(1.05)" : "scale(1)", // Scale the image on hover
  };

  return (
    <div>
      {isUploading && <Loading progress={uploadProgress} />}
      {!isUploading && (
        <>
          <div
            className="basis-1/4"
            // onMouseOver={handleImgMouseOver}
            // onMouseOut={handleImgMouseOut}
            style={{ position: "relative" }} // Add this style
          >
            <Image src={imageAsset} alt="playListImg" style={imageStyle} />
            <FileUploader
              fileType="IMAGE"
              id={listId}
              setAsset={setImageAsset}
              setProgress={setUploadProgress}
              setIsLoading={setIsUploading}
            />
          </div>
        </>
      )}
    </div>
  );
}
