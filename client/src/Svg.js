const endpoint = 'https://trial-api-text-to-svg-2q2s.gw.openapihub.com/text-to-svg/svg';

const axios = require('axios')
const apikey = '13fe225240204d36850a2a764108d620'

const data = () => {
    return {
        text: '',
        font_size: 72,
        apikey: '',
        result: '',
        error: ''
    }
}


const axiosConfig = {
    headers: {
        'content-type': 'application/json',
        'x-openapihub-key': apikey
    }
}

const requestBody = {
    text: this.text,
    x: 0,
    y: 64,
    fontSize: this.font_size,
    kerning: true,
    letterSpacing: 0,
    tracking: 0,
    anchor: 'left baseline',
    attributes: {
        fill: "black",
        stroke: "grey"
    }
}

axios.post(endpoint, requestBody, axiosConfig)
    .then(res => {
        this.error = ''
        this.result = unescape(res.data)
    }).catch(err => {
        this.error = `Error occurred -<br>${err.response.data.message}`
        console.log('Error', err.response.data.message)
    })
