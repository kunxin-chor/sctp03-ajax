async function loadData() {
    const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";
    const response = await axios.get(url);
    console.log(response.data);

    // output the data
    const outputElement = document.querySelector("#output");
    outputElement.innerHTML = `<ul>
            <li>Name: ${response.data.Name}</li>  
            <li>Mobile Number: ${response.data.Mobile}</li>
            <li>Current Address: ${response.data.Address['current Address']}</li>
            <li>Permanent Address: ${response.data.Address["Permanent address"]}</li>
        </ul>`;

}
loadData();