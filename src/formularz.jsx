import "./formularz.css";
import { useEffect } from "react";
import { useState } from "react";

function Formularz(){
    const [isChecked, setChecked] = useState(false);

    const formDownload = () =>{
        let imie = document.getElementById("inputName").value;
        let nazwisko = document.getElementById("inputSurname").value;
        let email = document.getElementById("inputEmail").value;
        let haslo = document.getElementById("inputPassword").value;
        let hasloSpraw = document.getElementById("inputRepeatPassword").value;
        
        document.getElementById("results").innerHTML = imie;
        
    }

    useEffect(() => {
        setChecked(document.getElementById("checkboxAgreement").checked);
    });

    return(
        <div id="formularz">
            <p>Imię</p>
            <input type="text" id="inputName"/>

            <p>Nazwisko</p>
            <input type="text" id="inputSurname"/>

            <p>email</p>
            <input type="email" id="inputEmail"/>

            <p>hasło</p>
            <input type="text" id="inputPassword"/>

            <p>Powtórz hasło</p>
            <input type="text" id="inputRepeatPassword"/>

            <div style={{display:"flex"}}>
                <p>Zapoznałem się z <br/>regulaminem</p>
                <input type="checkbox" id="checkboxAgreement"/>
            </div>

            <div id="btnDiv"><button disabled={isChecked} id="formBtn" onClick={() => {formDownload()}}>Zatwierdź</button></div>
            <p id="results"></p>
        </div>
    );
}

export default Formularz;