import Link from 'next/link'
import React from 'react'

const formateDescription = (description) => {
    return description.length > 100
        ? description.slice(0, 100) + "..."
        : description;
}

function FoodCard({ item }) {
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{item.strMeal}</h2>
                    <p>{formateDescription(item.strInstructions || "")}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/foods/${item.idMeal}`} className="btn btn-primary">Show more...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard