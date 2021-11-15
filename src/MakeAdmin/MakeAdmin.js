import React,{useState,Alert} from "react";
// import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [success, setSuccess] = useState(false);


  const onSubmit = (data) => {
    fetch("https://calm-sands-82191.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>
      //{
      //   if (data.modifiedCount) {
      //     console.log(data);
      //     setSuccess(true);
      // }
      // }
      
       console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center">Make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field mb-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Make as Admin"
        />

      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}

    </div>
  );
};

export default MakeAdmin;
