class AppController {
  static getHomepage(request, response) {
    response.status(200).type('text').send('Hello Holberton School!');
  }
}

export default AppController;
