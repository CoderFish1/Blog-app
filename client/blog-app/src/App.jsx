import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="cont">
        <div className=" nav flex justify-between p-4">
          <div className="logo font-bold text-2xl">BlogLOGO</div>
          <ul className="flex gap-4">
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        <div className="main">
          <div className="post flex p-5">
            <img
              className="w-[300px] h-[200px] object-cover p-2"
              src="https://images.unsplash.com/photo-1759346329380-b8fde799521a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt=""
            />

            <div className="text">
              <h2 className="text-2xl font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                recusandae minima deleniti.
              </h2>
              <p className="info flex">
                <div className="authorName">authorName</div>
                <div>25-10-2025 23:59</div>
              </p>
              <p className="summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                consectetur, necessitatibus, voluptatibus fuga fugit quasi cum
                tenetur nisi dolorum consequatur aliquam qui!
              </p>
            </div>
          </div>

          <div className="post flex p-5">
            <img
              className="w-[300px] h-[200px] p-2"
              src="https://images.unsplash.com/photo-1761214127863-559b3915f9bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt=""
            />
            <div className="text">
              <h2 className="text-2xl font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                recusandae minima deleniti.
              </h2>
              <p className="info flex">
                <div className="authorName">authorName</div>
                <div>25-10-2025 23:59</div>
              </p>
              <p className="summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                consectetur, necessitatibus, voluptatibus fuga fugit quasi cum
                tenetur nisi dolorum consequatur aliquam qui!
              </p>
            </div>
          </div>

          <div className="post flex p-5">
            <img
              className="w-[300px] h-[200px] p-2"
              src="https://images.unsplash.com/photo-1761133135231-2f2fe70907e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt=""
            />
            <div className="text">
              <h2 className="text-2xl font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                recusandae minima deleniti.
              </h2>
              <p className="info flex">
                <div className="authorName">authorName</div>
                <div>25-10-2025 23:59</div>
              </p>
              <p className="summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                consectetur, necessitatibus, voluptatibus fuga fugit quasi cum
                tenetur nisi dolorum consequatur aliquam qui!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
