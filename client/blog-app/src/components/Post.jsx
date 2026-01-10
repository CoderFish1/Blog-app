import React from 'react'

const Post = () => {
  return (
    <>
      <div className="post flex flex-col md:flex-row p-5 gap-4">
        <img
          className="w-full md:w-[300px] h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1759346329380-b8fde799521a?auto=format&fit=crop&q=60&w=600"
          alt=""
        />

        <div className="text">
          <h2 className="text-xl md:text-2xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="info flex gap-2 text-sm text-gray-500 my-2">
            <span className="authorName font-medium">AuthorName</span>
            <span>25-10-2025 23:59</span>
          </p>

          <p className="summary leading-7 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="post flex flex-col md:flex-row p-5 gap-4">
        <img
          className="w-full md:w-[300px] h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1761214127863-559b3915f9bb?auto=format&fit=crop&q=60&w=600"
          alt=""
        />
        <div className="text">
          <h2 className="text-xl md:text-2xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="info flex gap-2 text-sm text-gray-500 my-2">
            <span className="authorName font-medium">AuthorName</span>
            <span>25-10-2025 23:59</span>
          </p>
          <p className="summary leading-7 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="post flex flex-col md:flex-row p-5 gap-4">
        <img
          className="w-full md:w-[300px] h-[200px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1761133135231-2f2fe70907e7?auto=format&fit=crop&q=60&w=600"
          alt=""
        />
        <div className="text">
          <h2 className="text-xl md:text-2xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="info flex gap-2 text-sm text-gray-500 my-2">
            <span className="authorName font-medium">AuthorName</span>
            <span>25-10-2025 23:59</span>
          </p>
          <p className="summary leading-7 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  )
}

export default Post
