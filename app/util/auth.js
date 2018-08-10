function fetchAccessToken(username, password) {
  console.log(
    'fetchAccessToken[url,clientid,secret]:' +
      Expo.Constants.manifest.extra.AUTH_OAUTH2_URL
  );
}

export { fetchAccessToken };
