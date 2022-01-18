class WheatherWidget{
    constructor(){
        this.createInputCity();
        this.addEventListener();

    }
    addEventListener(){
        let input = document.querySelector('#weather_input')
        if (!input) return

        input.addEventListener('keyup', (event)=>{
            if (event.code.includes('Enter')){ //содержится ли слово в строке инклюдс
                this.getData(event.target.value)
           
        }
        })

    }

    createInputCity(){
        let div = document.createElement('div'),
            inputHtml = `<h2> В каком городе хотите узнать погоду?<h2>
                        <input class="text-field__input" type="text" id ="weather_input">`

        div.classList.add('weather_widget')
        div.innerHTML = inputHtml
        document.body.appendChild(div)

    }

    getData = async function (cityName) {    
        let url =`http://api.weatherapi.com/v1/current.json?key=27134c4d1c7d4800818192329210901&q=${cityName}&lang=ru`
        let response = await fetch(url)
        let data = await response.json()

       this.show(data)
    }

    show(data){
        let widget = document.querySelector('.widget')

        if (!widget){
        widget = document.createElement('div');
        widget.classList.add('widget')
        }

        let widgetHtml = `<p>${data.current.condition.text} </p>
                            <img src="https:${data.current.condition.icon}">
                            <h2> ${data.current.temp_c}&deg</h2>`

        widget.innerHTML = widgetHtml
        document.body.appendChild(widget)

    }
}

    window.addEventListener('load',() =>{
    let widget = new WheatherWidget()



})