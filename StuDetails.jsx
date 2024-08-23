import React from "react";
import {StuArray} from "./StuArray"
import StuData from "./StuData";

function StuDetails(props){

    console.log(StuArray);

    // function display(stu){
    
    // return<ul>
    //     <li>Stu.Id:{stu.id}</li>
    //     <li>Stu.Name:{stu.name}</li>
    //     <li>Stu.Age:{stu.age}</li>

    // </ul>
    // }
    // return <div>
    // {StuArray.map(display)}
    // </div>
 
    return<div>
        {StuArray.map(stu=>{
            return<ul>
                {props.children} 
                <li>Stu.Id:{stu.id}</li>
                <li>Stu.Name:{stu.name}</li>
                <li>Stu.Age:{stu.age}</li>

            </ul>

        })}

    </div>

}
export default StuDetails;
