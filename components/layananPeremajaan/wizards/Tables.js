import React, { Component } from 'react'

export default class Tables extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            dataButton: ['action'],
            btnId: []
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        // header.push(this.state.dataButton[0])
        // console.log(header)
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     renderTableData() {
         let field = Object.keys(this.state.data[0])
         
        //  let fields =Object.keys(this.state.data[0])
        //  fields.push(this.state.dataButton[0])
        return this.state.data.map((data, index)=>{
            return(
            <tr>
                {
                    field.map((item, index)=>{
                        let id = item === 'id' ? data[item] : ''
                        // console.log(id)  
                        
                        return(
                            <td>{data[item]}</td>
                        )
                    })

                }
                {/* {
                    fields.map((item, index)=>{
                        
                        let btn = item === this.state.dataButton[0] ? true : false
                        let id = item === 'id' ? this.state.btnId.push(data[item]) : null
                        

                        return btn ? (
                           <td>{id}</td>
                        ):null
                    })
                } */}
            </tr>)
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
