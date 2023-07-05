function search(){

    // Retrieve the value of the search input field and convert it to uppercase
    const searchbox = document.getElementById("search").value.toUpperCase();

    // Retrieve the element that contains the list of items to be searched
    const storeItem = document.getElementById("itemlist");

    // Retrieve the first item element (this line seems unnecessary)
    const product = document.querySelector("item");

    // Retrieve all item elements
    const product2 = document.getElementsByClassName('item')

    // Retrieve all h2 elements that are children of the itemlist element
    const productname =storeItem.getElementsByTagName("h2");

    // Loop through each item in the list
    for(var i=0; i < productname.length; i++){
       
        // Retrieve the first h2 element that is a child of the current item in the loop
        match  = product2[i].getElementsByTagName('h2')[0];

        // Check if an h2 element was found for the current item
        if(match){

            // Retrieve the text content of the h2 element
            let textvalue = match.textContent || match.innerHtml

            // Check if the search term appears in the text content of the h2 element
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){

                // Display the current item if the search term was found
                product2[i].style.display=""

            } else{

                // Hide the current item if the search term was not found
                product2[i].style.display="none"
            }
        }

    }
}
