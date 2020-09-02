import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import md5 from 'md5'

export default function Home() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setURL("");
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const rand = new Date().getTime()
    const newFilename = md5(file.name+rand)
    const uploadTask = storage.ref(`/images/${newFilename}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(newFilename)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" />
    </div>
  );
}