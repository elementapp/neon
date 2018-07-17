/**
* @flow
*/

const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export type Method = $Values<typeof METHODS>;

const HEADERS = {
  [METHODS.GET]: {
    'Accept': 'application/json',
  },
  [METHODS.POST]: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

export function apiFetch(uri: string, method: Method, body: ?{}): Promise<{}> {
  const options = {
    method,
    headers: HEADERS[method],
    ...body,
  };

  return fetch(uri, options).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(json => Promise.reject(json));
    }
  }).catch(error =>
    Promise.reject({fetchError: error}),
  );
}
