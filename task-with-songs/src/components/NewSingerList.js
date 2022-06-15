import React, { useState } from "react";

let NewSingerList = () =>{
    const [singerLists,setSingerList] = useState([{
        id:1,
        singername:'Balu',
        songsList:[{id:1,songname:"aaa",playcount:0,royality:0},{id:2,songname:"bbb",playcount:0,royality:0}]
    },
    {
        id:2,
        singername:'Geetha',
        songsList:[{id:1,songname:"ccc",playcount:0,royality:0},{id:2,songname:"ddd",playcount:0,royality:0}]
    }
]);


let handleIncr = (id,singername) =>{
   singerLists.map((item)=>{
    return(
        item.songsList.map((songs,index)=>{
            return(
                setSingerList({
                     [songs.playcount]:songs.playcount+1
                })
            )
        })
    )
   })
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
                                     singerLists.map((item,id)=>{
                                         return(
                                             item.songsList.map((songs,index)=>{
                                             return(
                                                <tr key={index}>
                                                <td>{item.singername}</td>
                                                <td>{songs.songname}
                                                </td>
                                                <td><button  onClick={()=>handleIncr(songs.id,item.singername)} className="btn btn-sm btn-primary">PlayCount {songs.playcount}</button></td>
                                            </tr>
                                             )})
                                             
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
                                
                                singerLists.map((item,id)=>{
                                    //if(item.name === name ){
                                        return(
                                            item.songsList.map((songs)=>{
                                                if(item.id !== songs.id){
                                                return(
                                                    
                                                    <ul key={songs.id}>
                                                     <li>{item.singername} royality:{songs.royality}</li>
                                                    </ul>
                                                )}
                                            })
                                        )
                                    //}
                                })

                             
                        
                                        
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default NewSingerList;