import { html, css, LitElement, TemplateResult } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("other-greeting")
export class SimpleGreeting extends LitElement {
    static styles = css`
        p {
            color: red;
        }
    `

    @property()
    name = "Somebody"

    render(): TemplateResult {
        return html`<p>Hello, ${this.name}!</p>`
    }
}
