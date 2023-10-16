const titles = document.querySelectorAll('.hovlet');
const nav = document.querySelector('.nav')
const intro = document.querySelector('.intro')
const coffee = document.querySelector('.coffee')
const station = document.querySelector('.station')
const house = document.querySelector('.house')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')

window.addEventListener('scroll', fixNav)

titles.forEach(title => {
    title.innerHTML = title.innerText
        .split('')
        .map((letter, index) => `<span class="letter">${letter}</span>`)
        .join('')

})

function fixNav(){
    console.log(coffee.getBoundingClientRect().top, nav.getBoundingClientRect().top, window.scrollY);
    nav.classList.remove('intro-nav')
    nav.classList.remove('house-nav')
    nav.classList.remove('coffee-nav')
    nav.classList.remove('station-nav')

    one.classList.remove('current')
        two.classList.remove('current')
        three.classList.remove("current")
        four.classList.remove('current')
    
    if(intro.getBoundingClientRect().top < nav.getBoundingClientRect().bottom) {
        // console.log('in');
        // nav.classList.add('intro-nav')
        // nav.classList.remove('house-nav')
        // nav.classList.remove('coffee-nav')
        // nav.classList.remove('station-nav')

        // one.classList.add('current')
        // two.classList.remove('current')
        // three.classList.remove("current")
        // four.classList.remove('current')
        
        if(coffee.getBoundingClientRect().top < nav.getBoundingClientRect().bottom){
            // nav.classList.add('coffee-nav')
            // nav.classList.remove('house-nav')
            // nav.classList.remove('intro-nav')
            // nav.classList.remove('station-nav')

            // one.classList.remove('current')
            // two.classList.add('current')
            // three.classList.remove('current')
            // four.classList.remove('current')

            if(station.getBoundingClientRect().top < nav.getBoundingClientRect().bottom){
                // nav.classList.add('station-nav')
                // nav.classList.remove('house-nav')
                // nav.classList.remove('coffee-nav')
                // nav.classList.remove('intro-nav')

                // one.classList.remove('current')
                // two.classList.remove('current')
                // three.classList.add('current')
                // four.classList.remove('current')

                if(house.getBoundingClientRect().top < nav.getBoundingClientRect().bottom){
                    nav.classList.add('house-nav')
                    // nav.classList.remove('station-nav')
                    // nav.classList.remove('coffee-nav')
                    // nav.classList.remove('intro-nav')

                    // one.classList.remove('current')
                    // two.classList.remove('current')
                    // three.classList.remove('current')
                    four.classList.add('current')
                }else{
                    nav.classList.add('station-nav')
                    three.classList.add('current')
                }
            }else{
                nav.classList.add('coffee-nav')
                two.classList.add('current')
            }
        }else{
            nav.classList.add('intro-nav')
            one.classList.add('current')

        }
    }else{
        // nav.classList.remove('intro-nav')
        // nav.classList.remove('coffee-nav')
        // one.classList.remove('current')
        // two.classList.remove('current')
        // three.classList.remove('current')
        // four.classList.remove('current')
    }
}