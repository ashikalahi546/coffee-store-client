import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, category, details, name, photo, quantity, supplier, taste } = coffee;

  const handleDelete = (_id)=>{
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

        
    console.log('delete confirm')

    fetch(`http://localhost:8500/coffee/${_id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount  > 0){
          Swal.fire({
            title: "Deleted!",
            text: "your coffee has been deleted.",
            icon: "success"
          });
        }
    })
    }
      });
  }


  return (
    <div className="shadow-xl bg-white p-3 rounded-md">
      <div className="flex gap-x-10">
        <img className="size-60 rounded-md" src={photo} alt="" />
        <div className="space-y-3">
          <h1 className="text-2xl">{name}</h1>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn">View</button>
        <button onClick={()=>handleDelete(_id)} className="btn mx-3">Delete</button>
       <Link to={`/updatecoffee/${_id}`}>
       <button className="btn">update</button>
       </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
