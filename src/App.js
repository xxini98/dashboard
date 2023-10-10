// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Layout from "./components/layout/Layoyt";

function App() {
  return <Layout>content</Layout>;
}

export default App;

// 여기는 <layout/> 이렇게 닫아주면 안된다. header나 footer는 그 자체가 컴포넌트라서 자식이 필요 없기에 </header> </footer>라고 닫아줘도 되는데 layout은 자식이 있기에 그냥 태그로 해줘야한다.
