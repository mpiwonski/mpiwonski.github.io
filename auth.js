lpTag.identities.push(identityFn);

function identityFn(callback) {
  callback({
    sub: "+972-3-5555-555",
    iss: "https://jwt.io",
    aud: "acc:qa57221676",
    exp: 1534971930,
    iat: 1471899942,
    given_name: "Eitan",
    acr: "loa1",
  });
}

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIrOTcyLTMtNTU1NS01NTUiLCJpc3MiOiJodHRwczovL2p3dC5pbyIsImF1ZCI6ImFjYzpxYTU3MjIxNjc2IiwiZXhwIjoxNTM0OTcxOTMwLCJpYXQiOjE0NzE4OTk5NDIsImdpdmVuX25hbWUiOiJFaXRhbiIsImFjciI6ImxvYTEifQ.NI9_je6Bm2kC75Qx8Bt1jHQh1x_w1lzgddI2pMynKG8lhEZOykIlmRFnc75yVKlaTD9NIY_MCZBDgvtcDzq0N7phYmFug08mwCHMIlYvYt1KkhZv1Zimx0IyhDpPytxix1S4GxmVtUnb7SX2bpDhKa_oKS_6rNcMBH0bEuwnSHowVcxXoUYbdgqeOA66DRJqT45bwgo332xCNmUBYG4DONSe5opKhsb-7sKMFVJ4H4WZ7Zdd5bEjcr5UKC6nxoy0rLuup_JVH9DgAzs30uBkf56m89-8ABp9frNcOj15bZSD0n4zyPrdQAL-KHq_Zew96uVhEx-PLxeoUjAYuD67zA";

function lpGetAuthenticationToken(callback) {
  callback(token);
}
