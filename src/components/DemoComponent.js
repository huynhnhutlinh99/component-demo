//import thư viện react và ComponentAPI
import React, { Component } from 'react';

//tạo một component có tên là DemoComponent
class DemoComponent extends Component{
    render(){
    //trả về một cái component
    return(
    <div className="demo-component" >Hello Word</div>
    );
    }
}

//xuất component DemoComponent
export default DemoComponent;