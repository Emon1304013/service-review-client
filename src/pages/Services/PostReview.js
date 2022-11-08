import { Button, Label, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const PostReview = ({serviceId,setRefresh,refresh}) => {
  const { user } = useContext(AuthContext);


    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerReview = form.customerReview.value;

        const review = {
            serviceId,
            reviewerName : user?.displayName || user?.email,
            reviewerPhoto : user?.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
            customerReview,
        }

        fetch('http://localhost:5000/add-review',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success(data.message)
            setRefresh(!refresh)
            form.reset();
        })
        .catch(err => {
            console.log(err);
        })

    }

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleAddReview} >
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          name="customerReview"
          placeholder="Please Leave us a Review..."
          required={true}
          rows={4}
        />
      <Button type="submit" className="mx-auto mt-8">Add Review</Button>
      </form>
    </div>
  );
};

export default PostReview;
