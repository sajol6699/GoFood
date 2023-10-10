import React ,{useEffect,useState}from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Home() {

  const [search, setsearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFooditem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0],response[1])
  };
  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
    <Navbar/> 
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner"style={{maxHeight:"500px"}}>
  <div className="carousel-caption"style={{"zIndex":"1"}}>
  
    <div className="d-flex justify-content-center" >
      <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} aria-label="Search"/>
     
    </div>

  </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300x300?tea" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300x300?pizza" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
       <img src="https://source.unsplash.com/random/300x300burger" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     <div className="m-3 container">
     { foodCat !== [] ? (
       foodCat.map((data) => {
         return (
           <div className="row mb-3">
             <div key={data._id} className="fs-3 m-3">
               {data.CategoryName}
             </div>
             <hr />
             { fooditem !== [] ? (
               fooditem
                 .filter(
                   (data2) =>
                     data2.CategoryName === data.CategoryName &&
                     data2.name
                       .toLowerCase()
                       .includes(search.toLocaleLowerCase())
                 )
                 .map((filtereditems) => {
                   return (
                     <div
                       key={filtereditems._id}
                       className="mx-1  col-12 col-md-6 col-lg-3 "
                     >
                       <Card
                         name={filtereditems.name}
                         options={filtereditems.options[0]}
                         img={filtereditems.img}
                       
                       ></Card>
                     </div>
                   );
                 })
             ) : (
               <div> No such items</div>
             )}
           </div>
         );
       })
     ) : (
       <div> ddfd</div>
     )}
   </div>
   

    <Footer/>
    </div>
  )
}

export default Home