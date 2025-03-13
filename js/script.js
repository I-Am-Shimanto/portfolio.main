
// =========== dom part 
let educationRow = document.querySelector('.education_row')
let proRow = document.querySelector('.pro_row')
let experienceRow = document.querySelector('.experience_row')
let interviewRow = document.querySelector('.interview_row')
let education = document.querySelector('.education')
let professional = document.querySelector('.professional')
let experience = document.querySelector('.experience')
let interview = document.querySelector('.interview')

// ========== function part 

// ========= professional click part 
professional.addEventListener('click', ()=>{
    proRow.style = "display : flex;"
    educationRow.style = "display : none;"
    experienceRow.style = "display : none;"
    interviewRow.style = "display: none;"
    professional.style = "color : #FF014F;"
    education.style = "color : #C4CFDE;"
    experience.style = "color : #C4CFDE;"
    interview.style = "color : #C4CFDE;"
})

// ========= education click part 
education.addEventListener("click", ()=>{
    educationRow.style = "display : flex;"
    proRow.style = "display : none;"
    experienceRow.style = "display : none;"
    interviewRow.style = "display: none;"
    education.style = "color : #FF014F;"
    professional.style = "color : #C4CFDE;"
    experience.style = "color : #C4CFDE;"
    interview.style = "color : #C4CFDE;"
})
// ========== experience click part 
experience.addEventListener("click", ()=>{
    experienceRow.style = "display : flex;"
    educationRow.style = "display : none ;"
    proRow.style = "display : none ;"
    interviewRow.style = "display: none;"
    experience.style = "color : #FF014F;"
    professional.style = "color : #C4CFDE;"
    education.style = "color : #C4CFDE;"
    interview.style = "color : #C4CFDE;"
})

// ========= interview click part 
interview.addEventListener("click", ()=>{
    interviewRow.style = "display : flex;"
    proRow.style = "display : none;"
    educationRow.style = "display : none;"
    experienceRow.style = "display : none;"
    interview.style = "color : #FF014F;"
    education.style = "color : #C4CFDE;"
    experience.style = "color : #C4CFDE;"
    professional.style = "color : #C4CFDE;"

})


// ============== testimonial part 


$('.main_card').slick({
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
});


// ============= pricing part 
const pricingStatic = document.querySelector('.single_card_static')
const pricingStandard = document.querySelector('.single_card_standard')
const pricingPremium = document.querySelector('.single_card_premium')
const static = document.querySelector('.static')
const standard = document.querySelector('.standard')
const premium = document.querySelector('.premium')

static.addEventListener('click', ()=>{
    pricingStatic.style.display = "block"
    pricingStandard.style.display = "none"
    pricingPremium.style.display = "none"
    static.style.color = "#FF014F"
    standard.style.color = "#F6F6F6"
    premium.style.color = "#F6F6F6"
})
standard.addEventListener('click', ()=>{
    pricingStandard.style.display = "block"
    pricingStatic.style.display = "none"
    pricingPremium.style.display = "none"
    standard.style.color = "#FF014F"
    static.style.color = "#F6F6F6"
    premium.style.color = "#F6F6F6"
})
premium.addEventListener('click', ()=>{
    pricingPremium.style.display = "block"
    pricingStandard.style.display = "none"
    pricingStatic.style.display = "none"
    premium.style.color = "#FF014F"
    static.style.color = "#F6F6F6"
    standard.style.color = "#F6F6F6"
})

// -========== contact part 
const inputNumber = document.querySelector('.input_number')
const inputName = document.querySelector('.input_name')
const inputEmail = document.querySelector('.input_email')
const textarea = document.querySelector('.textarea')


// ==========
inputName.addEventListener('click', ()=>{
    inputName.style.outline = "2px solid #FF014F"
    inputNumber.style.outline = "none"
    inputEmail.style.outline = "none"
    textarea.style.outline = "none"
})
inputName.addEventListener('input', ()=>{
    inputName.style.outline = "none"
})
// ============
inputNumber.addEventListener('click', ()=>{
    inputNumber.style.outline = "2px solid #FF014F"
    inputName.style.outline = "none"
    inputEmail.style.outline = "none"
    textarea.style.outline = "none"
})
inputNumber.addEventListener('input', ()=>{
    inputNumber.style.outline = "none"
})
// ============
inputEmail.addEventListener('click', ()=>{
    inputEmail.style.outline = "2px solid #FF014F"
    inputName.style.outline = "none"
    inputNumber.style.outline = "none"
    textarea.style.outline = "none"
})
inputEmail.addEventListener('input', ()=>{
    inputEmail.style.outline = "none"
})

// ============
textarea.addEventListener('click', ()=>{
    textarea.style.outline = "2px solid #FF014F"
    inputName.style.outline = "none"
    inputNumber.style.outline = "none"
    inputEmail.style.outline = "none"
})
textarea.addEventListener('input', ()=>{
    textarea.style.outline = "none"
})

