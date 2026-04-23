import Link from 'next/link'
import React from 'react'

function FoodCard({item}) {
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{item.strMeal}</h2>
                    <p>{item.strInstructions}</p>
                    <div className="card-actions justify-end">
                        {/* <Link href={`/users/${user.id}`} className="btn btn-primary">Buy Now</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard