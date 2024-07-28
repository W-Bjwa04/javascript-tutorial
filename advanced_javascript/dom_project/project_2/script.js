const form = document.querySelector('form')

// preventing form from its by default action of sending the data to the 
// server on submisssion 

form.addEventListener('submit',function(event){
    event.preventDefault()
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    
    if(weight==='' || weight===0 || isNaN(weight)){
        const result = document.createElement('span')
        result.setAttribute('id','results')
        result.append(document.createTextNode(`Enter Valid Weight`))
        document.querySelector('#results').replaceWith(result)
        
    } else if (height==='' || height===0 || isNaN(height)){
        const result = document.createElement('span')
        result.setAttribute('id','results')
        result.append(document.createTextNode(`Enter Valid Height`))
        document.querySelector('#results').replaceWith(result)
    } else{
        const result = document.createElement('span')
        result.setAttribute('id','results')
        let bmi = weight / ((height* 0.3048) * (height * 0.3048));
    
        // Round to one decimal place
        bmi = Math.round(bmi * 10) / 10;
        result.append(document.createTextNode(`Your BMI IS ${bmi}`))
        document.querySelector('#results').replaceWith(result)

        const category = document.createElement('span')
        category.setAttribute('id','category')
        if(bmi<=18.5){
            
            category.append(document.createTextNode('Underweight'))
            document.querySelector('#category').replaceWith(category)
        }
        else if(bmi>18.5 & bmi<=24.9){
            
            category.append(document.createTextNode('Normal Weight'))
            document.querySelector('#category').replaceWith(category)
        }
        else if(bmi>24.9 & bmi<=29.9){
           
            category.append(document.createTextNode('Overweight'))
            document.querySelector('#category').replaceWith(category)
        } else{
            
            category.append(document.createTextNode('Obesity'))
            document.querySelector('#category').replaceWith(category)
        }

    }
})