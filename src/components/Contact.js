import axios from "axios";
import { Component } from "react";
import './Contact.css'
class Contact extends Component{
    constructor(){
        super();
        this.state = {data: []};
    }

    async componentDidMount(){
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>this.setState({data: response.data}))
            .catch(error=>this.setState({data: error.data}) )
        console.log(this.state.data);
    }

    formSubmit = (f)=>{
        f.preventDefault();
        console.log(f.target.name.value);
        console.log(f.target.email.value);
        axios.post("https://jsonplaceholder.typicode.com/users",
        {
            name: f.target.name.value,
            email: f.target.email.value
        })
        .then(response => {
            alert("Success!");
            console.log(response);
        })
        .catch(error => {
            alert("Failed!");
            console.log(error);
        })
    }

    render(){
        if(this.state.data!=null){
            //add data objects to a table variable
            var table = [];
            this.state.data.forEach(element => {
                table.push(
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                    </tr>
                )
            });
            return(
                <div>
                    <form onSubmit={this.formSubmit}>
                        <label for="name">Name:</label>
                        <input type="text" name="name" placeholder="Name here..."/>
                        <label for="name">Email:</label>
                        <input type="email" name="email" placeholder="Email here..."/>
                        <button type="submit">Create User</button>
                    </form>
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>  
                            </tr>

                        </thead>
                        <tbody>
                            {/* render table var inside tbody */}
                            {table}
                        </tbody>
                    </table>
                </div>    
            );
        }
    }
}

export default Contact;