let template = document.createElement('template')
template.innerHTML = ` 
<style>
    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        background-color: #303133;
        color: #fff;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        font-size: 12px;
        text-align: center;
        word-wrap: break-word;
        line-height: 1.2;
        padding: 10px;
        border-radius: 4px;

        /* Position the tooltip text*/
        position: absolute;
        z-index: 1;
    
        /* Position the tooltip text with arrow */
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
    }
    
    /* Tooltip arrow */
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #303133 transparent transparent transparent;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
<div class="tooltip">
    <slot></slot>
    <span class="tooltiptext" id="tooltiptext"></span>
</div>
`
class CoreTooltip extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

    // Place holder for tooltip text
    this.text = shadowRoot.getElementById('tooltiptext')
    // Place holder for tooltip
    this.tooltip = shadowRoot.querySelector('.tooltip')
    this.toolhover = shadowRoot.querySelector('.tooltip:hover')
  }

  /**
  * This function gets the value of the content attribute.
  * @returns {String} value of the content attribute.
  */
  get content () {
    return this.getAttribute('content')
  }

  /**
  * This function sets the value of the content attribute.
  * @param {String} val - this is a String.
  */
  set content (val) {
    this.setAttribute('content', val)
  }

  /**
  * This function gets the value of the v-model attribute.
  * @returns {Boolean} visibility of Tooltip.
  */
  get vModel () {
    return this.hasAttribute('v-model')
  }

  /**
  * This function sets the value of the v-model attribute.
  * @param {Boolean} val - visibility of Tooltip.
  */
  set vModel (val) {
    if (val) {
      this.setAttribute('v-model', '')
    } else {
      this.removeAttribute('v-model')
    }
  }

  // Sets default values for attributes.
  connectedCallback () {
    this.addEventListener('mouseover', this._onHover)
    this.addEventListener('mouseout', this._onHover)
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['content', 'v-model']
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
    switch (name) {
      case 'content':
        // Set the tooltip attribute
        this.text.innerHTML = newValue
        break
    }
  }

  // Update v-model with new value
  _onHover (event) {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', '')
    } else {
      this.removeAttribute('v-model')
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
