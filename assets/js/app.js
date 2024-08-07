"use strict"


let forRegion = document.querySelectorAll('.divs').forEach((e) => {
    console.log(e)
    e.addEventListener('click', function () {
        console.log(e.innerText, '======ex')
        // region()

        async function region() {
            let apis = await fetch(`https://restcountries.com/v3.1/region/${e.innerText}`)
            let apiJsons = await apis.json()
            console.log(Object.values(apiJsons[20].borders).length, '-======================lenght');
            let create = document.createElement('div');
            setTimeout(() => {
                // let generator = Math.floor(Math.random()*30)+1;
                let generator2 = Math.floor(Math.random() * 30) + 1;
                let generator3 = Math.floor(Math.random() * 30) + 1;
                let generator4 = Math.floor(Math.random() * 30) + 1;
                let generator5 = Math.floor(Math.random() * 30) + 1;
                let generator6 = Math.floor(Math.random() * 30) + 1;
                let generator7 = Math.floor(Math.random() * 30) + 1;
                let generator8 = Math.floor(Math.random() * 30) + 1;
                let generator9 = Math.floor(Math.random() * 30) + 1;
                let Arr = [];

                grid.innerHTML = '';

                create.classList = 'cart'

                create.innerHTML = `
                <div class="imge">
                <img src="${apiJsons[generator2].flags.png}" alt="">
                </div>
                <div class="text">
                <div class="title-head">
                <h2>${apiJsons[generator2].name.common}</h2>
                </div>
                <div class="band">
            
                                <div class="population">population:  <span class="pop-info">${apiJsons[generator2].population}</span>
                                </div>
                                <div class="region">Region:  <span class="reg-info">${apiJsons[generator2].region}</span> </div>
                                <div class="capital">Capital:  <span class="cap-info">${apiJsons[generator2].capital}</span></div>
                                </div>
                                </div> `
                grid.appendChild(create)
                Arr.push(generator2)
                console.log(Arr)
                let create1 = document.createElement('div');

                create1.classList = 'cart cart1'

                create1.innerHTML = `<div class="imge">
                <img src="${apiJsons[generator3].flags.png}" alt="">
                </div>
                <div class="text">
                <div class="title-head">
                <h2>${apiJsons[generator3].name.common}</h2>
                </div>
                    <div class="band">
                    
                    <div class="population">population: <span class="pop-info">${apiJsons[generator3].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJsons[generator3].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJsons[generator3].capital}</span></div>
                    </div>
                    </div>`
                grid.appendChild(create1)
                Arr.push(generator3)
                let create2 = document.createElement('div');

                create2.classList = 'cart cart2'

                create2.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator4].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                    <h2>${apiJsons[generator4].name.common}</h2>
                            </div>
                            <div class="band">
                            
                            <div class="population">population: <span class="pop-info">${apiJsons[generator4].population}</span></div>
                            <div class="region">Region: <span class="reg-info">${apiJsons[generator4].region}</span> </div>
                            <div class="capital">Capital: <span class="cap-info">${apiJsons[generator4].capital}</span></div>
                            </div>
                            </div>`
                grid.appendChild(create2)
                Arr.push(generator4)
                let create3 = document.createElement('div');

                create3.classList = 'cart cart3'

                create3.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator5].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                    <h2>${apiJsons[generator5].name.common}</h2>
                    </div>
                    <div class="band">
                    
                    <div class="population">population: <span class="pop-info">${apiJsons[generator5].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJsons[generator5].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJsons[generator5].capital}</span></div>
                    </div>
                    </div>`
                grid.appendChild(create3)
                Arr.push(generator5)
                let create4 = document.createElement('div');

                create4.classList = 'cart cart4'

                create4.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator6].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                            <h2>${apiJsons[generator6].name.common}</h2>
                            </div>
                            <div class="band">
                            
                            <div class="population">population: <span class="pop-info">${apiJsons[generator6].population}</span></div>
                            <div class="region">Region: <span class="reg-info">${apiJsons[generator6].region}</span> </div>
                            <div class="capital">Capital: <span class="cap-info">${apiJsons[generator6].capital}</span></div>
                            </div>
                            </div>`
                grid.appendChild(create4)
                Arr.push(generator6)
                let create5 = document.createElement('div');

                create5.classList = 'cart cart5'

                create5.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator7].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                    <h2>${apiJsons[generator7].name.common}</h2>
                    </div>
                    <div class="band">
                    
                    <div class="population">population: <span class="pop-info">${apiJsons[generator7].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJsons[generator7].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJsons[generator7].capital}</span></div>
                    </div>
                    </div>`
                grid.appendChild(create5)
                Arr.push(generator7)
                let create6 = document.createElement('div');

                create6.classList = 'cart cart6'

                create6.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator8].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                            <h2>${apiJsons[generator8].name.common}</h2>
                            </div>
                            <div class="band">
                            
                            <div class="population">population: <span class="pop-info">${apiJsons[generator8].population}</span></div>
                            <div class="region">Region: <span class="reg-info">${apiJsons[generator8].region}</span> </div>
                            <div class="capital">Capital: <span class="cap-info">${apiJsons[generator8].capital}</span></div>
                            </div>
                    </div>`
                grid.appendChild(create6)
                Arr.push(generator8)
                let create7 = document.createElement('div');

                create7.classList = 'cart cart7'

                create7.innerHTML = `<div class="imge">
                        <img src="${apiJsons[generator9].flags.png}" alt="">
                    </div>
                    <div class="text">
                    <div class="title-head">
                            <h2>${apiJsons[generator9].name.common}</h2>
                            </div>
                            <div class="band">
                            
                            <div class="population">population: <span class="pop-info">${apiJsons[generator9].population}</span></div>
                            <div class="region">Region: <span class="reg-info">${apiJsons[generator9].region}</span> </div>
                            <div class="capital">Capital: <span class="cap-info">${apiJsons[generator9].capital}</span></div>
                            </div>
                            </div>`
                grid.appendChild(create7)
                Arr.push(generator9)
                console.log(Arr)
                let mainChild = document.querySelector('.main-child');
                let input = document.querySelector('.input');

                let carter = document.querySelector('.cart')
                carter.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                    <div class="con-img">
                    <img src="${apiJsons[Arr[0]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[0]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[0]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[0]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[0]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[0]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[0]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[0]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[0]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[0]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let lastChild = detailCarting.lastChild
                    mainChild.appendChild(detailCarting)

                    // let nestedLast = lastChild.lastChild;


                    let borderP = document.querySelector('.border-countries');
                    Object.values(apiJsons[Arr[0]].borders).forEach(borderName => {

                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.textContent = borderName
                        borderP.appendChild(border)
                        // return borderP  
                    })
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)

                    // nestedLast.appendChild(lastChild)

                })

                // console.log(w[1])
                // ==========================================================
                // ==========================================================
                // ==========================================================

                let carter1 = document.querySelector('.cart1')
                carter1.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[1]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[1]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[1]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[1]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[1]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[1]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[1]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[1]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[1]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[1]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[1]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[1]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================

                let carter2 = document.querySelector('.cart2')
                carter2.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[2]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[2]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[2]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[2]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[2]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[2]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[2]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[2]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[2]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[2]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[2]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[2]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================

                let carter3 = document.querySelector('.cart3')
                carter3.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[3]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[3]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[3]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[3]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[3]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[3]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[3]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[3]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[3]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[3]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[3]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[3]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================

                let carter4 = document.querySelector('.cart4')
                carter4.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[4]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[4]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[4]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[4]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[4]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[4]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[4]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[4]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[4]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[4]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[4]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[4]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================
                let carter5 = document.querySelector('.cart5')
                carter5.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[5]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[5]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[5]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[5]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[5]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[5]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[5]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[5]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[5]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[5]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[5]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[5]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================
                let carter6 = document.querySelector('.cart6')
                carter6.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')


                    // function bbb(){

                    // }
                    let detailCarting = document.createElement('div');
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[6]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[6]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[6]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[6]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[6]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[6]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[6]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[6]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[6]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[6]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
                    mainChild.appendChild(detailCarting)
                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[6]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[6]].borders)[i]}`
                        borderP.appendChild(border)
                        // return borderP  
                    }
                    let back = document.querySelector('.back')
                    back.addEventListener('click', () => {
                        // alert('nm')
                        // grid.classList.remove('none')
                        window.location = 'index.html'

                    })
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })
                // ==========================================================
                // ==========================================================
                // ==========================================================
                let carter7 = document.querySelector('.cart7')
                carter7.addEventListener('click', () => {
                    grid.classList.add('none');
                    input.classList.add('none')

                    let detailCarting = document.createElement('div');
                    detailCarting.innerHTML = ''
                    // function bbb(){

                    // }
                    detailCarting.classList = 'detailing-con';
                    detailCarting.innerHTML =
                        `
                    <div class="back" ><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJsons[Arr[7]].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJsons[Arr[7]].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJsons[Arr[7]].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJsons[Arr[7]].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJsons[Arr[7]].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJsons[Arr[7]].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJsons[Arr[7]].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJsons[Arr[7]].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJsons[Arr[7]].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJsons[Arr[7]].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                         `
                    mainChild.appendChild(detailCarting)

                    let borderP = document.querySelector('.border-countries');
                    let lastChild = detailCarting.lastChild
                    // let nestedLast = lastChild.lastChild;
                    for (let i = 0; i < Object.values(apiJsons[Arr[7]].borders).length; i++) {
                        let border = document.createElement('div');
                        border.classList = 'border-name'
                        border.innerHTML = `${Object.values(apiJsons[Arr[7]].borders)[i]}`
                        borderP.appendChild(border)

                        let back = document.querySelector('.back')
                        back.addEventListener('click', () => {
                            // alert('nm')
                            // grid.classList.remove('none')
                            window.location = 'index.html'

                        })
                        // return borderP  
                    }
                    lastChild.appendChild(borderP)
                    // nestedLast.appendChild(lastChild)
                })

            }, 1000)
            
        }
        region()
    })

})
let inpChild = document.querySelector('.input-child');
let nav = document.querySelector('nav')
let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let body = document.querySelector('body');
let mainChild = document.querySelector('.main-child');
dark.addEventListener('click', () => {
    carter.classList.add('for-light-elements')
    carter1.classList.add('for-light-elements')
    carter2.classList.add('for-light-elements')
    carter3.classList.add('for-light-elements')
    carter4.classList.add('for-light-elements')
    carter5.classList.add('for-light-elements')
    carter6.classList.add('for-light-elements')
    carter7.classList.add('for-light-elements')

    let magnifying = document.querySelector('.magnifying');
    dark.classList.add('none')
    light.classList.remove('none')
    body.classList.add('color-light');
    // dd.classList.add('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.add('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {

        regi.classList.add('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.add('light-light-text')
    })
    nav.classList.add('for-light-elements')
    // input.classList.add('for-light-elements')
    input.value = 'Search for a Country'
    inpChild.classList.add('for-light-elements')
    magnifying.style.color = 'black';
    divsMain.classList.add('for-light-elements')
    // forRegion.classList.add('for-light-elements')
    ch.classList.add('for-light-elements')
    mainChild.style.color = 'black'
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('light')
    })
    let borderName = document.querySelectorAll('.border-name').forEach((bor) => {
        bor.classList.add('for-borders')
        let backs = document.querySelectorAll('.back').forEach((bac) => {
            bac.classList.add('for-borders')
        })
    })


})
light.addEventListener('click', () => {
    let magnifying = document.querySelector('.magnifying');
    dark.classList.remove('none')
    light.classList.add('none')
    body.classList.remove('color-light');
    // dd.classList.remove('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.remove('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {

        regi.classList.remove('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.remove('light-light-text')
    })
    nav.classList.remove('for-light-elements')
    input.classList.remove('for-light-elements')
    input.value = 'Search for a Country'
    inpChild.classList.remove('for-light-elements')
    magnifying.style.color = 'black';
    divsMain.classList.remove('for-light-elements')
    // forRegion.classList.remove('for-light-elements')
    ch.classList.remove('for-light-elements')

    let cart = document.querySelectorAll('.cart').forEach((dds) => {
        dds.classList.remove('for-light-elements')
    })
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('dark')
        nats.classList.remove('light')
    })
    mainChild.style.color = 'white'
})

