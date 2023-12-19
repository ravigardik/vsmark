import React from "react";

const Smallcard = () => {
  return (
    <>
      <div class="container-fluid best1">
        <div class="col-lg-6 best container-fluid">
          <div class="container-fluid">
            <div class="row">
              {cards.map((data) => (
                <div class="col-md-6 smallcard">
                  <img src={data.img} class="cardsm" alt="..." />
                  <div class="rating">
                    <h5 class="card-title text-black text-bold">{data.subt}</h5>

                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <h5> Rs. {data.pri} </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smallcard;
