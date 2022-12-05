window.addEventListener("load", function() {
    let kneeButton = document.getElementById('kneeButton');
    let footButton = document.getElementById('footButton');
    let socketButton = document.getElementById('socketButton');
    let legButton = document.getElementById('legButton');
    let instagram = document.getElementById('instagram')
    let gmail = document.getElementById('gmail')
    let website = document.getElementById('website')
    let donateButton = document.getElementById('donateButton')
    
    kneeButton.addEventListener("click", function() {
        let page = document.getElementById('knee');
        hideOrShow(page, kneeButton, "The Knee")
    })
    
    footButton.addEventListener("click", function() {
        let page = document.getElementById('foot');
        hideOrShow(page, footButton, "The Foot")
    })
    
    socketButton.addEventListener("click", function() {
        let page = document.getElementById('socket');
        hideOrShow(page, socketButton, "The Socket")
    })
    
    legButton.addEventListener("click", function() {
        let page = document.getElementById('leg');
        hideOrShow(page, legButton, "The Leg")
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

    function hideOrShow(page, clickedButton, title) {
        if (page.style.height == "0px") {
            page.style.height = "auto"
            page.style.visibility = "visible"
            clickedButton.innerHTML = title + " &#x25B6";
        } else {
            page.style.height = "0px"
            page.style.visibility = "hidden"
            clickedButton.innerHTML = title + " &#x25BC";
        }
    }
})
