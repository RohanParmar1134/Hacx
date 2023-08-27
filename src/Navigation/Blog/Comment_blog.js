import React, { useState } from 'react'

export default function All_Blog() {
    const [data, setData] = useState()
    const get_data = () => {
        //get_data from db
        //setData('all the data form db fields : title, Description, Comment:"user , comment"')
    }
    // const comments = data.map((e) => {
    //     <p>
    //     <p>{e.comment.user}</p>
    //     <p>{e.comment.comment}</p>
    //     </p>
    // })
    // const listItems = data.map((v) => {
    //     <li>
    //         <h6>{v.Title}</h6>
    //         <p>{v.Description}</p>
    //         <p>{comments}</p>
    //     </li>

    // })
    return (
        <div>
            {/* {listItems} */}
        </div>
    )
}
