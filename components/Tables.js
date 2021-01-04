import React, { Component } from 'react'

export default class Tables extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     renderTableData() {
        return this.state.data.map((item, index) => {
           const { id, name, age, email } = item //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

    render() {
        return (
            <div>
                <div className="wrap-table">
                    <table id="students">
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <p className="entry">Menampilkan 1 - 5 dari 8 entri</p>
                </div>
            </div>
        )
    }
}
