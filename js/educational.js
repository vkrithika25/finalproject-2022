window.addEventListener("load", function() {
    let instagram = document.getElementById('instagram')
    let gmail = document.getElementById('gmail')
    let website = document.getElementById('website')
    let donateButton = document.getElementById('donateButton')

    instagram.addEventListener("click", function() {
        window.open("https://instagram.com/teamdrip_mheal/?igshid=N2ZiY2E3YmU=", "_blank")
    })

    gmail.addEventListener("click", function() {
        window.open("https://krithiv@umich.edu", "_blank")
    })

    website.addEventListener("click", function() {
        window.open("http://mheal.engin.umich.edu/", "_blank")
    })

    donateButton.addEventListener("click", function() {
        window.open("https://www.giving.umich.edu/give/932001", "_blank")
    })
})
