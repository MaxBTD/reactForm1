import "./formularz.css";
import { useState } from "react";

function Formularz(){
    const [isChecked, setChecked] = useState(false);

    async function formDownload(){
        let imie = document.getElementById("inputName").value;
        let nazwisko = document.getElementById("inputSurname").value;
        let email = document.getElementById("inputEmail").value;
        let haslo = document.getElementById("inputPassword").value;
        let hasloSpraw = document.getElementById("inputRepeatPassword").value;

        if(imie.trim().length === 0){
           await alert("Imie nie wpisane");
        } else if(nazwisko.trim().length === 0){
            await alert("NNazwisko nie wpisane");
        }else if(email.trim().length === 0){
            await alert("E-mail nie wpisany");
        }else if(haslo.trim().length === 0){
            await alert("Hasło nie wpisane");
        }else if(hasloSpraw.trim().length === 0){
            await alert("Powtórzenie hasła nie wpisane");
        }else{
            if(haslo === hasloSpraw){
                await alert("Dania poprawne");
            }else{
                await alert("Hasła nie zgadzają się");
            }
        }
    }

    const checkCheck = () => {
        setChecked(document.getElementById("checkboxAgreement").checked);
    };

    return(
        <form id="formularz">
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
                <input type="checkbox" id="checkboxAgreement" onChange={() => {checkCheck()}}/>
            </div>

            <div id="btnDiv"><button disabled={!isChecked} id="formBtn" onClick={() => {formDownload()}}>Zatwierdź</button></div>
            <p id="results"></p>
        </form>
    );
}

export default Formularz;