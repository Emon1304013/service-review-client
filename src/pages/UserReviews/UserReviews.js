import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import ReviewDataTable from "./ReviewDataTable";

const UserReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/user-reviews/${user?.email}`,{
      headers:{
        authorization : `Bearer ${localStorage.getItem('auth-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // if()
        setReviews(data.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, refresh]);

  return <>
  {reviews?.length>0 ? 
  <>
  <Table className="my-10 w-11/12 mx-auto">
      <Table.Head>
        <Table.HeadCell>Service Name</Table.HeadCell>
        <Table.HeadCell className="text-center">Reviews</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {reviews?.map((review) => <ReviewDataTable
        key={review._id}
        review = {review}
        refresh = {refresh}
        setRefresh = {setRefresh}
        >


        </ReviewDataTable>)}
      </Table.Body>
    </Table>
    </> : 
    <p className="text-center font-bold text-2xl my-10">
      No Reviews Available. <Link className="underline" to='/'>Please Review</Link>
    </p>}
  
  </>;
};

export default UserReviews;
