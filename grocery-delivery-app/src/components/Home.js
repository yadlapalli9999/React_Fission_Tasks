import React, { useMemo, useState } from "react";
import {useSelector} from 'react-redux';
import Card from "./Card";
let Home = () =>{
    let [catgogry,setCatgogry] = useState('');
     let {grocerieTypes,groceries} = useSelector((state)=>{return state['grocery']}) 
     const filteredData = useMemo(()=>{
         return groceries.filter(item => item.type === catgogry);  
     },[catgogry])
    return(
        <React.Fragment>
            <section className="p-3" style={{marginTop:'5rem'}}>
                <div className="container animated zoomIn">
                    <div className="row">
                        <div className="col">
                            <h3>Multiple Grocery Stores</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5 text-center">
                <div className="row justify-content-center animated slideInLeft">
                    <div className="col-md-4">
                        <select className="custom-select" onChange={(e)=>setCatgogry(e.target.value)}>
                            <option value="select your a grocery store">select your a grocery store</option>
                            {grocerieTypes && grocerieTypes.map((item)=>{return(<option value={item.name} key={item.id}>{item.name}</option>)})}
                        </select>
                    </div>
                </div>
                <div className="row" style={{marginTop:'40px'}}>
                    <div className="col-md-12">
                        <div className="card-columns">
                    {
                        filteredData.map((item)=>{
                            return(
                                <Card key={item.id} item={item}/>
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

export default Home;