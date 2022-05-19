import React from 'react'

function CourseItem({ image, assignments, grade }) {
  return (
    <div className="courseItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {assignments} </h1>
            <p> {grade} </p>
         </div>
    )
}

export default CourseItem