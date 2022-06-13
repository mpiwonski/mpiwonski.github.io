lpTag.identities.push(identityFn);

function identityFn(callback) {
  callback({
    iss: "https://jwt.io",
    exp: 2034971930,
    iat: 1471899942,
    acr: "loa1",
    sub: "1234567890",
  });
}

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiaHR0cHM6Ly9qd3QuaW8iLCJleHAiOjIwMzQ5NzE5MzAsImlhdCI6MTQ3MTg5OTk0MiwiYWNyIjoibG9hMSJ9.I0vVc-xmSYuEdfiv29CjsXKACLZuNvQutrC9o6YyI6zHNU2VBPlWYvjE44YC92iUwReF5NVu-etnhRCdHVWsBFNRLtTxLOM64zP-RZB3jBvFAZJQOh4-9X3AKTHUrc6qg6E6SYhllOkpwy4ZNunbb8HSi0gbL2utzbzNkPGqUrzo-0LdqTstEVWg7_MWhbV3FIcpXLoOEOfGSUkEuBxHXzc4NCCpOhiXamG29DikOzImCczxjDGIbIWfGV0_RsqmPYFctdj_s1NzUo6CjlhHPqTQsW0ZxlRWPJ6ixpUCkv6AQpcD2A3OQmJ3AqFOasCKyBagXAurYjRvF2sP_jG2HA";

function lpGetAuthenticationToken(callback) {
  console.log("Sending a token...");
  callback(token);
}
