import "../snackbar";
import "../button";
import "../icon";
import { assignedNodesMap, createContainer, removeContainer, waitForElement } from "../../test/testing-helpers";
import { WlSnackbar } from "./wl-snackbar";

describe("wl-snackbar", () => {
	const {expect} = chai;
	let $snackbar: WlSnackbar;
	let $container: HTMLElement;

	before(() => {
		$container = createContainer();
	});
	beforeEach(async () => {
		$container.innerHTML = `
			<wl-snackbar>
			  <wl-icon slot="icon">account_box</wl-icon>
			  <span slot="text">Your password was updated on your other device. Please sign in again.</span>
			  <wl-button slot="action" flat inverted>Continue as guest</wl-button>
			  <wl-button slot="action" flat inverted>Sign in</wl-button>
			</wl-snackbar>`;

		await waitForElement("wl-snackbar");
		$snackbar = $container.querySelector<WlSnackbar>("wl-snackbar")!;
	});
	after(() => removeContainer($container));

	it("should render the slots", async () => {
		const assignedNodes = assignedNodesMap($snackbar.shadowRoot!);

		expect(assignedNodes["icon"].length).to.be.above(0);
		expect(assignedNodes["text"].length).to.be.above(0);
		expect(assignedNodes["action"].length).to.be.above(0);
	});

	it("should have a banner role", () => {
		expect($snackbar.getAttribute("role")).to.equal("banner");
	});
});
