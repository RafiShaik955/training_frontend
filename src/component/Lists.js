import "../styles/liststyles.css"

function ListsDetails(props){
    let listvalues = [...props.listValues];

    return (
        <div className="tablelist">
            <h2 >import Navbar component</h2>
            <table>
                <thead>
                    <tr>
                        <th >Patient Name</th>
                        <th>Age</th>
                        <th>Time Slot</th>
                        <th>Contact Number</th>
                        <th>Payment Status</th>
                        <th>Appointment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listvalues.map((value,index)=>
                        (
                            <tr key={index}>
                                <td >{value.patientname}</td>
                                <td >{value.age}</td>
                                <td >{value.timeslot}</td>
                                <td >{value.contactnumber}</td>
                                <td >
                                    <div className={(value.paymentstatus) === "pending" ? "paymentstatusRed": "paymentstatusGreen"}>{value.paymentstatus}
                                </div></td>
                                <td >
                                    <div className={(value.appointmentstatus) === "pending" ? "paymentstatusRed": "paymentstatusGreen"}>{value.appointmentstatus}
                                </div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListsDetails;