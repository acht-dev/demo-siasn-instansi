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
        golongan,
        Nomor_SK,
        Tanggal_SK,
        TMTGolongan,
        NomorBKN,
        TanggalBKN,
        JenisKP,
        AsalNama,
      } = item; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{golongan}</td>
          <td>{Nomor_SK}</td>
          <td>{Tanggal_SK}</td>
          <td>{TMTGolongan}</td>
          <td>{NomorBKN}</td>
          <td>{TanggalBKN}</td>
          <td>{JenisKP}</td>
          <td>{AsalNama}</td>
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
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
          <p className='entry'>Menampilkan 1 - 5 dari 8 entri</p>
        </div>
      </div>
    );
  }
}
