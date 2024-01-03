import { ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "..";

const listFilesAndUrls = async (folderPath) => {
  const folderRef = ref(firebaseStorage, folderPath);
  const result = await listAll(folderRef);

  // Map over each item and get the download URL
  const filesData = await Promise.all(
    result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return {
        name: itemRef.name,
        url: url
      };
    })
  );

  return filesData;
};

export default listFilesAndUrls;