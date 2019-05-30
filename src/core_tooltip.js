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
  }

  /**
  * This function gets the value of the contecnt attribute.
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

  // Sets default values for attributes.
  connectedCallback () {
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['content']
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
    switch(name) {
      case 'content':
        // Set the tooltip attribute
        this.text.innerHTML = newValue
        break
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
