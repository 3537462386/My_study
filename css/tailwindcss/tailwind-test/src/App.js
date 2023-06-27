// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from './Todos';
// App 组件就是函数
function App() {
  // 组件函数返回值是一段jsx
  // jsx  js in html 语法糖
  // AST 虚拟 DOM 
  // 类名声明 的className class
  // 函数式编程
  const [count, setCount] = useState(1);
  setTimeout(() => {
    setCount(2)
  }, 1000);
  return (
    <Todos />
    // <div className='box'>
    //   hwdadad
    // </div>
    // <div className="text-[14px] hover:text-[30px] md:bg-blue-500 bg-red-500 p-1 border-black border-solid border">
    //   hwdadadadadadadadad{count}
    // </div>
    
  );
}

export default App;
