

const hoursInput = document.getElementById("horas");
const daysInput = document.getElementById("days");
const results = document.getElementById("resultadoFinal");
const button = document.getElementById("cauculate")


function calculator() {
    const totalHours = parseFloat(hoursInput.value);
    const totalDays = parseFloat(daysInput.value);

    if (!isNaN(totalHours) && !isNaN(totalDays) && totalDays > 0) {
        const hoursPerDay = totalHours / totalDays;

        results.innerHTML = `You need to work ${hoursPerDay.toFixed(2)} per day.`;
}else{
    alert("type a valid number of hours or days")
}
}