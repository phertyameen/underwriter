.checkInp input[type='checkbox']{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid var(--orange); /* Use your custom border color */
    border-radius: 3px; /* Optional: add some rounding to the corners */
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    
}
.checkInp input[type='checkbox']:checked {
    background-color: var(--orange); /* Background color when checked */
    color: white; /* Color of the tick */
}

input[type="radio"] {
appearance: none;
width: 16px;
height: 16px;
border: 2px solid purple;
border-radius: 50%;
cursor: pointer;
position: relative;
}
input[type="radio"]:checked::after {
content: '';
width: 10px;
height: 10px;
border-radius: 50%;
background-color: purple;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}







.checkInp input[type='checkbox']:checked::before {
    content: '✓'; /* Tick symbol */
    font-size: 12px;
    color: white; /* Tick color */
}