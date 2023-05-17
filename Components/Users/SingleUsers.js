import userEvent from "@testing-library/user-event";
import React from "react"

const SingleUsers = ({user}) => {

    return(
        <>
        <div className="single-user">
            <img src={user.picture.large} alt={user.name}></img>
            <div className="user-info">
                <h3>{user.name.first} {user.name.last}</h3>
                <p className="user-email">E-mail: {user.email}</p>
                <p className="user-location">{user.location.country} | {user.location.city}</p>
            </div>
        </div>
        </>
    )
}

export default SingleUsers;