import React, { useState } from "react";



function Sgpa() {


    const [value1 = 0, setSelect1] = useState();
    const [value2 = 0, setSelect2] = useState();
    const [value3 = 0, setSelect3] = useState();
    const [value4 = 0, setSelect4] = useState();
    const [value5 = 0, setSelect5] = useState();
    const [value6 = 0, setSelect6] = useState();
    const [value7 = 0, setSelect7] = useState();
    const [value8 = 0, setSelect8] = useState();
    const [gp1 = 0, setGradePoint1] = useState();
    const [gp2 = 0, setGradePoint2] = useState();
    const [gp3 = 0, setGradePoint3] = useState();
    const [gp4 = 0, setGradePoint4] = useState();
    const [gp5 = 0, setGradePoint5] = useState();
    const [gp6 = 0, setGradePoint6] = useState();
    const [gp7 = 0, setGradePoint7] = useState();
    const [gp8 = 0, setGradePoint8] = useState();
    const [result, setResult] = useState();


    const handleSubmit = event => {
        setResult(((Number(value1) * Number(gp1)) +
            (Number(value2) * Number(gp2)) +
            (Number(value3) * Number(gp3)) +
            (Number(value4) * Number(gp4)) +
            (Number(value5) * Number(gp5)) +
            (Number(value6) * Number(gp6)) +
            (Number(value7) * Number(gp7)) +
            (Number(value8) * Number(gp8))
        ) /
            (Number(gp1) + Number(gp2) + Number(gp3) + Number(gp4) + Number(gp5) + Number(gp6) + Number(gp7) + Number(gp8)));
    }

    const handleClear = event => {
        setResult(0);
        setSelect1(0);
        setSelect2(0);
        setSelect3(0);
        setSelect4(0);
        setSelect5(0);
        setSelect6(0);
        setSelect7(0);
        setSelect8(0);
        setGradePoint1(0);
        setGradePoint2(0);
        setGradePoint3(0);
        setGradePoint4(0);
        setGradePoint5(0);
        setGradePoint6(0);
        setGradePoint7(0);
        setGradePoint8(0);
        for (let i = 0; i < 8; i++) {
            setSelect1('');
            document.getElementsByClassName("input")[i].value = "";
        };
    }


    return (

        <div className="mainDiv mainDivSgpa">




            <div className="sgpa-sub-div">
                <div class="attendex-sub-div-spcl-left attendex-sub-div-spcl cgpa-img">
                    <img alt="sgpa" src="../sgpa.png" />
                </div>
                <p>Enter your Grades & Credits to calculate your Sgpa</p>
            </div>

            <div className="sgpa-sub-div">
                <h1 className="headings"> Sgpa {result}</h1>
            </div>



            <div className="sgpa-sub-div">

                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value1} onChange={e => setSelect1(e.target.value)}>
                        <option value="0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint1(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value2} onChange={e => setSelect2(e.target.value)}>
                        <option value="0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint2(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value3} onChange={e => setSelect3(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint3(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value4} onChange={e => setSelect4(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint4(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value5} onChange={e => setSelect5(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint5(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value6} onChange={e => setSelect6(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint6(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" value={value7} onChange={e => setSelect7(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint7(event.target.value)}>
                    </input>
                </div>
                <div className="sgpa-elements">
                    <select className="sgpaSelector" defaultValue value={value8} onChange={e => setSelect8(e.target.value)}>
                        <option value="0.0">F</option>
                        <option value="10">S</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D</option>
                        <option value="5.5">P</option>
                    </select>
                    <input
                        className="input"
                        type="number"
                        placeholder="credit"
                        onChange={event => setGradePoint8(event.target.value)}>
                    </input>
                </div>





                <br />
                <div className="sgpa-elements">
                    <button className="Btn sgpa-Btn" onClick={handleSubmit}>Compute</button>
                    <button className="Btn sgpa-Btn" onClick={handleClear}>Clear</button>
                </div>
            </div>

        </div>
    );

}

export default Sgpa;