const ApiUtils = {
  checkStatus: (res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      return Promise.reject(res.json())
    }
  },
  checkStatusWithData: (data) => (res) => {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res.json().then((r) => ({
        ...r,
        data
      })))
    } else {
      return Promise.reject(res.json())
    }
  }
}

const WebAPIUtil = {

  GET: () => fetch({
      uri: 'GET-URI',
      qs: {
        param: 'value' // -> uri + '?param=value'
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // POST failed...
    }),

  POST: () => fetch({
      method: 'POST',
      uri: "POST-URI",
      body: {
        some: 'payload'
      },
      json: true // Automatically stringifies the body to JSON
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // POST failed...
    }),

  FORM: () => fetch({
      method: 'POST',
      uri: 'POST-URI',
      form: {
        some: 'payload' // Will be urlencoded
      },
      headers: {
        /* 'content-type': 'application/x-www-form-urlencoded' */ // Set automatically
      }
    })
    .then(function (body) {
      // POST succeeded...
    })
    .catch(function (err) {
      // POST failed...
    }),

  FULLRESPONSE: () => fetch({
      method: 'PUT',
      uri: 'URI',
      resolveWithFullResponse: true
    })
    .then(function (body) {
      // POST succeeded...
    })
    .catch(function (err) {
      // POST failed...
    }),
};

export default WebAPIUtil;
