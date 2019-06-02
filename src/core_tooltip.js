let template = document.createElement('template')
template.innerHTML = ` 
<style>
    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        --background-color: #303133;
        --text-color: #fff;
        --fade-in-time: 0s;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
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

        /* Fade-in / Visibility */
        opacity: 0;
        transition: opacity 0s;
        transition-delay: var(--fade-in-time)
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
        opacity: 1;
    }

    .tooltip:focus .tooltiptext {
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

    // Place holder for tooltip style
    this.tooltip = shadowRoot.querySelector('.tooltip').style
    // Place holder for tooltip text
    this.text = shadowRoot.getElementById('tooltiptext')
  }

  /**
  * This function gets the Tooltip theme.
  * @returns {String} either "dark" or "light".
  */
  get effect () {
    return this.getAttribute('effect')
  }

  /**
  * This function sets the Tooltip theme.
  * @param {String} val - either "dark" or "light".
  */
  set effect (val) {
    this.setAttribute('effect', val)
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
    const isVisible = Boolean(val)
    if (isVisible) {
      this.setAttribute('v-model', '')
    } else {
      this.removeAttribute('v-model')
    }
  }

  /**
  * This function gets the value of the disabled attribute.
  * @returns {Boolean} whether or not Tooltip is disabled.
  */
  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
  * This function sets the value of the disabled attribute.
  * @param {Boolean} val - whether or not Tooltip is disabled.
  */
  set disabled (val) {
    const isDisabled = Boolean(val)
    if (isDisabled) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  /**
  * This function gets the value of the manual attribute.
  * @returns {Boolean} whether or not Tooltip is controlled manually.
  * mouseenter and mouseleave won't have effects if set to true.
  */
  get manual () {
    return this.hasAttribute('manual')
  }

  /**
  * This function sets the value of the manual attribute.
  * @param {Boolean} val - whether or not Tooltip is controlled manually.
  * mouseenter and mouseleave won't have effects if set to true.
  */
  set manual (val) {
    const isManual = Boolean(val)
    if (isManual) {
      this.setAttribute('manual', '')
    } else {
      this.removeAttribute('manual')
    }
  }

  /**
  * This function gets the value of the tabindex attribute.
  * @returns {Boolean} tabindex of Tooltip.
  */
  get tabindex () {
    return this.getAttribute('tabindex')
  }

  /**
  * This function sets the value of the tabindex attribute.
  * @param {Boolean} val - tabindex of Tooltip.
  */
  set tabindex (val) {
    this.setAttribute('tabindex', val)
  }

  /**
   * This function gets the value of the open-delay attribute
   * @returns {number} open delay of Tooltip in ms
   */
  get openDelay () {
    return this.getAttribute('open-delay')
  }

  /**
   * This function sets the value of the open-delay attribute
   * @param {number} val - open delay of Tooltip in ms
   */
  set openDelay (val) {
    this.setAttribute('open-delay', val)
  }

  // Sets default values for attributes.
  connectedCallback () {
    if (!this.hasAttribute('effect')) {
      this.setAttribute('effect', 'dark')
    }
    if (this.hasAttribute('manual')) {
      if (this.hasAttribute('v-model')) {
        this.text.style.setProperty('visibility', 'visible')
      } else {
        this.text.style.setProperty('visibility', 'hidden')
      }
    }
    if (this.hasAttribute('tabindex')) {
      this.addEventListener('focus', this._onHover)
      this.addEventListener('blur', this._onHover)
    }
    this.addEventListener('mouseover', this._onHover)
    this.addEventListener('mouseout', this._onHover)
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['effect', 'content', 'v-model', 'disabled', 'manual', 'open-delay']
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null
    switch (name) {
      case 'effect':
        // Set the tooltip theme
        if (newValue === 'light') {
          this.tooltip.setProperty('--background-color', '#fff')
          this.tooltip.setProperty('--text-color', '#303133')
        } else {
          this.tooltip.setProperty('--background-color', '#303133')
          this.tooltip.setProperty('--text-color', '#fff')
        }
        break
      case 'content':
        // Set the tooltip attribute
        this.text.innerHTML = newValue
        break
      case 'v-model':
        // Set visibility of tooltip
        if (hasValue) {
          this.text.style.setProperty('visibility', 'visible')
        } else {
          this.text.style.setProperty('visibility', 'hidden')
        }
      case 'open-delay':
        if (hasValue) {
          var fadeTime = this.getAttribute('open-delay') / 1000
          this.tooltip.setProperty('--fade-in-time', String(fadeTime) + "s")
        }
    }
  }

  // Update v-model with new value, hide tooltip if disabled
  _onHover (event) {
    if (this.hasAttribute('disabled')) {
      this.text.style.setProperty('visibility', 'hidden')
    } else if (!this.hasAttribute('manual') || this.hasAttribute('tabindex')) {
      if (!this.hasAttribute('v-model')) {
        this.setAttribute('v-model', '')
      } else {
        this.removeAttribute('v-model')
      }
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
