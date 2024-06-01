const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

export class TokenStorage {
  static defineTokens(accessToken, refreshToken) {
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
  static logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);
  }

  static get Accesstoken() {
    return sessionStorage.getItem(ACCESS_TOKEN);
  }
  static get Refreshtoken() {
    return sessionStorage.getItem(REFRESH_TOKEN);
  }
}
