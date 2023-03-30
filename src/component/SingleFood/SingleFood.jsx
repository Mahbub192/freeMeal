import React from "react";

const SingleFood = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb, idCategory } =
    props.singleData;
  const handelFoodCollection = props.handelFoodCollection;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <p>
            {strCategoryDescription.length >= 50
              ? strCategoryDescription.slice(0, 50) + "..."
              : strCategoryDescription}
          </p>
          <p className="text-xl font-bold text-center">Price: {props.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() =>
                handelFoodCollection(idCategory, strCategory, props.price)
              }
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
