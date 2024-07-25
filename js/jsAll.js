// dashboard script
// changes section from overview to requests
const requests = document.querySelector('.requests')

requests.addEventListener('click', () => {

    window.location.href = 'requests.html'
    requests.style.color = '#ff7a00'
})

// redirects to new inspection page on the click of a button
const inspectPgBtn = document.querySelector('#inspectPgBtn')
console.log(inspectPgBtn)

inspectPgBtn.addEventListener('click', e => {
    window.location.href = './newInspection.html';
})

// redirects back to overview section | initial dashboard
const overview = document.querySelector('.overview')
console.log(overview)

overview.addEventListener('click', () => {
    window.location.href = 'dashboard.html'
})

// getting a menu icon to dispay a dropdown in a mobile view

let menuIcon = document.querySelector('#menuIcon')
let exitIcon = document.querySelector('.exitIcon')
console.log(menuIcon, exitIcon)

menuIcon.addEventListener('click', () => {
    const sideNavSect = document.querySelector('.sideNavSect')
    // sideNavSect.style.display = 'flex'
    sideNavSect.classList.toggle('show');
    // exitIcon.style.display = 'block' 
})

exitIcon.addEventListener('click', () => {
    console.log(exitIcon)
    const sideNavSect = document.querySelector('.sideNavSect')
    // sideNavSect.style.display = 'flex'
    sideNavSect.classList.remove('show');
})

// redirects to ongoingPg section
const ongoingPg = document.querySelector('#ongoingPg')

ongoingPg.addEventListener('click', () => {
    window.location.href = 'rovenProp.html'
})

// rotating between all requests, ongoing and completed sections

const allRequests = document.querySelector('#allRequestSpan')
const ongoing = document.querySelector('#ongoingRequestSpan')
const completed = document.querySelector('#completeRequestSpan')

const statusOngoing = document.querySelector('.ongoingDuplicate')
const statusOngoing1 = document.querySelector('.statusOngoingTd')

const statusComplete = document.querySelector('#completeDuplicate')
const statusComplete1 = document.querySelector('#statusCompleteTd')

allRequests.addEventListener('click', () =>{
    allRequests.style.backgroundColor = '#ffffff'
    ongoing.style.backgroundColor = '#eee'
    completed.style.backgroundColor = '#eee'
    
    statusOngoing1.style.display = 'inline'
    statusComplete.style.display = 'none'

    statusComplete1.style.display = 'inline'
    statusOngoing.style.display = 'none'

    // show inspectPgBtn
    inspectPgBtn.style.display = 'flex'
})

ongoing.addEventListener('click', () =>{
    ongoing.style.backgroundColor = '#ffffff'
    allRequests.style.backgroundColor = '#eee'
    completed.style.backgroundColor = '#eee'

    statusOngoing1.style.display = 'inline'
    statusComplete.style.display = 'none'

    statusOngoing.style.display = 'inline'
    statusComplete1.style.display = 'none'

    // hide inspectPgBtn
    inspectPgBtn.style.display = 'none'
})

completed.addEventListener('click', () =>{
    completed.style.backgroundColor = '#ffffff'
    ongoing.style.backgroundColor = '#eee'
    allRequests.style.backgroundColor = '#eee'

    statusOngoing1.style.display = 'none'
    statusComplete.style.display = 'inline'

    statusOngoing.style.display = 'none'
    statusComplete1.style.display = 'inline'

    // hide inspectPgBtn
    inspectPgBtn.style.display = 'none'
})