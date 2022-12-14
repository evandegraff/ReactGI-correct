import './App.css';
// import Easy from './components/easy';
import BasicInfo from './components/BasicInfo';
// import Hard from './components/hard';
// this.state = [
//   person = "John Doe",
//   number = "000-000-000",
//   dob = "09-12-22"
// ]
      

function App() {
  return (

    <div className="App">
      <h3> Basic Info</h3>
<p> ------------------- </p>
        {/* 
        
        VERY EASY 
        -----------
         <p>
    Name: John Doe
      <br></br>
      <br></br>
    Number: 999-999-9999
      <br></br>
      <br></br>
    DOB: 01-11-01
        </p> */}


{/* <Easy Person = "John Doe"  Number = "999-999-9999" DOB = "01-11-01"></Easy> */}


    <BasicInfo person = "John Doe"  number = "999-999-9999" dob = "01-11-01"/>

    <BasicInfo person = "Jane Doe"  number = "000-999-9999" dob = "21-12-01"/>

    <BasicInfo person = "Jimmy Dame"  number = "312-129-5215" dob = "12-04-01"/>


    <BasicInfo person = "Carter Dae"  number = "524-745-2451" dob = "20-10-01"/>

    <BasicInfo person = "Lous Tree"  number = "543-453-7543" dob = "30-07-01"/>

    {/* <Hard></Hard> */}
    </div>
  );
}

export default App;

