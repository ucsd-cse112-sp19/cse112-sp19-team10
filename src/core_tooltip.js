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
      // word-wrap: break-word;
      line-height: 1.2;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #303133;

      white-space:nowrap;
      max-width:none;

      /* Position the tooltip text*/
      position: absolute;
      z-index: 1;
    }
    
    /* Tooltip arrow */
    .tooltiptext::after, .tooltiptext::before {
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    .tooltiptext::after {
      border-color: transparent;
      border-width: 5px;
    }
    .tooltiptext::before {
      border-color: transparent;
      border-width: 6px;
    }

    /* Top tooltip */
    .tooltip .tooltiptext.top {
      // width: 120px;
      // width: auto;
      bottom: 80%;
      // left: -75%; 
      // margin-left: -50%;
    }
    .tooltiptext.top::after, .tooltiptext.top::before {
      top: 100%;
      left: 50%;
    }
    .tooltiptext.top::after {
      border-top-color: var(--background-color);
      margin-left: -5px;
    }
    .tooltiptext.top::before {
      border-top-color: #303133;
      margin-left: -6px;
    }
    
    /* Bottom tooltip */
    .tooltip .tooltiptext.bottom {
      // width: 120px;
      top: 100%;
      // left: -125%;
      // margin-left: -100%; 
    }
    .tooltiptext.bottom::after, .tooltiptext.bottom::before {
      bottom: 100%;
      left: 50%;
    }
    .tooltiptext.bottom::after {
      border-bottom-color: var(--background-color);
      margin-left: -5px;
    }
    .tooltiptext.bottom::before {
      border-bottom-color: #303133;
      margin-left: -6px;
    }

    /* Left tooltip */
    .tooltip .tooltiptext.left {
      top: 10%;
      right: 130%; 
    }
    .tooltiptext.left::after, .tooltiptext.left::before {
      left: 100%;
      top: 50%;
    }
    .tooltiptext.left::after {
      border-left-color: var(--background-color);
      margin-top: -5px;
    }
    .tooltiptext.left::before {
      border-left-color: #303133;
      margin-top: -6px;
    }

    /* Right tooltip */
    .tooltip .tooltiptext.right {
      top: 10%;
      left: 130%; 
    }
    .tooltiptext.right::after, .tooltiptext.right::before {
      right: 100%;
      top: 50%;
    }
    .tooltiptext.right::after {
      border-right-color: var(--background-color);
      margin-top: -5px;
    }
    .tooltiptext.right::before {
      border-right-color: #303133;
      margin-top: -6px;
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

  // Sets default values for attributes.
  connectedCallback () {
    if (!this.hasAttribute('effect')) {
      this.setAttribute('effect', 'dark')
    }
    if (!this.hasAttribute('placement')) {
      this.setAttribute('placement', 'bottom')
    }
    if (this.hasAttribute('manual')) {
      if (this.hasAttribute('v-model')) {
        this.text.style.setProperty('visibility', 'visible')
      } else {
        this.text.style.setProperty('visibility', 'hidden')
      }
    }
    this.addEventListener('mouseover', this._onHover)
    this.addEventListener('mouseout', this._onHover)
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['effect', 'content', 'placement', 'v-model', 'disabled', 'manual']
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
      case 'placement':
        if (newValue === oldValue) {
          break
        }

        if (oldValue === 'top' || oldValue === 'top-start' || oldValue === 'top-end') {
          this.text.classList.remove('top')
        } else if (oldValue === 'bottom' || oldValue === 'bottom-start' || oldValue === 'bottom-end') {
          this.text.classList.remove('bottom')
        } else if (oldValue === 'left' || oldValue === 'left-start' || oldValue === 'left-end') {
          this.text.classList.remove('left')
        } else if (oldValue === 'right' || oldValue === 'right-start' || oldValue === 'right-end') {
          this.text.classList.remove('left')
        }
        
        if (newValue === 'top') {
          this.text.classList.add('top')
        // } else if (newValue === 'top-start') {

        // } else if (newValue === 'top-end') {

        } else if (newValue === 'bottom') {
          this.text.classList.add('bottom')
        // } else if (newValue === 'bottom-start') {

        // } else if (newValue === 'bottom-end') {

        } else if (newValue === 'left') {
          this.text.classList.add('left')
        // } else if (newValue === 'left-start') {

        // } else if (newValue === 'left-end') {

        } else if (newValue === 'right') {
          this.text.classList.add('right')
        // } else if (newValue === 'right-start') {

        // } else if (newValue === 'right-end') {

        }
        break
      case 'v-model':
        // Show/hide tooltip manually
        if (this.hasAttribute('manual')) {
          if (hasValue) {
            this.text.style.setProperty('visibility', 'visible')
          } else {
            this.text.style.setProperty('visibility', 'hidden')
          }
        }
        break
    }
  }

  // Update v-model with new value, hide tooltip if disabled
  _onHover (event) {
    if (this.hasAttribute('disabled')) {
      this.text.style.setProperty('visibility', 'hidden')
    } else if (!this.hasAttribute('manual')) {
      if (!this.hasAttribute('v-model')) {
        this.setAttribute('v-model', '')
      } else {
        this.removeAttribute('v-model')
      }
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
