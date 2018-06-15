const BOOK_ENTRY_URL = "https://tastedive.com/api/similar?"

function getDataFromApi(searchTerm, callback) {
	const query = {
		q: `${searchTerm}`,
		type: "books",
		info: 1,
		limit: 20,
		k: "310938-Coffeean-LGCO6BCH",

   }
	$.getJSON(BOOK_ENTRY_URL, query, callback)
}

// I'm using JSON in this example, since I don't believe I need to use JSONP specifically (I might be incorrect about that)

function renderResult(result) {
	console.log(results);
}

function displayBookRecommendation(data) {
	const results = data.results.map((item, index) => renderResult(item));
}

function watchSubmit() {
	$('.tasteEntry').submit(event => {
		event.preventDefault();
		const queryTarget = $(event.currentTarget).find('.favorite');
		const query = queryTarget.val();
		console.log(query)
		queryTarget.val("");
		getDataFromApi(query, displayBookRecommendation);
	})
}

$(watchSubmit);