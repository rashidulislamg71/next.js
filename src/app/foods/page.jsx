import FoodCard from '@/components/FoodCard';
import React from 'react'

async function FoodsPage() {

    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
    const promise = await res.json();
    const data = promise.meals
console.log(data)
  return (
    <div>
        <div>
            {
                data.map(item => <FoodCard key={item.idMeal} item={item} /> )
            }
        </div>
    </div>
  )
}

export default FoodsPage