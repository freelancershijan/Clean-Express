import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-phi.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold text-center mb-5'>I have Total {myreviews.length} Reviews</h1>
            {
                myreviews.map(myReview => <div key={myReview._id} className="card w-1/2 flex items-center justify-between mx-auto my-5 p-5 card-side bg-base-100 shadow-xl">
                    <figure><img className='rounded-full' src={myReview.photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{myReview.name}</h2>
                        <h2 className="text-xl font-semibold mb-10">{myReview.email}</h2>
                        <p>My Review: {myReview.comment}</p>
                    </div>
                    <div className="card-actions grid grid-cols-1">
                        <button className="btn btn-primary">Update Review</button>
                        <button className="btn btn-danger">Delete Review</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;