import React, {useState} from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        class: "",
        role: ""
    });

    const changeHandler = e => {
        console.log(e.target.value);
        console.log("member: ", member);
        setMember({...member, [e.target.name]: e.target.value})
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(member);
        setMember({
            name:"", 
            email: "", 
            class: "", 
            role: ""
        });
    };

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor ="name">Name</label>
            <input 
            type = "text"
            name = "name"
            value = {member.name}
            onChange = {changeHandler}
            />

            <label htmlFor = "email">Email</label>
            <input 
            type = "text"
            name = "email"
            value = {member.email}
            onChange = {changeHandler}
            />

            <label htmlFor = "class">Class</label>
            <input 
            type = "text"
            name = "class"
            value = {member.class}
            onChange = {changeHandler}
            />
            
            <label htmlFor = "role">Role</label>
            <input 
            type = "text"
            name = "role"
            value = {member.role}
            onChange = {changeHandler}
            />
            
            <button type = "submit">Add New Member</button>
        </form>
    )
}

export default Form;