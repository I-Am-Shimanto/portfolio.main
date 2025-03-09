var typed = new Typed(".auto-type" ,{
    strings : ["Developer." , "Professional Coder." , "Developer."],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true

})

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
