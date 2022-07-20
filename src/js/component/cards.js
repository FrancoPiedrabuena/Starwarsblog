import React from 'react';
import { Link } from "react-router-dom";



export const MyCard = (props) => {
  return (
    <div className=''>

      <div className="actores">

        <div className="my-3 mx-3" >
          <img
            className="card-img-top"
            src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
            alt="" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <div className='btn'>
              <Link className="btn btn-outline-primary">
                {"Learn more!"}
              </Link>
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={(e) => {
                  actions.AddFavorite(resource, item.uid);
                }}>
                <i className="far fa-heart"></i>
              </button>
            </div>


          </div>
        </div>
      </div>



    </div>

  );
}
