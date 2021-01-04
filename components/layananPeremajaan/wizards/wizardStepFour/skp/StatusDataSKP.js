import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function StatusDataSKP(){
    return(
        <div className="card cardCustom">
         <h3 className="mt-3 ml-3">View Status Validasi</h3>
         <div className="mb-3"></div>
        <Table striped>
        <thead>
            <tr>
            <th>No</th>
            <th>Nama Kondisi</th>
            <th>Status</th>
            <th>Catatan</th>
            </tr>
        </thead>
        <tbody>

            <tr>
            <td>1</td>
            <td>Input Data</td>
            <td>
                <div>
                    <Form>
                    <Form.Check
                        type="checkbox"
                        className="my-1 mr-sm-2"
                        id="customControlInline"
                        custom
                    />
                    </Form>
                </div>
            </td>
            <td>OK</td>
            </tr>

            <tr>
            <td>2</td>
            <td>Upload Dokumen</td>
            <td>
                <div>
                    <Form>
                    <Form.Check
                        type="checkbox"
                        className="my-1 mr-sm-2"
                        id="customControlInline2"
                        custom
                    />
                    </Form>
                </div>
            </td>
            <td>OK</td>
            </tr>


    
        </tbody>
    </Table>
    </div>
    )
   
}