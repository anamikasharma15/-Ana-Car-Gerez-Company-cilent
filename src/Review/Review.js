import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../hooks/useFirebase";

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://calm-sands-82191.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center">Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2 w-100 input-field"
          name="name"
          value={user?.name}
          placeholder="Your name"
        type="text"
          {...register("name", { required: true })}
        />
        <br/>
        <input className='form-control mb-2 '
            {...register('img')}
            type='text'
             placeholder='image Url' />

            <br/>
        <input
          className="p-2 m-2 w-100 input-field"
          name="email"
          value={user?.email}
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="p-2 m-2 w-100 input-field"
          name="address"
          value={user?.address}
          placeholder="address"
          type="text"
          {...register("address", { required: true })}
        />
        <br/>
        <input
          className="p-2 m-2 w-100 input-field"
          name="description"
          placeholder="description"
          {...register("description", { required: true })}
        />
        <br />

        <input
          className="text-center  submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Review;
