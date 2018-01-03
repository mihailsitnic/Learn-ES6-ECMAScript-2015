'use strict';

function ajax({
  type = 'get',
  url = requiredParameter('url'),
  data = {},
  success = requiredParameter('success'),
  error = () => {},
  isAsinc = true
} = {}) {
  console.log(JSON.stringify({type, url, data, success, error, isAsinc}, null, 2));
}

function requiredParameter(name) {
  throw new Error(`Missing parameter '${name}'`);
}

try {
  ajax({
    url: 'http://my.api.io',
    success: () => {}
  });
} catch(e) { console.warn(e.message) }
