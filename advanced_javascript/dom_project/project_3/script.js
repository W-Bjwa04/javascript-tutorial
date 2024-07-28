
// this is an build in js method that runs a fuction automatically after the given interval


setInterval(function(){
    let now = new Date()
    const time = document.createElement('div')
    time.setAttribute('id','time')

    time.append(document.createTextNode(`${now.toLocaleTimeString()}`))
    document.querySelector('#time').replaceWith(time)


    const date = document.createElement('div')
    date.setAttribute('id','date')
    date.append(document.createTextNode(`${now.toLocaleDateString()}`))
    document.querySelector('#date').replaceWith(date)
},1000)   //1000 mill = 1 sec

