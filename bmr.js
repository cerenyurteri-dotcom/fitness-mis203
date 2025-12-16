document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // İnputları al
    var W = parseFloat(document.getElementById('weight').value); 
    var H = parseFloat(document.getElementById('height').value); 
    var A = parseFloat(document.getElementById('age').value);       
    var S = document.getElementById('sex').value.toLowerCase(); 
    var bmr = 0;
    // Validasyon
    if (isNaN(W) || isNaN(H) || isNaN(A) || S === "") {
        alert("Error: Please check all numbers and select Sex.");
        return;}
    // 4. BMR Formülü
    if (S === 'male') {
        // Erkek için:
        bmr = (10 * W) + (6.25 * H) - (5 * A) + 5;
    } else if (S === 'female') {
        // Kadın için:
        bmr = (10 * W) + (6.25 * H) - (5 * A) - 161;
    }
    // yuvarla
    var roundedBMR = Math.round(bmr);

    alert("BMR Calculated: " + roundedBMR + " kcal/day.");
    var submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Calculated!';
    setTimeout(function() {
        submitButton.textContent = 'Save Profile and Continue';
    }, 2000);
});