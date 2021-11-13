import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";

const ProductDetails = () => {
  const [service, setService] = useState({});
  const { user } = useFirebase();
  const { serviceId } = useParams();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/ConfirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
//   console.log();

  return (
    <div>
        <h1>Products Details</h1>
        <h2 className="text-center">This is booking From</h2>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-50" src={service.image} alt="" />
            <p>{service?.description}</p>
            <h1>Name:{service?.name}</h1>
            <h1>Price: {service?.price}</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("description")}
                defaultValue={service?.description}
                placeholder="Description"
                className="p-2 m-2 w-100 input-field"
              />

              {/* <input
                {...register("image", { required: true })}
                placeholder="img Url"
                defaultValue={service?.image}
                className="p-2 m-2 w-100 input-field"
              /> */}
              <input className='form-control mb-2 '
                 {...register('img')}
                  type='text'
                  defaultValue={service?.image}
                   placeholder='image Url' />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={service?.price}
                type="number"
                className="p-2 m-2 w-100 input-field"
              />

              <select {...register("model")} className="p-2 m-2 w-100">
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
