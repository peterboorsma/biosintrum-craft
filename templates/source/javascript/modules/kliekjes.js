    // Remove full stop (dots) in localized dates
    replaceDots()

    function replaceDots() {
        let elements = document.getElementsByClassName("date");
        //console.log("element count", elements.length)
        for (let i = 0; i < elements.length; i++) {
            let html = elements[i].innerHTML
            //console.log("original html", html)
            let newHtml = html.replace(/\./g, '');
            //console.log("new html", newHtml)
            elements[i].innerHTML = newHtml;
        }
    }