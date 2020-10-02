document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("div#servicespage").style.display = "none";
    document.querySelector("div#homepage").style.display = "grid";
    document.querySelector("div#experincepage").style.display = "none";
    document.querySelector("div#leadershippage").style.display = "none";
    document.querySelector("div#contactuspage").style.display = "none";
    document.querySelector("div#consultantspage").style.display = "none";

    document.querySelector("div#nav").addEventListener("click", function (e) {
        if (e.target && e.target.nodeName.toLowerCase() == "h3") {
            if (e.toElement.innerText === "Services") {
                document.querySelector("div#servicespage").style.display = "grid";
                document.querySelector("div#homepage").style.display = "none";
                document.querySelector("div#experincepage").style.display = "none";
                document.querySelector("div#leadershippage").style.display = "none";
                document.querySelector("div#contactuspage").style.display = "none";
                document.querySelector("div#consultantspage").style.display = "none";
            }
            else if (e.toElement.innerText === "Experience") {
                document.querySelector("#servicespage").style.display = "none";
                document.querySelector("#homepage").style.display = "none";
                document.querySelector("#experincepage").style.display = "grid";
                document.querySelector("#leadershippage").style.display = "none";
                document.querySelector("#contactuspage").style.display = "none";
                document.querySelector("#consultantspage").style.display = "none";
            }
            else if (e.toElement.innerText === "Our Leadership") {
                document.querySelector("#servicespage").style.display = "none";
                document.querySelector("#homepage").style.display = "none";
                document.querySelector("#experincepage").style.display = "none";
                document.querySelector("#leadershippage").style.display = "grid";
                document.querySelector("#contactuspage").style.display = "none";
                document.querySelector("#consultantspage").style.display = "none";
            }
            else if (e.toElement.innerText === "Our Team") {
                document.querySelector("#servicespage").style.display = "none";
                document.querySelector("#homepage").style.display = "none";
                document.querySelector("#experincepage").style.display = "none";
                document.querySelector("#leadershippage").style.display = "none";
                document.querySelector("#contactuspage").style.display = "none";
                document.querySelector("#consultantspage").style.display = "grid";
            }
            else if (e.toElement.innerText === "Contact Us") {
                document.querySelector("#servicespage").style.display = "none";
                document.querySelector("#homepage").style.display = "none";
                document.querySelector("#experincepage").style.display = "none";
                document.querySelector("#leadershippage").style.display = "none";
                document.querySelector("#contactuspage").style.display = "grid";
                document.querySelector("#consultantspage").style.display = "none";
            }
        }
    });
    document.querySelector("h1#headerlink").addEventListener("click", function (e) {
        document.querySelector("div#servicespage").style.display = "none";
        document.querySelector("div#homepage").style.display = "grid";
        document.querySelector("div#experincepage").style.display = "none";
        document.querySelector("div#leadershippage").style.display = "none";
        document.querySelector("div#contactuspage").style.display = "none";
        document.querySelector("div#consultantspage").style.display = "none";
    });
    document.querySelector("h2#backtotop").addEventListener("click", function (e) {
        document.querySelector("div#servicespage").style.display = "none";
        document.querySelector("div#homepage").style.display = "grid";
        document.querySelector("div#experincepage").style.display = "none";
        document.querySelector("div#leadershippage").style.display = "none";
        document.querySelector("div#contactuspage").style.display = "none";
        document.querySelector("div#consultantspage").style.display = "none";
        document.documentElement.scrollTop = 0;
    });
});