$(document).ready(function(){
    $("#screen").load("home.html")

    $(document).on("click", 'a', function(event) { 
        let href = event.target.pathname
        console.log(href)
        
        $("#screen").load(`${href.substr(1)}.html`)
        window.history.replaceState({}, "", href)
        event.preventDefault()
    });
});