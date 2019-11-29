import React from 'react';
import  './User.css';

export class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'User Management',
            act : 0,
            index :'',
            details : [],
        }
    }

    componentDidMount() {
        //this.refs.name.focus();
    }

    handleUser = (e) =>{
        e.preventDefault();
        console.log("rakhitha");

        let details = this.state.details;
        let firstName =  this.refs.firstName.value;
        let lastName =  this.refs.lastName.value;
        let address =  this.refs.address.value;

        if(this.state.act === 0){
            let values = {
                firstName,
                lastName,
                address
            };
            details.push(values);
        }else{
            let index = this.state.index;
            details[index].firstName = firstName;
            details[index].lastName =  lastName;
            details[index].address = address;
        }

        console.log(details,"rakshitha");

        this.setState({
            details : details,
            act : 0
        });
        this.refs.userForm.reset();

    };

    handleRemove = (i) =>{
       let details = this.state.details;
       details.splice(i,1);
       this.setState({
           details : details
       });
        this.refs.userForm.reset();
    };

    handleEdit = (i) =>{
       let values = this.state.details[i];
       this.refs.firstName.value = values.firstName;
       this.refs.lastName.value = values.lastName;
       this.refs.address.value = values.address;
       this.setState({
           act : 1,
           index : i
       });
    };

    render(){
        let details = this.state.details;
        return(
            <div className= "App">
            <h2>{this.state.title}</h2>
             <form className="user-form" ref="userForm">
                 <input type="text" ref="firstName" placeholder="Enter first name" maxLength={15}/>
                 <input type="text" ref="lastName" placeholder="Enter last name" maxLength={8}/>
                 <input type="text" ref="address" placeholder="Enter address" maxLength={20}/>
                 <button type="submit" onClick = {(e) =>this.handleUser(e)}>Submit</button>
             </form>
                <pre>
                    {details.map((value, i) =>
                        <ol key={i} className= "user-details">
                            {i+1}. {value.firstName}  {value.lastName}  {value.address}
                            <button className= "user-details" type="button" onClick = {(e) =>this.handleRemove(i)}>Remove User</button>
                            <button className= "user-details" type="button" onClick = {(e) =>this.handleEdit(i)}>Edit User</button>
                        </ol>
                    )}
                </pre>
            </div>
        );
    }
}