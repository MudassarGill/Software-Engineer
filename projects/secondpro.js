const form = document.querySelector('form')

const result = document.querySelector('#result')

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)

    if (height <= 0 || isNaN(height)) {

        result.innerHTML = `Please add a valid height`

    }

    else if (weight <= 0 || isNaN(weight)) {

        result.innerHTML = `Please add a valid weight`

    }

    else {

        const bmi = Number(
            (weight / ((height * height) / 10000)).toFixed(2)
        )

        if (bmi < 18.6) {

            result.innerHTML = `BMI: ${bmi} - Under weight`

        }

        else if (bmi >= 18.6 && bmi <= 24.9) {

            result.innerHTML = `BMI: ${bmi} - Normal weight`

        }

        else {

            result.innerHTML = `BMI: ${bmi} - Over weight`

        }

    }

})