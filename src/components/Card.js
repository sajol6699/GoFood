import React from 'react'

function Card(props) {

let option = props.options;
let priceOptions =Object.keys(option)

  return (
    <div>    <div>
   
       <div className="card m-3" style={{"width": "18rem","maxHight":"360px"}}>
     <img src={props.img} className="card-img-top" alt="..."   style={{height:"120px",objectFit:"fill"}} />
     <div className="card-body">
       <h5 className="card-title">{props.name}</h5>
       
       <div className="container w-100">
       <select className=" h-100 m-2 bg-success rounded" >
       {
           Array.from(Array(6),(e,i)=>{
               return <option key={i+1} value="{i+1}">{i+1}</option>
           })
       }
       
       </select>
       <select className='h-100  m-2 bg-success rounded'>
       {
priceOptions.map((data)=>{
  return <option value={data} key={data}>{data}</option>
})

       }
       
       
       
   
       </select>
       <p className='d-inline'>Total-Price</p>
       <button className="btn btn-success justify-center ms-2  " >Add To Cart  </button>
       </div>
     </div>
   </div>
       </div></div>
  )
}

export default Card