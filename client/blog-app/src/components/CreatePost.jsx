import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [filename, setFileName] = useState("Choose file");
  const [files, setFiles] = useState(null);
  const [redirect, setredirect] = useState(false);

  async function createNewPost(e) {
    e.preventDefault();
    const data = new FormData(); //creates a container to send data to server as Normal JSON cannot send files
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files);
    const response = await fetch('http://localhost:4000/post',{
        method: 'POST',
        body: data,
        credentials: 'include',
    });
    if (response.ok) {
    const postInfo = await response.json();
    console.log("Post created:", postInfo);
    setredirect(true);
  }
  }
  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <form
  onSubmit={createNewPost}
  className="flex flex-col items-center gap-6 mt-10 px-4"
>
  <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
    <input
      value={title}
      onChange={e => setTitle(e.target.value)}
      className="
        border-2 border-gray-300 text-lg
        w-full
        p-2
        rounded-xl
        shadow-sm
      "
      type="text"
      placeholder="Title"
    />

    <input
      value={summary}
      onChange={e => setSummary(e.target.value)}
      className="
        border-2 border-gray-300
        w-full
        h-20
        p-2
        rounded-xl
        text-lg
        shadow-sm
      "
      type="text"
      placeholder="Summary"
    />

    <label
      className="
        inline-flex items-center justify-center
        w-full sm:w-[200px]
        h-10
        border-2 border-gray-300
        rounded-xl
        cursor-pointer
        bg-gray-50
        hover:bg-gray-100
        transition
        text-sm
      "
    >
      {filename}
      <input
        type="file"
        className="hidden"
        onChange={e => {
          setFiles(e.target.files[0]);
          setFileName(e.target.files[0]?.name || "Choose file");
        }}
      />
    </label>
  </div>

  <textarea
    value={content}
    onChange={e => setContent(e.target.value)}
    className="
      w-full max-w-2xl
      h-[250px] sm:h-[300px]
      p-4
      border-2 border-gray-300
      rounded-2xl
      text-lg
      focus:outline-none focus:border-gray-500
      resize-none
      shadow-sm
    "
    placeholder="Write your blog post here..."
  />

  <button
    className="
      inline-flex items-center justify-center
      w-full max-w-2xl
      h-10
      bg-blue-600
      text-lg
      font-bold
      text-white
      rounded-xl
      hover:bg-blue-700
      transition
    "
  >
    Create Post
  </button>
</form>

  );
}
