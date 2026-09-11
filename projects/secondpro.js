const form = document.querySelector('form')

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)

    const submit = document.querySelector('#submit')

    if (height <= 0 || isNaN(height)) {

        submit.innerHTML = `Please add a valid height`

    }

    else if (weight <= 0 || isNaN(weight)) {

        submit.innerHTML = `Please add a valid weight`

    }

    else {

        const bmi = Number(
            (weight / ((height * height) / 10000)).toFixed(2)
        )

        if (bmi < 18.6) {

            console.log('Under weight')

        }

        else if (bmi >= 18.6 && bmi <= 24.9) {

            console.log('Normal weight')

        }

        else {

            console.log('Over weight')

        }

        submit.innerHTML = `BMI: ${bmi}`
    }

})