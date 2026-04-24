import React from 'react'

async function FoodDetails({params}) {
const {foodId}= await params;
console.log(foodId)

    console.log()
  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails