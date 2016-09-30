export class Client {
  constructor() {
    this.url = "http://localhost:8080/";
    this.getUrl = this.url + "todo/";
  }

  // ask server to make sure the todo save file exists
  init() {
    var request = new XMLHttpRequest();
    request.open("PUT", getUrl, true);
    request.send();
  }

  write(json) {

  }
}