// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext,useParams } from "react-router-dom";

// Functional Component
const Department = () => {
    const { departmentState: [department, setDepartment] } = useOutletContext();

    const breakfastDepartment = department.filter(department => department.departmentName === 'Breakfast');
    const entreesDepartment = department.filter(department => department.departmentName === 'Entrees');
    const dessertsDepartment = department.filter(department => department.departmentName === 'Desserts');
    const sidesDepartment = department.filter(department => department.departmentName === 'Sides');


    return(
        <div>
            <p id="title-text">Recipes & Cooking Ideas</p>

            <div class="department-box">
                <div id="department-box-breakfast">
                    {
                        breakfastDepartment.map((department, idx) => {
                            return <div key={idx}>
                                <img src="https://images.squarespace-cdn.com/content/v1/5d38ca4174e198000123709a/1605034683424-L3T9E7Q22FOIAYA6B19F/image-asset.jpeg?format=1500w" id="breakfast-main-image"></img>
                                <p id="department-box-text">{department.departmentName}</p>
                            </div>
                        })
                    }
                </div>
                <div id="department-box-entrees"></div>
                <div id="department-box-desserts"></div>
                <div id="department-box-sides"></div>
            </div>
        </div>
    )
};

// Export
export default Department;

    // return(
    //     <div>
    //         <p id="title-text">Recipes & Cooking Ideas</p>

    //         <div class="department-box">
    //             {
    //                 department.map((department, idx) => {
    //                     return <div key={idx}>
    //                             <img src="https://images.squarespace-cdn.com/content/v1/5d38ca4174e198000123709a/1605034683424-L3T9E7Q22FOIAYA6B19F/image-asset.jpeg?format=1500w" id="breakfast-main-image"></img>
    //                             <p id="department-box-text">Name of Department: {department.departmentName}</p>
    //                         </div>
    //                 })
    //             }                
    //         </div>
    //     </div>
    // )
    