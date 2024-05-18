import { useState } from 'react';
import './App.css';

function Attendex() {
  const [presentCount, setPresentCount] = useState('');
  const [absentCount, setAbsentCount] = useState('');
  const [result, setResult] = useState('');
  const [left, setLeft] = useState('');
  const [medical, setMedical] = useState('');



  const handleSubmit = event => {
    setMedical('');
    event.preventDefault();
    setResult(Number((Math.round(((Number(presentCount) / (Number(presentCount) + Number(absentCount))) * 100) * 100) / 100).toFixed(2)));
    let x = (Number((Math.round(((Number(presentCount) / (Number(presentCount) + Number(absentCount))) * 100) * 100) / 100).toFixed(2)));
    console.log(x);
    if (x < 75 && x != null) {
      let toAttend = Number(absentCount) * 3;
      let nleft = toAttend - Number(presentCount);
      setLeft(nleft + ` more periods to be attended for 75%`);
      console.log("hi");
    }
    else if (x >= 75) {
      setLeft('');
    }

    if (Number(presentCount) === 0 || Number(absentCount) === 0) {
      setResult("Enter both the Values!");
      setLeft("");
    }
  };




  const handleClear = event => {
    setPresentCount('');
    setAbsentCount('');
    setLeft('');
    setResult('');
    setMedical('');
    document.getElementById('presentCount').value = '';
    document.getElementById('absentCount').value = '';
  }



  const handleMedical = event => {

    let a = Number(presentCount);
    let b = Number(absentCount);
    let x = (Number((Math.round(((a / (a + b)) * 100) * 100) / 100).toFixed(2)));
    setResult(x);
    let i = 0;
    while (x < 75) {
      a++;
      b--;
      x = (a / (a + b) * 100);
      i++;
    }
    setMedical(i + " more medical hours to be added");





  }







  return (
    <div className="mainDiv mainDivAttendex ">


      <div class="attendex-sub-div-spcl-left attendex-sub-div-spcl">
        <img alt="sgpa" src="../student.png" />
      </div>

      <div className="attendex-sub-div">
        <div className={'attenDiv'}>
          <h1>Attendex%</h1>
        </div>
        <div className="attenDiv">
          <form className="form">
            <input
              class="input"
              id="presentCount"
              name="presentCount"
              placeholder='presentCount'
              type="text"
              onChange={event => setPresentCount(event.target.value)}
              autoComplete='off'
            />
            <br />
            <input
              class="input"
              id="absentCount"
              name="absentCount"
              placeholder='absentCount'
              type="text"
              onChange={event => setAbsentCount(event.target.value)}
              autoComplete='off'
            />
            <br /><br /><br />
          </form>
        </div>
        <div className="attenDiv">
          <button className="Btn" onClick={handleSubmit} type="submit">Submit</button>
          <button className="Btn" onClick={handleClear} type="submit">Clear</button>
          <button className="Btn" onClick={() => {
            handleMedical();
          }} type="submit">Medical</button>
        </div>
        <div className="attenDiv">
          <h2>{result + "%"}</h2>
        </div>
        <div className="attenDiv">
          <h2>{left}</h2>
        </div>
        <div className="attenDiv">
          <h2>{medical}</h2>
        </div>
      </div>

      <div class="attendex-sub-div-spcl">
        <p>Calculate the minimum number of classes you need to attend to attain 75% attendance in that subject.</p>
      </div>



    </div>



  )
}


export default Attendex;