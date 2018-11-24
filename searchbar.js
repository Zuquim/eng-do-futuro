function searchCards() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    ul = document.getElementById("cards");
    li = ul.getElementsByClassName('portfolio-card');

    // Loop through all list items, and hide those who don't match the search query
    b = li.length;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("titulo")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById('aux').innerHTML = ""
        } else {
            li[i].style.display = "none";
            b = b - 1;
        }
    }
    if (b == 0) {
        document.getElementById('aux').innerHTML = "Nenhum resultado encontrado."
    }
}