import { customElement, html, LitElement } from "lit-element";
import { TemplateResult } from "lit-html";
import "../divider";
import { sharedStyles } from "../style/shared";
import { cssResult } from "../util/css";

import styles from "./banner-element.scss";

export interface IBannerElementProperties {

}

@customElement("banner-element")
export class BannerElement extends LitElement implements IBannerElementProperties {

	static styles = [cssResult(styles), sharedStyles];

	protected render (): TemplateResult {
		return html`
			<div id="content">
				<slot name="icon"></slot>
				<slot name="text"></slot>
			</div>
			<div id="actions">
				<slot name="action"></slot>
			</div>
			<divider-element id="divider"></divider-element>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"banner-element": BannerElement;
	}
}