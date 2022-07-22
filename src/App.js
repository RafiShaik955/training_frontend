// import './App.css';
import ListsDetails from './component/Lists';

function App() {
  let list = [{
    patientname: "john",
    age: "35",
    timeslot : "10:00 - 11:00",
    contactnumber : "9845451212",
    paymentstatus : "pending",
    appointmentstatus : "pending"
  },
  {
    patientname : "Smitha",
    age: "28",
    timeslot : "11:00 - 12:00",
    contactnumber : "89655154126",
    paymentstatus: "pending",
    appointmentstatus : "pending"
  },
  {
    patientname : "James",
    age: "30",
    timeslot : "12:00 - 13:00",
    contactnumber : "76451291123",
    paymentstatus: "accept",
    appointmentstatus : "accept"
  },
  {
    patientname : "Alex",
    age: "45",
    timeslot : "14:30 - 15:00",
    contactnumber : "95123220303",
    paymentstatus: "pending",
    appointmentstatus : "pending"
  }
]

  return (
    <div className="App">
      <ListsDetails listValues = {list} />
    </div>
  );
}

export default App;
