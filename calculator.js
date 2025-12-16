
function calculate() {
    var p = document.getElementById("protein").value;
    var c = document.getElementById("carbs").value;
    var f = document.getElementById("fat").value;
    var bmr = document.getElementById("bmr").value;
    var e = document.getElementById("exercise").value;

    var proteinVal = Number(p);
    var carbsVal = Number(c);
    var fatVal = Number(f);
    var bmrVal = Number(bmr);
    var exerciseVal = Number(e);

    var totalIntake = (proteinVal * 4) + (carbsVal * 4) + (fatVal * 9);

    var netResult = totalIntake - (exerciseVal + bmrVal);

    document.getElementById("result").innerHTML = "Net Calories: " + netResult + " kcal";
}
