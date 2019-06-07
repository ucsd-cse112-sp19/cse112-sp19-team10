let tooltipTemplate = document.createElement('template')
tooltipTemplate.innerHTML = ` 
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
      min-width: 10px;
      word-wrap: break-word;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #303133;
      white-space: nowrap;
      max-width: none;

      /* Position the tooltip text*/
      position: absolute;
      z-index: 1;

      /* Fade-in / Visibility */
      opacity: 0;
      transition: opacity 0s;
      transition-delay: var(--fade-in-time)
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
      border-width: 6px;
    }
    .tooltiptext::before {
      border-width: 7px;
    }

    /* Top Tooltip */
    .tooltip .tooltiptext.top {
      bottom: 140%;
      left: 50%;
      transform: translateX(-50%);
    }
    .tooltiptext.top::after, .tooltiptext.top::before {
      top: 100%;
      left: 50%;
    }
    .tooltiptext.top::after {
      border-top-color: var(--background-color);
      margin-left: -6px;
    }
    .tooltiptext.top::before {
      border-top-color: #303133;
      margin-left: -7px;
    }

    /* Bottom Tooltip */
    .tooltip .tooltiptext.bottom {
      top: 140%;
      left: 50%;
      transform: translateX(-50%);
    }
    .tooltiptext.bottom::after, .tooltiptext.bottom::before {
      bottom: 100%;
      left: 50%;
    }
    .tooltiptext.bottom::after {
      border-bottom-color: var(--background-color);
      margin-left: -6px;
    }
    .tooltiptext.bottom::before {
      border-bottom-color: #303133;
      margin-left: -7px;
    }

    /* Left Tooltip */
    .tooltip .tooltiptext.left {
      top: 50%;
      right: 140%;
      transform: translateY(-50%);
    }
    .tooltiptext.left::after, .tooltiptext.left::before {
      left: 100%;
      top: 50%;
    }
    .tooltiptext.left::after {
      border-left-color: var(--background-color);
      margin-top: -6px;
    }
    .tooltiptext.left::before {
      border-left-color: #303133;
      margin-top: -7px;
    }

    /* Right Tooltip */
    .tooltip .tooltiptext.right {
      top: 50%;
      left: 140%;
      transform: translateY(-50%);
    }
    .tooltiptext.right::after, .tooltiptext.right::before {
      right: 100%;
      top: 50%;
    }
    .tooltiptext.right::after {
      border-right-color: var(--background-color);
      margin-top: -6px;
    }
    .tooltiptext.right::before {
      border-right-color: #303133;
      margin-top: -7px;
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
    <slot id="tooltipslot"></slot>
    <span class="tooltiptext" id="tooltiptext"></span>
</div>
`
/**
 * CoreTooltip Class
 */
