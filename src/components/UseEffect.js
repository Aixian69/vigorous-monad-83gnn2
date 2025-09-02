// useEffect三种写法对比：无依赖数组、空依赖数组、带依赖数组
import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  // 1️⃣ 不写依赖数组：每次渲染后都运行
  useEffect(() => {
    console.log("👉 [无依赖数组] useEffect 执行 (每次渲染都跑)");
  });

  // 2️⃣ 空依赖数组：只在挂载时运行一次
  useEffect(() => {
    console.log("👉 [空依赖数组] 组件挂载时运行一次 (比如初始化数据)");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log("初始化请求结果:", data));
  }, []);

  // 3️⃣ 带依赖数组 [count]：当 count 变化时运行
  useEffect(() => {
    console.log(`👉 [依赖数组] count 变化时运行: count = ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default UseEffect;
