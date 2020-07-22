//import thư viện react
import React from 'react';
import DemoProps from './components/DemoProps'

//tạo một component có tên là App
function App() {
  return (
    <div className="App">
      <DemoProps name="My Name is Linh"/>
    </div>
  );
}

//xuất component App
export default App;
