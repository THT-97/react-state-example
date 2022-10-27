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
            );
        }
    }
}

export default Contact;