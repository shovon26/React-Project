import React from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
export default function TemperatureInput({temperature, scale, onTemperaureChange}){
    return(
        <>
            <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                <input type='number' value={temperature} onChange={(e) => onTemperaureChange(e, scale)}/>
            </fieldset>
        </>
    );
}