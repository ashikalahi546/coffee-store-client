
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);


    fetch('http://localhost:8500/coffee',{
        method:'POST',

    headers:{
      'content-type':'application/json'  
    },
    body:JSON.stringify(newCoffee)
    }
    )
    .then(res =>res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'user add successfully',
                icon: 'success',
                confirmButtonText: 'Success'
              })
        }
        console.log(data)
    })

 
  };
  return (
    <div className="mx-auto lg:w-6/12 md:w-8/12 w-full md:px-0 px-5 my-8 ">
      <h1 className="text-4xl font-bold text-center my-5">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee} className="space-y-5">
        <div className="flex md:flex-row flex-col gap-4 ">
          <div className="w-full">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter coffee name"
              name="name"
              className="input input-bordered input-success w-full "
            />
          </div>
          <div className="w-full">
            <p>Available Quantity</p>
            <input
              type="text"
              placeholder="Avaiable Quantity"
              name="quantity"
              className="input input-bordered input-success w-full "
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 ">
          <div className="w-full">
            <p>Supplier</p>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              name="supplier"
              className="input input-bordered input-success w-full "
            />
          </div>
          <div className="w-full">
            <p>Taste</p>
            <input
              type="text"
              placeholder="Enter coffee taste"
              name="taste"
              className="input input-bordered input-success w-full "
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 ">
          <div className="w-full">
            <p>Category</p>
            <input
              type="text"
              placeholder="Enter coffee category"
              name="category"
              className="input input-bordered input-success w-full "
            />
          </div>
          <div className="w-full">
            <p>Details</p>
            <input
              type="text"
              placeholder="Enter coffee details"
              name="details"
              className="input input-bordered input-success w-full "
            />
          </div>
        </div>
        <div className="w-full">
          <p>Photo</p>
          <input
            type="text"
            placeholder="Enter photo URL"
            name="photo"
            className="input input-bordered input-success w-full "
          />
        </div>
        <button className="btn w-full">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
