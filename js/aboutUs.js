window.addEventListener("load", function() {
    let hideButton = document.getElementById('hidePhotos')
    let collage = document.getElementById('teamPhotos')
    let mheal = document.getElementById('MhealLogo')
    let learnMore = document.getElementById('mheal')
    let instagram = document.getElementById('instagram')
    let gmail = document.getElementById('gmail')
    let website = document.getElementById('website')
    let donateButton = document.getElementById('donateButton')
    
    hideButton.addEventListener("click", function() {
        console.log("clicked");
        if (hideButton.innerHTML == "Hide Photos") {
            collage.style.display = "none";
            hideButton.innerHTML = "Show Photos";
        } else {
            collage.style.display = "grid";
            hideButton.innerHTML = "Hide Photos"
        }
    })

    mheal.addEventListener("click", function() {
        window.open("http://mheal.engin.umich.edu/", "_blank")
    })

    learnMore.addEventListener("click", function() {
        window.open("http://mheal.engin.umich.edu/", "_blank")
    })

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
