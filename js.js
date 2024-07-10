document.addEventListener('DOMContentLoaded', (event) => {
    // Select the popup div and buttons
    const popUpSect = document.getElementById('popUpSect');
    const cancelBtn = document.querySelector('.cancelTRMBtn');
    const submitBtn = document.querySelector('.submitTRMBtn');
    const generateBtn = document.querySelector('.generateBtn');

    const successPopUpSect = document.getElementById('successPopUpSect');
    const exitBtn = document.getElementById('exit');

    // Add event listener to the generate button
    generateBtn.addEventListener('click', () => {
        // Show the popup
        popUpSect.style.display = 'block';
    });

    // Add event listener to the cancel button
    cancelBtn.addEventListener('click', () => {
        // Hide the popup
        popUpSect.style.display = 'none';
    });

    // Add event listener to the submit button
    submitBtn.addEventListener('click', () => {
        // Hide the popup
        popUpSect.style.display = 'none';

        // Show the success popup
        successPopUpSect.style.display = 'block';
    });

    exitBtn.addEventListener('click', (event) => {
        // Prevent the default action of the anchor tag
        event.preventDefault();
        
        // Hide the success popup
        successPopUpSect.style.display = 'none';
    });



    // add event listeners for buttons in the success message popup respectively

    document.querySelector('#goToRequestBtn').addEventListener('click', () => {
        //navigate to the request list
        window.location.href = './requests.html';
    });

    document.querySelector('#goToCreateInspection').addEventListener('click', () => {
        //navigate to the new inspection pade
        window.location.href = './newInspection.html';
    });

        // Add an event listener to the label to trigger the file input click
    document.querySelector('label[for="fileInput"]').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

});
