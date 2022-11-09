import { Table } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';

const ReviewDataTable = ({review,refresh,setRefresh}) => {

    const {_id,serviceName,customerReview} = review;

    const handleDelete = id => {
        const confirm = window.confirm("Are you sure that you want to delete")
        if(confirm){
            fetch(`http://localhost:5000/user-reviews/${id}`,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresh(!false)
                toast.success(`${data.message}`)
            })
        }
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[100px]">
                {serviceName}
              </Table.Cell>
              <Table.Cell className="text-center text-gray-900 font-semibold">
                {customerReview}
              </Table.Cell>
              <Table.Cell className="w-[100px] flex">
                <button className="font-medium bg-blue-600 hover:bg-green-400 text-white px-3 py-1 text-2xl rounded-lg">
                  Edit
                </button>

                <button onClick={()=>{handleDelete(_id)}} className="font-medium bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-lg text-2xl ml-4">
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
    );
};

export default ReviewDataTable;