/*
This is the URL that contains the JSON data. You may wish to copy and paste this URL into your
browser so you can examine the structure of the JSON response.

Note: Each user object contains NESTED data - look at the `address` and `company` properties!
*/
const url = "https://jsonplaceholder.typicode.com/users";

// Called on page load
const loadData = async () => {
  // TODO: Use fetch() to load JSON data from the URL above.
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    renderData(data);
  }catch(error) {
    console.error(error);
  }
  // You'll need to:
  // - Fetch data from the API
  // - Convert the response into JSON
  // - Pass the resulting array to renderData()

  // Note: You may write this using either `.then()` or `async/await` style.
  // If you choose async/await, you may need to adjust the function definition.

  // FALLBACK: For partial credit, you may use XMLHttpRequest (XHR) or the older AJAX method
}

function renderData(items) {
  const resultsDiv = document.getElementById("results");
  let columnHtml = "";

  // TODO: Loop through the `items` array (each item is a user object)
  for (let item of items) {
    columnHtml += `<div class="column is-4">
     <div class="card">
       <div class="card-content">
         <p><strong>${item.username}</strong></p>
         <p>${item.email}</p>
         <p>City: ${item.address.city}</p>
         <p><em>Company: ${item.company.name}</em></p>
       </div>
     </div>
   </div>`
  }
  console.log(columnHtml);
  // For each user, create a Bulma card showing:
  //   - User's name (bold)
  //   - User's email
  //   - User's city with "City:" label (hint: city is nested inside address!)
  //   - User's company name with "Company:" label (hint: also nested!)
  //
  // Use this Bulma layout structure (you may need to read the Bulma documentation!)
  //
  // <div class="column is-4">
  //   <div class="card">
  //     <div class="card-content">
  //       <p><strong>[User Name]</strong></p>
  //       <p>[User Email]</p>
  //       <p>City: [City]</p>
  //       <p><em>Company: [Company Name]</em></p>
  //     </div>
  //   </div>
  // </div>
  //
  // You can build this using DOM methods (e.g., createElement/appendChild)
  // OR by assembling an HTML string and setting it with innerHTML. (probably easier)
  //
  // If using innerHTML, be sure to use **template strings** (backtick syntax)
  // for full credit!
  //
  // Then append each result to `resultsDiv`.
  resultsDiv.innerHTML = columnHtml;
}


loadData();
