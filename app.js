const searchBook = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    // console.log(searchText);
    searchfield.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    // Display Total search result:
    const match = docs.length;
    const totalMatch = document.getElementById('total-match')
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>Total Desired Books Found: ${match}</h3>
    `;
    totalMatch.appendChild(div);

    // console.log(docs);
    // Get Book details
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = "";
    if (docs.length === 0) {
        alert("No book found");
        return;
    }
    else {
        docs.forEach(book => {
            // console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
                        <div class="card-body">
                            <p class="card-title">Book Name: <span class="text-primary">${book.title}</span></p>
                            <p class="card-title">Author(s) Name: <span class="text-success">${book.author_name}</span></p>
                            <p class="card-title">First Published Year: <span class="text-danger">${book.first_publish_year}</span></p>
                        </div >
                    </div >
        `;
            searchResult.appendChild(div);

        });
    }
}