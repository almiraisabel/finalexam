// JavaScript Document
//TRY NOT TO FAIL ATTEMPT 2


// Document Ready Event - This executes when the HTML page is loaded and ready.
			$(function () {
				// Set up event handlers for the form.
				// The .submit function fires when you click on the search button or press enter.
				$("#recipeSearch").submit(function (e) {
					// AJAX call so let's not make the form submit in real.
					// Let's prevent the default event of form submission.
					e.preventDefault();
					// Let's get the value of the text box.
					var q = $("#query").val();
					if (q.length < 3) {
						// Show an error message.
						$("#error").text("Please enter at least 3 characters.");
						// Come out of the function. Don't proceed.
						return false;
					}
					// Clear the error message.
					$("#error").text("");
					// Fire an AJAX call. Since it's a JSON response, I am going to use $.getJSON.
					$.getJSON("https://api.edamam.com/search?app_id=62496ff9&app_key=8b4cbe9c9f2dff6f01ddf4fb13c2fbdb&q=" + q, function (res) {
						// Show the user some good info like how many results have been returned.
						$("#searchOutput").html("You searched for <strong>" + res.q + "</strong> and it fetched <strong>" + res.count + "</strong> results. Showing you the first " + res.hits.length + " results.");
						// Loop through the results and show the user stuff.
						$.each(res.hits, function (index, recipe) {
							// For every recipe, it has some stuff we can show.
							let curRecipe = recipe.recipe;
							// Let's clone the master.
							$(".master").clone()
								// Get rid of the .master class.
								.removeClass("master")
								// Change the content like image, title, link, etc.
								// Update the image source.
								.find(".thumb img").attr("src", curRecipe.image).end()
								// Update the links.
								.find("a").attr("href", curRecipe.shareAs).end()
								// Update the title.
								.find("h3 a").text(curRecipe.label).end()
								// Update the meta - ingredients.
								.find(".meta li:nth-child(1) strong").text(curRecipe.ingredients.length).end()
								// Update the meta - calories. Round off using toFixed.
								.find(".meta li:nth-child(2) strong").text(curRecipe.calories.toFixed(2)).end()
								// Add ingredients.
								.find(".ingredients").html(function () {
									return curRecipe.ingredients.slice(0, 4).map(ing => ing.text).join(", ");
								}).end()
								// Update the source.
								.find(".source a").attr("href", curRecipe.url).text(curRecipe.source).end()
								// Append to the page.
								.appendTo("#recipes");
						});
					});
				});
			});