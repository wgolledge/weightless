import { customElement, html, LitElement, property, TemplateResult } from "lit-element";
import { sharedStyles } from "../style/shared";
import { AriaRole } from "../util/aria";
import { cssResult } from "../util/css";

import styles from "./divider.scss";

/**
 * Properties of the divider.
 */
export interface IDividerProperties {
}

/**
 * Thin line that groups content in lists and layouts.
 * @cssprop --divider-color - Color.
 * @cssprop --divider-height - Height.
 */
@customElement("wl-divider")
export class Divider extends LitElement implements IDividerProperties {
	static styles = [cssResult(styles), sharedStyles];

	/**
	 * Role of the backdrop.
	 * @attr
	 */
	@property({type: String, reflect: true}) role: AriaRole = "separator";

	/**
	 * Returns the template of the element.
	 */
	protected render (): TemplateResult {
		return html`
			<slot></slot>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"wl-divider": Divider;
	}
}
