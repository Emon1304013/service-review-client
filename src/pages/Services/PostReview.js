import { Button, Label, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const PostReview = () => {
  const { user } = useContext(AuthContext);
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerReview = form.customerReview.value;

        console.log(user.email,customerReview);
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
