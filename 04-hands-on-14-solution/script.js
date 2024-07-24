const dataUrl =  "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json"


async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
}

function renderList(userData) {
    let outputString = "";
    for (let user of userData.users) {
        outputString = outputString +  `
             <div class="card mt-3" style="width: 30rem">
                <div class="card-body">
                  <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                   <ul>
                    <li>Mobile: ${user.phoneNumber}</li>
                    <li>Email: ${user.emailAddress}</li>
                   </ul>
                </div>
              </div>
        `
    }
    document.querySelector("#output").innerHTML = outputString;

}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", async function(){
    const userData = await loadData(dataUrl);
    console.log(userData);
    renderList(userData);
})