const settings = {
  rest_route: "https://dev-advanced-gutenberg-course.pantheonsite.io/wp-json/",
  // rest_route: "https://651c601a.ngrok.io/wp-json/",
  token: "wp-auth-token"
};

export default settings;

export function createDangerousHTML(content) {
  return { __html: content };
}
