class Route {
  static getRouteWithHash(url) {
    return new URL(url);
  }

  static getRouteWithoutHash(url) {
    return new URL(url.split('/#').join(''));
  }
}

export default Route;
