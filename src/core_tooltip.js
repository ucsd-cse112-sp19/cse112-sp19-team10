let template = document.createElement('template')
template.innerHTML = ` 
    <style>
    </style>
`
class CoreTooltip extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  // Sets default values for attributes.
  connectedCallback () {
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return []
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
