export const support = (name, email, message) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2dAcHJwd2Vicy5jb206anByQEZFQjE5");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": name,
    "email": email,
    "message": message
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch("https://prpwebs.com/wp-json/store_locator/v1/support", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


export const AddStore = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2dAcHJwd2Vicy5jb206anByQEZFQjE5");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": "My test",
    "email": "draft",
    "message": "message"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://prpwebs.com/wp-json/store_locator/v1/support", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}