import React, { useState } from "react";

let SingerList = () =>{
    const [singerLists,setSingerList] = useState([{
        singername:'Balu',
        songname:"aaa",
        playcount:0,
        royality:0
    },
    {
        singername:'Sriram',
        songname:"bbb",
        playcount:0,
        royality:0

    },
    {
        singername:'Geetha',
        songname:"ccc",
        playcount:0,
        royality:0

    },
    {
        singername:'Sree',
        songname:"ddd",
        playcount:0,
        royality:0

    },
    {
        singername:'Mani',
        songname:"mmm",
        playcount:0,
        royality:0

    },
    {
        singername:'Sruthi',
        songname:"nnn",
        playcount:0,
        royality:0

    },
]);


let handleIncr = (index) =>{
    console.log(index)
    const singerist1 = [...singerLists]
    const obj = singerLists[index]
    obj.playcount = obj.playcount + 1;
    obj.royality = obj.royality+500;
    singerist1[index] = obj;
    setSingerList(singerist1)
   

}

    return (
        <React.Fragment>
            <div className="section p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary" style={{fontWeight:'bold'}}>Singer List</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                          <table className="table ">
                             <thead className="bg-secondary text-white text-center">
                                <tr>
                                  <th>Singer Name</th>
                                  <th>Song Name</th>
                                  <th>playCount</th>
                                </tr>
                             </thead>
                             <tbody className="text-center">
                                 {
                                     singerLists.map((item,index)=>{
                                         return(
                                             <tr key={index}>
                                                 <td>{item.singername}</td>
                                                 <td>{item.songname}
                                                 </td>
                                                 <td><button  onClick={()=>handleIncr(index)} className="btn btn-sm btn-primary">PlayCount {item.playcount}</button></td>
                                             </tr>
                                         )
                                     })
                                 }
                             </tbody>
                         </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                singerLists.map((item,index)=>{
                                    return (
                                        <ul key={index}>
                                            <li>{item.singername} royality:{item.royality}</li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default SingerList;