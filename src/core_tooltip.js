let template = document.createElement('template')
template.innerHTML = ` 
<style>
    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        --background-color: #303133;
        --text-color: #fff;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        font-size: 12px;
        text-align: center;
        word-wrap: break-word;
        line-height: 1.2;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #303133;

        /* Position the tooltip text*/
        position: absolute;
        z-index: 1;
    
        /* Position the tooltip text with arrow */
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
    }
    
    /* Tooltip arrow */
    .tooltiptext:after, .tooltiptext:before {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    
    .tooltiptext:after {
      border-color: rgba(255, 255, 255, 0);
      border-top-color: var(--background-color);
      border-width: 5px;
      margin-left: -5px;
    }
    .tooltiptext:before {
      border-color: rgba(48, 49, 51, 0);
      border-top-color: #303133;
      border-width: 6px;
      margin-left: -6px;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
<div class="tooltip">
    <slot></slot>
    <span class="tooltiptext">Text</span>
</div>
`
class CoreTooltip extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

    // Place holder for tooltip style
    this.tooltip = shadowRoot.querySelector('.tooltip').style
  }

  /**
  * This function gets the value of the effect attribute.
  * @returns {String} value of the effect attribute.
  */
  get effect () {
    return this.getAttribute('effect')
  }
  /**
  * This function sets the value of the effect attribute.
  * @param {String} val - this is a string.
  */
  set effect (val) {
    this.setAttribute('effect', val)
  }

  /**
  * This function gets the value of the placement attribute.
  * @returns {String} value of the placement attribute.
  */
  get placement () {
    return this.getAttribute('placement')
  }
  
  /**
  * This function sets the value of the placement attribute.
  * @param {String} val - this is a string.
  */
  set placement (val) {
    this.setAttribute('placement', val)
  }

  // Sets default values for attributes.
  connectedCallback () {
    if (!this.hasAttribute('effect')) {
      this.setAttribute('effect', 'dark')
    }
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['effect']
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
    switch (name) {
      case 'effect':
        if (newValue === 'light') {
          this.tooltip.setProperty('--background-color', '#fff')
          this.tooltip.setProperty('--text-color', '#303133')
        } else {
          this.tooltip.setProperty('--background-color', '#303133')
          this.tooltip.setProperty('--text-color', '#fff')
        }
        break
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
