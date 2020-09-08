import React from "react";

const TeamList = props => {
    console.log("App team props", props);
    return(
        <div className = "team-list">
            {props.team.map((member) =>(
                <div className = "member" key = {member.id}>
                    <h1>{member.name}</h1>
                    <p>Email:{member.email}</p>
                    <p>Class:{member.class}</p>
                    <p>Role:{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamList;