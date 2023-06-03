import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../config/firebase";

export const useGallery = async (path) => {
  let imageList = [];
  let isLoading = true;
  let error = null;

  try {
    const storageRef = ref(storage, path);
    const listResult = await listAll(storageRef);

    const images = listResult.items?.map(async (image) => {
      const url = await getDownloadURL(image);
      return { url, type: path.split("/")[2] };
    });
    imageList = await Promise.all(images);
    // console.log(imageList);
    isLoading = false;
  } catch (err) {
    // console.log(err);
    error = err.message;
    isLoading = false;
  }

  return { imageList, isLoading, error };
};