let grid = document.querySelector('.grid');
async function promise2() {
    let api2 = await fetch(`https://restcountries.com/v3.1/name/germany`)
    let apiJson2 = await api2.json()
    console.log(apiJson2)
    let api3 = await fetch(`https://restcountries.com/v3.1/name/united`)
    let apiJson3 = await api3.json()
    console.log(apiJson3)
    let api4 = await fetch(`https://restcountries.com/v3.1/name/brazil`)
    let apiJson4 = await api4.json()
    console.log(apiJson4)
    let api5 = await fetch(`https://restcountries.com/v3.1/name/iceland`)
    let apiJson5 = await api5.json()
    console.log(apiJson5)
    let api6 = await fetch(`https://restcountries.com/v3.1/name/afghanistan`)
    let apiJson6 = await api6.json()
    console.log(apiJson6)
    let api7 = await fetch(`https://restcountries.com/v3.1/name/aland`)
    let apiJson7 = await api7.json()
    console.log(apiJson7)
    let api8 = await fetch(`https://restcountries.com/v3.1/name/albania`)
    let apiJson8 = await api8.json()
    console.log(apiJson8)
    let api9 = await fetch(`https://restcountries.com/v3.1/name/algeria`)
    let apiJson9 = await api9.json()
    console.log(apiJson9)








    let create = document.createElement('div');

    create.classList = 'cart'

    create.innerHTML = `
      <div class="imge">
                    <img src="${apiJson2[0].flags.png}" alt="">
                </div>
                <div class="text">
                    <div class="title-head">
                        <h2 class='h2'>${apiJson2[0].name.common}</h2>
                    </div>
                    <div class="band">

                        <div class="population">population:  <span class="pop-info">${apiJson2[0].population}</span>
                        </div>
                        <div class="region">Region:  <span class="reg-info">${apiJson2[0].region}</span> </div>
                        <div class="capital">Capital:  <span class="cap-info">${apiJson2[0].capital}</span></div>
                    </div>
                </div> `
    create.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson2[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson2[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson2[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson2[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson2[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson2[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson2[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson2[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson2[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson2[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson2[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson2[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })

    grid.appendChild(create)
    let create1 = document.createElement('div');

    create1.classList = 'cart'

    create1.innerHTML = `<div class="imge">
                <img src="${apiJson3[2].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2 class='h2'>${apiJson3[2].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson3[2].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson3[2].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson3[2].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create1.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')
        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson3[2].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson3[2].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson3[2].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson3[2].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson3[2].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson3[2].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson3[2].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson3[2].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson3[2].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson3[2].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson3[2].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson3[2].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })

    grid.appendChild(create1)

    let create2 = document.createElement('div');

    create2.classList = 'cart'

    create2.innerHTML = `<div class="imge">
                <img src="${apiJson4[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson4[0].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson4[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson4[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson4[0].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create2.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson4[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson4[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson4[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson4[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson4[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson4[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson4[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson4[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson4[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson4[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson4[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson4[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create2)
    let create3 = document.createElement('div');

    create3.classList = 'cart'

    create3.innerHTML = `<div class="imge">
                <img src="${apiJson5[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson5[0].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson5[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson5[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson5[0].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create3.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson5[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson5[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson5[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson5[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson5[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson5[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson5[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson5[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson5[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson5[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson5[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson5[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create3)
    let create4 = document.createElement('div');

    create4.classList = 'cart'

    create4.innerHTML = `<div class="imge">
                <img src="${apiJson6[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson6[0].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson6[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson6[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson6[0].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create4.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson6[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson6[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson6[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson6[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson6[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson6[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson6[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson6[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson6[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson6[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson6[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson6[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create4)
    let create5 = document.createElement('div');

    create5.classList = 'cart'

    create5.innerHTML = `<div class="imge">
                <img src="${apiJson7[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson7[0].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson7[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson7[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson7[0].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create5.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')
        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson7[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson7[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson7[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson7[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson7[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson7[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson7[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson7[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson7[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson7[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson7[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson7[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create5)
    let create6 = document.createElement('div');

    create6.classList = 'cart'

    create6.innerHTML = `<div class="imge">
                <img src="${apiJson8[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson8[0].name.common}</h2>
                </div>
                <div class="band">

                    <div class="population">population: <span class="pop-info">${apiJson8[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson8[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson8[0].capital}</span></div>
                </div>
            </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create6.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                    <div class="con-child">
                <div class="con-img">
                <img src="${apiJson8[0].flags.png}" alt="">
                    </div>
                    <div class="con-text">
                    <div class="con-name">
                    <h1>${apiJson8[0].name.common}</h1>
                    </div>
                    <div class="lis">
                    <div class="lis-childs">
                    <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson8[0].name.nativeName)[0].official}</span></div>
                    <div class="population-con">Population: <span class='nat'>${apiJson8[0].population}</span></div>
                    <div class="region-con">Region: <span class='nat'>${apiJson8[0].region}</span></div>
                    <div class="sub-region">Sub Region: <span class='nat'>${apiJson8[0].subregion}</span></div>
                    <div class="Capital">Capital: <span class='nat'>${apiJson8[0].capital}</span></div>
                    </div>
                    <div class="lis-childs">
                    <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson8[0].tld[0]}</span></div>
                    <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson8[0].currencies)[0].symbol}</span></div>
                    <div class="languages">Languages: <span class='nat'>${Object.values(apiJson8[0].languages)[0]}</span></div>
                    </div>
                    </div>
                    <div class="border-countries">
                    <span>Border Countries:</span>
                    
                    
                    </div>
                    </div>
                    </div>
                    `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson8[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson8[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create6)
    let create7 = document.createElement('div');

    create7.classList = 'cart'

    create7.innerHTML = `<div class="imge">
                <img src="${apiJson9[0].flags.png}" alt="">
            </div>
            <div class="text">
                <div class="title-head">
                    <h2>${apiJson9[0].name.common}</h2>
                    </div>
                    <div class="band">
                    
                    <div class="population">population: <span class="pop-info">${apiJson9[0].population}</span></div>
                    <div class="region">Region: <span class="reg-info">${apiJson9[0].region}</span> </div>
                    <div class="capital">Capital: <span class="cap-info">${apiJson9[0].capital}</span></div>
                </div>
                </div>`
    // =========================================================
    // =========================================================
    // =========================================================
    create7.addEventListener('click', function () {
        grid.classList.add('none')
        let input2= document.querySelector('.input')
        input2.classList.add('none')

        let detailCarting = document.createElement('div');
        detailCarting.classList = 'detailing-con';
        detailCarting.innerHTML =
            `
                            <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                            <div class="con-child">
                        <div class="con-img">
                        <img src="${apiJson9[0].flags.png}" alt="">
                            </div>
                            <div class="con-text">
                            <div class="con-name">
                            <h1>${apiJson9[0].name.common}</h1>
                            </div>
                            <div class="lis">
                            <div class="lis-childs">
                            <div class="native-name">Native Name: <span class='nat'>${Object.values(apiJson9[0].name.nativeName)[0].official}</span></div>
                            <div class="population-con">Population: <span class='nat'>${apiJson9[0].population}</span></div>
                            <div class="region-con">Region: <span class='nat'>${apiJson9[0].region}</span></div>
                            <div class="sub-region">Sub Region: <span class='nat'>${apiJson9[0].subregion}</span></div>
                            <div class="Capital">Capital: <span class='nat'>${apiJson9[0].capital}</span></div>
                            </div>
                            <div class="lis-childs">
                            <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiJson9[0].tld[0]}</span></div>
                            <div class="currencies">Currencies: <span class='nat'>${Object.values(apiJson9[0].currencies)[0].symbol}</span></div>
                            <div class="languages">Languages: <span class='nat'>${Object.values(apiJson9[0].languages)[0]}</span></div>
                            </div>
                            </div>
                            <div class="border-countries">
                            <span>Border Countries:</span>
                            
                            
                            </div>
                            </div>
                            </div>
                            `
        mainChild.appendChild(detailCarting)
        let borderP = document.querySelector('.border-countries');
        let lastChild = detailCarting.lastChild
        // let nestedLast = lastChild.lastChild;
        for (let i = 0; i < Object.values(apiJson9[0].borders).length; i++) {
            let border = document.createElement('div');
            border.classList = 'border-name'
            border.innerHTML = `${Object.values(apiJson9[0].borders)[i]}`
            borderP.appendChild(border)
            // return borderP  
        }
        let back = document.querySelector('.back')
        back.addEventListener('click', () => {
            // alert('nm')
            // grid.classList.remove('none')
            window.location = 'index.html'

        })
        lastChild.appendChild(borderP)
        // nestedLast.appendChild(lastChild)
    })
    grid.appendChild(create7)

    
    

    let mainChild = document.querySelector('.main-child')
    let input = document.querySelector('#input');

    let magnifying = document.querySelector('.magnifying');
    magnifying.addEventListener('click', () => {

        let inputValue = input.value;
        // alert('you press enter' )
        console.log(inputValue)

        async function apiAll1() {
            let apiiii = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
            let apiiiiJson = await apiiii.json()
            console.log(apiiiiJson)
            grid.classList.add('none')

            let detailCarting = document.createElement('div');
            mainChild.innerHTML = ''
            detailCarting.classList = 'detailing-con';
            detailCarting.innerHTML =
                `
                                 <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                                 <div class="con-child">
                             <div class="con-img">
                             <img src="${apiiiiJson[0].flags.png}" alt="">
                             </div>
                                 <div class="con-text">
                                 <div class="con-name">
                                 <h1>${apiiiiJson[0].name.common}</h1>
                                 </div>
                                 <div class="lis">
                                 <div class="lis-childs">
                                 <div class="native-name">Native Name: <span class='nat'>${Object.values(apiiiiJson[0].name.nativeName)[0].official}</span></div>
                                 <div class="population-con">Population: <span class='nat'>${apiiiiJson[0].population}</span></div>
                                 <div class="region-con">Region: <span class='nat'>${apiiiiJson[0].region}</span></div>
                                 <div class="sub-region">Sub Region: <span class='nat'>${apiiiiJson[0].subregion}</span></div>
                                 <div class="Capital">Capital: <span class='nat'>${apiiiiJson[0].capital}</span></div>
                                 </div>
                                 <div class="lis-childs">
                                 <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiiiiJson[0].tld[0]}</span></div>
                                 <div class="currencies">Currencies: <span class='nat'>${Object.values(apiiiiJson[0].currencies)[0].name}</span></div>
                                 <div class="languages">Languages: <span class='nat'>${Object.values(apiiiiJson[0].languages)[1]}</span></div>
                                 </div>
                                 </div>
                                 <div class="border-countries">
                                 <span>Border Countries:</span>
                                 
                                 
                                 </div>
                                 </div>
                                 </div>
                                 `
            mainChild.appendChild(detailCarting)
            let borderP = document.querySelector('.border-countries');
            let lastChild = detailCarting.lastChild
            // let nestedLast = lastChild.lastChild;
            for (let i = 0; i < Object.values(apiiiiJson[0].borders).length; i++) {
                let border = document.createElement('div');
                border.classList = 'border-name'
                border.innerHTML = `${Object.values(apiiiiJson[0].borders)[i]}`
                borderP.appendChild(border)
                // return borderP  
            }
            let back = document.querySelector('.back')
            back.addEventListener('click', () => {
                // alert('nm')
                // grid.classList.remove('none')
                window.location = 'index.html'

            })
            lastChild.appendChild(borderP)


        }
        apiAll1()

    })



    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            let inputValue = input.value;
            // alert('you press enter' )
            console.log(inputValue)

            async function apiAll() {
                let apiiii = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
                let apiiiiJson = await apiiii.json()
                console.log(apiiiiJson)
                grid.classList.add('none')

                let detailCarting = document.createElement('div');
                mainChild.innerHTML = ''
                detailCarting.classList = 'detailing-con';
                detailCarting.innerHTML =
                    `
                    <div class="back"><i class="fa-solid fa-arrow-left"></i> Back</div>
                                     <div class="con-child">
                                     <div class="con-img">
                                 <img src="${apiiiiJson[0].flags.png}" alt="">
                                     </div>
                                     <div class="con-text">
                                     <div class="con-name">
                                     <h1>${apiiiiJson[0].name.common}</h1>
                                     </div>
                                     <div class="lis">
                                     <div class="lis-childs">
                                     <div class="native-name">Native Name: <span class='nat'>${Object.values(apiiiiJson[0].name.nativeName)[0].official}</span></div>
                                     <div class="population-con">Population: <span class='nat'>${apiiiiJson[0].population}</span></div>
                                     <div class="region-con">Region: <span class='nat'>${apiiiiJson[0].region}</span></div>
                                     <div class="sub-region">Sub Region: <span class='nat'>${apiiiiJson[0].subregion}</span></div>
                                     <div class="Capital">Capital: <span class='nat'>${apiiiiJson[0].capital}</span></div>
                                     </div>
                                     <div class="lis-childs">
                                     <div class="top-level-Domain">Top Level Domains: <span class='nat'>${apiiiiJson[0].tld[0]}</span></div>
                                     <div class="currencies">Currencies: <span class='nat'>${Object.values(apiiiiJson[0].currencies)[0].name}</span></div>
                                     <div class="languages">Languages: <span class='nat'>${Object.values(apiiiiJson[0].languages)[1]}</span></div>
                                     </div>
                                     </div>
                                     <div class="border-countries">
                                     <span>Border Countries:</span>
                                     
                                     
                                     </div>
                                     </div>
                                     </div>
                                     `
                mainChild.appendChild(detailCarting)
                let borderP = document.querySelector('.border-countries');
                let lastChild = detailCarting.lastChild
                // let nestedLast = lastChild.lastChild;
                for (let i = 0; i < Object.values(apiiiiJson[0].borders).length; i++) {
                    let border = document.createElement('div');
                    border.classList = 'border-name'
                    border.innerHTML = `${Object.values(apiiiiJson[0].borders)[i]}`
                    borderP.appendChild(border)
                    // return borderP  
                }
                let back = document.querySelector('.back')
                back.addEventListener('click', () => {
                    // alert('nm')
                    // grid.classList.remove('none')
                    window.location = 'index.html'
    
                })
                lastChild.appendChild(borderP)
            }
            apiAll()

        }
    })




}

promise2()



dark.addEventListener('click', () => {
    let magnifying = document.querySelector('.magnifying');
    dark.classList.add('none')
    light.classList.remove('none')
    body.classList.add('color-light');
    // dd.classList.add('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.add('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {

        regi.classList.add('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.add('light-light-text')
    })
    mainChild.style.color = 'black'
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('light')
        nats.classList.remove('dark')
    })
    nav.classList.add('for-light-elements')
    input.classList.add('for-light-elements')
    input.value = 'Search for a Country'
    inpChild.classList.add('for-light-elements')
    magnifying.style.color = 'black';
    divsMain.classList.add('for-light-elements')
    // forRegion.classList.add('for-light-elements')
    ch.classList.add('for-light-elements')
    let borderName = document.querySelectorAll('.border-name').forEach((bor) => {
        bor.classList.add('for-borders')
        let backs = document.querySelectorAll('.back').forEach((bac) => {
            bac.classList.add('for-borders')
        })
    })
    let cart = document.querySelectorAll('.cart').forEach((dds) => {
        dds.classList.add('for-light-elements')
    })
    
})
light.addEventListener('click', () => {
    let magnifying = document.querySelector('.magnifying');
    dark.classList.remove('none')
    light.classList.add('none')
    body.classList.remove('color-light');
    // dd.classList.remove('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.remove('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {
        
        regi.classList.remove('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.remove('light-light-text')
    })
    nav.classList.remove('for-light-elements')
    input.classList.remove('for-light-elements')
    input.value = 'Search for a Country'
    inpChild.classList.remove('for-light-elements')
    magnifying.style.color = 'black';
    divsMain.classList.remove('for-light-elements')
    // forRegion.classList.remove('for-light-elements')
    ch.classList.remove('for-light-elements')
    
    let cart = document.querySelectorAll('.cart').forEach((dds) => {
        dds.classList.remove('for-light-elements')
    })
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('dark')
        nats.classList.remove('light')
    })
    mainChild.style.color = 'white'
    let borderName = document.querySelectorAll('.border-name').forEach((bor) => {
        bor.classList.remove('for-borders')
        let backs = document.querySelectorAll('.back').forEach((bac) => {
            bac.classList.remove('for-borders')
        })
    })
})



input.classList.add('input-dark')

let up = document.querySelector('.up');
let down = document.querySelector('.down');
let ch = document.querySelector('.ch');
function hider() {
    down.classList.add('none');
    up.classList.remove('none')
    ch.classList.remove('none')
}
function unHider() {
    down.classList.remove('none');
    up.classList.add('none')
    ch.classList.add('none');
}

let divsMain = document.querySelector('.divs-main');
// console.log(dd)

dark.addEventListener('click', () => {
    let magnifying = document.querySelector('.magnifying');
    dark.classList.add('none')
    light.classList.remove('none')
    body.classList.add('color-light');
    // dd.classList.add('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.add('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {

        regi.classList.add('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.add('light-light-text')
    })
    mainChild.style.color = 'black'
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('light')
        nats.classList.remove('dark')
    })
    nav.classList.add('for-light-elements')
    // input.classList.add('for-light-elements')
    // input.value = 'Search for a Country'
    // inpChild.classList.add('for-light-elements')
    // magnifying.style.color = 'black';
    // divsMain.classList.add('for-light-elements')
    // // forRegion.classList.add('for-light-elements')
    // ch.classList.add('for-light-elements')
    let borderName = document.querySelectorAll('.border-name').forEach((bor) => {
        bor.classList.add('for-borders')
        let backs = document.querySelectorAll('.back').forEach((bac) => {
            bac.classList.add('for-borders')
        })
    })
    let cart = document.querySelectorAll('.cart').forEach((dds) => {
        dds.classList.add('for-light-elements')
    })
    
})
light.addEventListener('click', () => {
    let magnifying = document.querySelector('.magnifying');
    dark.classList.remove('none')
    light.classList.add('none')
    body.classList.remove('color-light');
    // dd.classList.remove('for-light-elements')
    let pop = document.querySelectorAll('.pop-info').forEach((popi) => {
        popi.classList.remove('light-light-text')
    })
    let reg = document.querySelectorAll('.reg-info').forEach((regi) => {
        
        regi.classList.remove('light-light-text')
    })
    let cap = document.querySelectorAll('.cap-info').forEach((capi) => {

        capi.classList.remove('light-light-text')
    })
    nav.classList.remove('for-light-elements')
    // input.classList.remove('for-light-elements')
    // input.value = 'Search for a Country'
    // inpChild.classList.remove('for-light-elements')
    // magnifying.style.color = 'black';
    // divsMain.classList.remove('for-light-elements')
    // // forRegion.classList.remove('for-light-elements')
    // ch.classList.remove('for-light-elements')
    
    let cart = document.querySelectorAll('.cart').forEach((dds) => {
        dds.classList.remove('for-light-elements')
    })
    let nat = document.querySelectorAll('.nat').forEach((nats) => {
        nats.classList.add('dark')
        nats.classList.remove('light')
    })
    mainChild.style.color = 'white'
    let borderName = document.querySelectorAll('.border-name').forEach((bor) => {
        bor.classList.remove('for-borders')
        let backs = document.querySelectorAll('.back').forEach((bac) => {
            bac.classList.remove('for-borders')
        })
    })
})

let question = document.querySelector('.question-head');
question.style.cursor = 'pointer'

question.addEventListener('click',()=>{
    window.location.reload()
    
})