class CoreTooltip extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(tooltipTemplate.content.cloneNode(true))

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

  /**
  * This function gets the value of the enterable attribute.
  * @returns {Boolean} whether or not the mouse can enter the tooltip.
  */
  get enterable () {
    return this.hasAttribute('enterable')
  }

  /**
  * This function sets the value of the manual attribute.
  * @param {Boolean} val - whether or not the mouse can enter the tooltip.
  */
  set enterable (val) {
    const isEnterable = Boolean(val)
    if (isEnterable) {
      this.setAttribute('enterable', '')
    } else {
      this.removeAttribute('enterable')
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
   * @returns {number} open delay of Tooltip in ms.
   */
  get openDelay () {
    return this.getAttribute('open-delay')
  }

  /**
   * This function sets the value of the open-delay attribute
   * @param {number} val - open delay of Tooltip in ms.
   */
  set openDelay (val) {
    this.setAttribute('open-delay', val)
  }

  // Sets default values for attributes.
  connectedCallback () {
    if (this.hasAttribute('effect')) {
      if (this.getAttribute('effect') !== 'dark' && this.getAttribute('effect') !== 'light') {
        this.setAttribute('effect', 'dark')
      }
    }
    if (!this.hasAttribute('placement')) {
      this.setAttribute('placement', 'bottom')
    }    if (this.hasAttribute('v-model')) {
      this.setAttribute('v-model', '')
    }
    if (this.hasAttribute('disabled')) {
      this.setAttribute('disabled', '')
    }
    if (this.hasAttribute('manual')) {
      this.setAttribute('manual', '')
      if (this.hasAttribute('v-model')) {
        this.text.style.setProperty('opacity', '1')
      } else {
        this.text.style.setProperty('opacity', '0')
      }
    }
    if (this.hasAttribute('tabindex')) {
      if (!isNaN(this.getAttribute('tabindex'))) {
        this.addEventListener('focus', this._onHoverEnterable)
        this.addEventListener('blur', this._onHoverEnterable)
      } else {
        this.setAttribute('tabindex', 0)
      }
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', 0)
    }
    if (!this.hasAttribute('open-delay') || isNaN(this.getAttribute('open-delay'))) {
      this.setAttribute('open-delay', 0)
    }
    if (this.getAttribute('enterable') === 'false' || this.getAttribute('enterable' === false)) {
      // Add event listener for hovering when not enterable
      this.removeAttribute('enterable')
      this.shadowRoot.getElementById('tooltipslot').addEventListener('mouseover', this._onHover)
      this.shadowRoot.getElementById('tooltipslot').addEventListener('mouseout', this._onHover)
      this.shadowRoot.getElementById('tooltipslot').tooltip = this
    } else {
      // Add event listener for hovering when enterable
      this.setAttribute('enterable', '')
      this.addEventListener('mouseover', this._onHoverEnterable)
      this.addEventListener('mouseout', this._onHoverEnterable)
    }
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['effect', 'content', 'placement', 'v-model', 'disabled', 'manual', 'enterable', 'open-delay', 'tabindex']
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

        if (oldValue === 'top') {// || oldValue === 'top-start' || oldValue === 'top-end') {
          this.text.classList.remove('top')
        } else if (oldValue === 'bottom') {// || oldValue === 'bottom-start' || oldValue === 'bottom-end') {
          this.text.classList.remove('bottom')
        } else if (oldValue === 'left') {// || oldValue === 'left-start' || oldValue === 'left-end') {
          this.text.classList.remove('left')
        } else if (oldValue === 'right') {// || oldValue === 'right-start' || oldValue === 'right-end') {
          this.text.classList.remove('right')
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
        // Set visibility of tooltip
        if (hasValue) {
          this.text.style.setProperty('opacity', '1')
        } else {
          this.text.style.setProperty('opacity', '0')
        }
        break
      case 'open-delay':
        if (hasValue) {
          var fadeTime = this.getAttribute('open-delay') / 1000
          this.tooltip.setProperty('--fade-in-time', String(fadeTime) + 's')
        }
        break
    }
  }

  // Update v-model with new value, hide tooltip if disabled
  _onHoverEnterable (event) {
    if (this.hasAttribute('disabled')) {
      this.text.style.setProperty('opacity', '0')
    } else if (!this.hasAttribute('manual')) {
      if (!this.hasAttribute('v-model')) {
        this.setAttribute('v-model', '')
      } else {
        this.removeAttribute('v-model')
      }
    }
  }

  // Update v-model with new value, hide tooltip if disabled
  _onHover (event) {
    if (this.tooltip.hasAttribute('disabled')) {
      this.tooltip.text.style.setProperty('opacity', '0')
    } else if (!this.tooltip.hasAttribute('manual')) {
      if (!this.tooltip.hasAttribute('v-model')) {
        this.tooltip.setAttribute('v-model', '')
      } else {
        this.tooltip.removeAttribute('v-model')
      }
    }
  }
}

window.customElements.define('core-tooltip', CoreTooltip)
