import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Bookings = () => {
    
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [findService, setFindService] = useState();
    const { currentUser } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
      fetch("https://evil-fangs-79869.herokuapp.com/users/_id")
        .then((res) => res.json())
        .then((data) => setServiceDetails(data));
    }, []);

    useEffect(() => {
      if (serviceDetails.length > 0) {
        const matchDetails = serviceDetails.find((service) => service._id == id);
        console.log(matchDetails);
      }
    }, [serviceDetails]);

    
  const onSubmit = (data) => console.log(data);

  console.log(id);
  return (
    <div>
      <Container className="my-4 pb-4">
        <Row className="d-flex align-items-center">
          <div className="col-md-5">
            <div className="mt-3">
              <img src={findService?.img} className="w-100 img" alt="" />
              <h2 className="py-3">{findService?.name}</h2>
              <p>{findService?.body}</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="bg-dark my-2 p-4 w-75 rounded mx-auto">
              <h2 className="text-light">Book Now</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      {...register("name")}
                      value={currentUser?.displayName}
                      placeholder="Name"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      {...register("email")}
                      value={currentUser?.email}
                      placeholder="Email"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      {...register("phone")}
                      placeholder="Phone"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      {...register("package")}
                      value={findService?.title}
                      placeholder="Package"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      {...register("address")}
                      placeholder="Address"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      {...register("type")}
                      value={findService?.type}
                      placeholder="Type"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="date"
                      {...register("date")}
                      placeholder="Date"
                      className="p-2 m-2 w-100 rounded border-1"
                    />
                  </div>
                </div>

                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  type="submit"
                  value="Book Now"
                  className="btn btn-warning w-25"
                />
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;