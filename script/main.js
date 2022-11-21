//////////////// LOADING BAR BEFORE FETCHING DATA /////////////
$(function() {
    $(".preload").fadeOut(2000,function() {
        $(".content").fadeIn(1000);        
    });
});
////////////////  END  ///////////////


// 1. GET request using fetch()
fetch("https://random-data-api.com/api/users/random_user?size=100")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a variable to store HTML table headers
    let li = `
    <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Gender</th>
          <th>City</th>
          <th>Subscription Status</th>
        </tr>
    </thead>
    `;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `
      <tr>
                        <td>
                        ${user.username} 
                        </td>
                        <td>
                        ${user.email}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        ${user.gender}
                        </td>
                        <td>
                        ${user.address.city}
                        </td>
                        <td>
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> 
                        ${user.subscription.status}
                        </span>
                        </td>
        </tr>
        `;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });

// 5. POST request using fetch()
var responseClone; // 1
fetch('https://random-data-api.com/api/users/random_user?size=100')
.then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
})
.then(function (data) {
    // Do something with data
}, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
});


