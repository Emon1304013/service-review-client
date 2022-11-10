import { Button, Spinner, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";
import ReviewDataTable from "./ReviewDataTable";

const UserReviews = () => {
  const { user,setLoading,loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useTitle('My Reviews')

  useEffect(() => {
    fetch(`https://roza-fusion-server.vercel.app/user-reviews/${user?.email}`,{
      headers:{
        authorization : `Bearer ${localStorage.getItem('auth-token')}`
      }
    })

      .then((res) => res.json())
      .then((data) => {
        // if()
        setLoading(false)
        setReviews(data.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, refresh]);

  return <>
  {reviews?.length>0 ? 
  <>

  <Table className="my-10 w-full lg:w-11/12 mx-auto overflow-auto">
  {
                (loading) && 
                      <Button className="w-2/12 mx-auto my-10">
                        <Spinner aria-label="Spinner button example" />
                        <span className="pl-3">Loading...</span>
                      </Button>
                  
            }
      <Table.Head>
        <Table.HeadCell>Service Name</Table.HeadCell>
        <Table.HeadCell className="text-center">Reviews</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
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
    <p className="text-center font-bold text-2xl my-44">
      No Reviews Available. <Link className="underline" to='/services'>Please Review</Link>
    </p>}
  
  </>;
};

export default UserReviews;
