import React, { useState } from "react";



function Cgpa() {

    const [value, setSelect] = useState('');
    const [cgpaS1, setCgpaS1] = useState('');
    const [cgpaS2, setCgpaS2] = useState('');
    const [cgpaS3, setCgpaS3] = useState('');
    const [cgpaS4, setCgpaS4] = useState('');
    const [cgpaS5, setCgpaS5] = useState('');
    const [cgpaS6, setCgpaS6] = useState('');
    const [cgpaS7, setCgpaS7] = useState('');
    const [cgpaS8, setCgpaS8] = useState('');
    const [result, setResult] = useState('');
    let n = 8;

    const reset = event => {
        event.preventDefault();
        setCgpaS1(0);
        setCgpaS2(0);
        setCgpaS3(0);
        setCgpaS4(0);
        setCgpaS5(0);
        setCgpaS6(0);
        setCgpaS7(0);
        setCgpaS8(0);
        setResult('');
        setSelect(' ');
        document.getElementById('s1').value = ""; document.getElementById('s2').value = "";
        document.getElementById('s3').value = ""; document.getElementById('s4').value = "";
        document.getElementById('s5').value = ""; document.getElementById('s6').value = "";
        document.getElementById('s7').value = ""; document.getElementById('s8').value = "";
    }



    switch (value) {
        case ' ': {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.remove("hidden");
            document.getElementById('s6').classList.remove("hidden");
            document.getElementById('s7').classList.remove("hidden");
            document.getElementById('s8').classList.remove("hidden");
            break;
        }
        case "1": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.add("hidden");
            document.getElementById('s3').classList.add("hidden");
            document.getElementById('s4').classList.add("hidden");
            document.getElementById('s5').classList.add("hidden");
            document.getElementById('s6').classList.add("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "2": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.add("hidden");
            document.getElementById('s4').classList.add("hidden");
            document.getElementById('s5').classList.add("hidden");
            document.getElementById('s6').classList.add("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "3": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.add("hidden");
            document.getElementById('s5').classList.add("hidden");
            document.getElementById('s6').classList.add("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "4": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.add("hidden");
            document.getElementById('s6').classList.add("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "5": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.remove("hidden");
            document.getElementById('s6').classList.add("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "6": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.remove("hidden");
            document.getElementById('s6').classList.remove("hidden");
            document.getElementById('s7').classList.add("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "7": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.remove("hidden");
            document.getElementById('s6').classList.remove("hidden");
            document.getElementById('s7').classList.remove("hidden");
            document.getElementById('s8').classList.add("hidden");
            break;
        }
        case "8": {
            document.getElementById('s1').classList.remove("hidden");
            document.getElementById('s2').classList.remove("hidden");
            document.getElementById('s3').classList.remove("hidden");
            document.getElementById('s4').classList.remove("hidden");
            document.getElementById('s5').classList.remove("hidden");
            document.getElementById('s6').classList.remove("hidden");
            document.getElementById('s7').classList.remove("hidden");
            document.getElementById('s8').classList.remove("hidden");
            break;
        }
        default: {
            console.log("reenter");
            break;
        }
    }





    const handleSubmit = event => {
        event.preventDefault();





        setResult((cgpaS1 + cgpaS2 + cgpaS3 + cgpaS4 + cgpaS5 + cgpaS6 + cgpaS7 + cgpaS8) / value);

        {/*






        notes====>>>
        so far made a select button which hides and unhides stuff, now fix the crap about the 0 and "" situation in the morning cya







        if(cgpaS1 =="" && typeof cgpaS1==='string') {
            console.log("ho");
            x++;
        }
        if(cgpaS2==""&&typeof cgpaS1==='string'){
            x++;
        }
        if(cgpaS3==""&&typeof cgpaS1==='string') {
            x++;
        }
        if(cgpaS4==""&&typeof cgpaS1==='string'){
            x++;
        }
        if(cgpaS5==""&&typeof cgpaS1==='string') {
            x++;
        }
        if(cgpaS6==""&&typeof cgpaS1==='string'){
            x++;
        }
        if(cgpaS7==""&&typeof cgpaS1==='string') {
            x++;
        }
        if(cgpaS8==""&&typeof cgpaS1==='string'){
            x++;
        }
    setResult((cgpaS1 + cgpaS2 + cgpaS3 + cgpaS4 + cgpaS5 + cgpaS6 + cgpaS7 + cgpaS8) / (n-x));*/}

    }
    return (
        <div className="mainDiv mainDivCgpa">

            <div class="attendex-sub-div-spcl-left attendex-sub-div-spcl cgpa-img">
                <img src="../cgpa.png" />
            </div>

            <form className="form">
                <select className="sgpaSelector" value={value} onChange={e => setSelect(e.target.value)}>
                    <option value=""></option>
                    <option value="1">S1</option>
                    <option value="2">S2</option>
                    <option value="3">S3</option>
                    <option value="4">S4</option>
                    <option value="5">S5</option>
                    <option value="6">S6</option>
                    <option value="7">S7</option>
                    <option value="8">S8</option>
                </select>
                <input
                    class="input"
                    id="s1"
                    placeholder='S1'
                    type="number"
                    onChange={event => setCgpaS1(Number(event.target.value))}
                />
                <input
                    class="input"
                    id="s2"
                    placeholder='S2'
                    type="number"
                    onChange={event => setCgpaS2(Number(event.target.value))}
                />
                <input
                    class="input"
                    id="s3"
                    placeholder='S3'
                    type="number"
                    onChange={event => setCgpaS3(Number(event.target.value))}
                />
                <input
                    class="input"
                    id="s4"
                    placeholder='S4'
                    type="number"
                    onChange={event => setCgpaS4(Number(event.target.value))}
                />
                <input
                    class="input hidden"
                    id="s5"
                    placeholder='S5'
                    type="number"
                    onChange={event => setCgpaS5(Number(event.target.value))}
                />
                <input
                    class="input hidden"
                    id="s6"
                    placeholder='S6'
                    type="number"
                    onChange={event => setCgpaS6(Number(event.target.value))}
                />
                <input
                    class="input hidden"
                    id="s7"
                    placeholder='S7'
                    type="number"
                    onChange={event => setCgpaS7(Number(event.target.value))}
                />
                <input
                    class="input hidden"
                    id="s8"
                    placeholder='S8'
                    type="number"
                    onChange={event => setCgpaS8(Number(event.target.value))}
                />
                <br />
                <div className="attenDiv">
                    <button className="Btn" onClick={handleSubmit} type="submit">Submit</button>
                    <button className="Btn" onClick={reset} type="submit">Clear</button>
                </div>

            </form>

            <div className="cgpa-sub-div">
                <h1>Cgpa {result}</h1>
                <p>Select your current Semester & Enter all your corresponding Sgpa's</p>
            </div>



        </div>
    );


}

export default Cgpa;