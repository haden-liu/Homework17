import React from 'react';

function Table(props) {
    let filterdData = props.data.filter(employee => employee.first_name.toLowerCase().indexOf( props.search.toLowerCase() ) === 1)


    if (props.search === "") {
        filterdData = props.data;
    } 

    return (
        <table class="table">
            <thead>
                <tr>
                <th scope="col" onClick={props.handleIdSorting}># &#9650;</th>
                <th scope="col">First</th>
                <th scope="col" onClick={props.handleLastnameSorting}>Last &#9650;</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {filterdData.map(employee => {
                    return (
                        <tr>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default Table;