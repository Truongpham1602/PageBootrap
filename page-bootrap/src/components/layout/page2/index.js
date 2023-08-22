import React from 'react'
import anh1 from "../page2/images/images (1).jpg";
import "../page2/style.css";
export default function page2() {
    return (
        <>
            <div id='page2' class="container mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <img src={anh1} class="card-img-top" alt="iPad 9 WiFi 64GB"></img>
                            <div class="card-body">
                                <h6>iPad 9 WiFi 64GB</h6>
                                6.990.000₫ <del>8.300.000₫</del> -16%
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="https://via.placeholder.com/150" class="card-img-top" alt="iPad 10 WiFi 64GB"></img>
                            <div class="card-body">
                                <h6 >iPad 10 WiFi 64GB</h6>
                                11.090.000₫ <del>11.390.000₫</del> -2%
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="https://via.placeholder.com/150" class="card-img-top" alt="iPad Pro M2 inch WiFi 128GB"></img>
                            <div class="card-body">
                                <h6 >iPad Pro M2 inch WiFi 128GB</h6>
                                20.290.000₫ <del>20.700.000₫</del> -2%
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img src="https://via.placeholder.com/150" class="card-img-top" alt="iPad Ảir 5 WiFi 64GB"></img>
                            <div class="card-body">
                                <h6>iPad Air 5 WiFi 64GB</h6>
                                14.090.000₫ <del>15.590.000₫</del> -9%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
