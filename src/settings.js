const settings = {
  rest_route: "https://3ed21b63.ngrok.io/wp-json/"
};

export default settings;

export function createDangerousHTML(content) {
  return { __html: content };
}
