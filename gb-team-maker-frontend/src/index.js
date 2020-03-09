const BACKEND_URL = 'localhost:3000'

fetch(`${BACKEND_URL}/test`)
    .then(resp => resp.json())
    .then(parseResp => console.log(parseResp))