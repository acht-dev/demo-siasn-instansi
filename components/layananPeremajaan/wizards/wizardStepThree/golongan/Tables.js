import React, { Component } from "react";

export default class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.data[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }

  renderTableData() {
    return this.state.data.map((item, index) => {
      const {
        id,
        sk_nomor,
        sk_tanggal,
        nomor_letter_bkn,
      } = item; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{sk_nomor}</td>
          <td>{sk_tanggal}</td>
          <td>{nomor_letter_bkn}</td>
          <td>
            <a>Edit </a>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='wrap-table'>
          <table id='students'>
            <tbody>
              <tr>
                <th>id</th>
                <th>No. SK</th>
                <th>Tanggal SK</th>
                <th>No. Letter BKN</th>
                <th>Action</th>
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>
          {/* <p className='entry'>Menampilkan 1 - 5 dari 8 entri</p> */}
        </div>
      </div>
    );
  }
}
