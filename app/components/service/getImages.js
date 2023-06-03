import { listAll, ref } from "firebase/storage";

export async function getImages() {
  const storageRef = ref(storage, "/galleryImages/mountains");
  const imageList = await listAll(storageRef);

  

  return urls;
}
