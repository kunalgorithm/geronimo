const { withUiHook, htm } = require("@zeit/integration-utils");

let count = 0;

module.exports = withUiHook(({ payload }) => {
  count += 1;
  return htm`
		<Page>
		<P>Welcome to geronimo</P>
		<P>You've clicked ${count} times.</P>
			<Button>Click Me</Button>
		</Page>
	`;
});
