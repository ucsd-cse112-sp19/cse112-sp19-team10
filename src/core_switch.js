let switchTemplate = document.createElement('template')
switchTemplate.innerHTML = `
<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .text {
    position: absolute;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 500;
    font-size: 14px;
    top: 3px;
  }
  #inactive_text {
    right: 45px;
    float: left;
  }
  #active_text {
    float: right;
    left: 45px;
  }
  .slider {
    --active-color: #409EFF;
    --inactive-color: #C0CCDA;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--inactive-color);
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: var(--active-color);
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
  .slider.round {
    border-radius: 22px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  input[disabled] + span {
    cursor: not-allowed;
    opacity: .6;
  }
  #active_icon {
    position: absolute;
    left: 45px;
    top: 2px;
  }
  #inactive_icon {
    position: absolute;
    right: 45px;
    top: 2px;
    color: #409EFF;
  }
  input:checked ~ #active_icon {
    color: #409EFF;
  }
  input:checked ~ #inactive_icon {
    color: #000000;
  }
</style>
<html>
<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>
<body>
  <label class="switch">
    <span class="text" id="inactive_text"></span>
    <input type="checkbox">
    <span class="slider round"></span>
    <i id="inactive_icon"></i>
    <i id="active_icon"></i>
    <span class="text" id="active_text"></span>
  </label>
</body>
</html>
`
/**
 * CoreSwitch Class
 */
class CoreSwitch extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(switchTemplate.content.cloneNode(true))

    // Place holder for checkbox
    this.check = shadowRoot.querySelector('input[type=checkbox]')
    // Place holder for color
    this.aColor = shadowRoot.querySelector('.slider').style
    // Place holder for active icon
    this.activeIcon = shadowRoot.querySelector('#active_icon')
    // Place holder for inactive icon
    this.inactiveIcon = shadowRoot.querySelector('#inactive_icon')
    // Place holder for active text
    this.aText = shadowRoot.querySelector('#active_text')
    // Place holder for inactive text
    this.iaText = shadowRoot.querySelector('#inactive_text')

    // Event listener for toggling switch
    this.addEventListener('click', e => {
      // Don't toggle the switch if it's disabled.
      if (this.disabled) {
        return
      }
      this.toggleSwitch()
    })
  }

  /**
  * This function gets the value of the v-model attribute.
  * @returns {Boolean/String/number} value of the v-model attribute.
  */
  get vModel () {
    return this.getAttribute('v-model')
  }

  /**
  * This function sets the value of the v-model attribute.
  * @param {Boolean/String/number} val - this is the value of the switch.
  */
  set vModel (val) {
    this.setAttribute('v-model', val)
  }

  /**
  * This function gets the value of the disabled attribute.
  * @returns {Boolean} value of the disabled attribute.
  */
  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
  * This function sets the value of the disabled attribute.
  * @param {Boolean} val - this is a Boolean.
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
    * This function gets the value of the active-icon-class attribute.
    * @returns {String} value of the active-icon-class attribute.
    */
  get activeIconClass () {
    return this.getAttribute('active-icon-class')
  }

  /**
  * This function sets the value of the active-icon-class attribute.
  * @param {String} val - this is a icon class name.
  */
  set activeIconClass (val) {
    this.setAttribute('active-icon-class', val)
  }

  /**
  * This function gets the value of the inactive-icon-class attribute.
  * @returns {String} value of the inactive-icon-class attribute.
  */
  get inactiveIconClass () {
    return this.getAttribute('inactive-icon-class')
  }

  /**
  * This function sets the value of the inactive-icon-class attribute.
  * @param {String} val - this is a icon class name.
  */
  set inactiveIconClass (val) {
    this.setAttribute('inactive-icon-class', val)
  }

  /**
  * This function gets the value of the active-text attribute.
  * @returns {String} value of the active-text attribute.
  */
  get activeText () {
    return this.getAttribute('active-text')
  }

  /**
  * This function sets the value of the active-text attribute.
  * @param {String} val - this is a String to display when active.
  */
  set activeText (val) {
    this.setAttribute('active-text', val)
  }

  /**
  * This function gets the value of the inactive-text attribute.
  * @returns {String} value of the inactive-text attribute.
  */
  get inactiveText () {
    return this.getAttribute('inactive-text')
  }

  /**
  * This function sets the value of the active-text attribute.
  * @param {String} val - this is a String to display when inactive.
  */
  set inactiveText (val) {
    this.setAttribute('inactive-text', val)
  }

  /**
  * This function gets the value of the active-value attribute.
  * @returns {Boolean/String/number} value of the active-value attribute.
  */
  get activeValue () {
    return this.getAttribute('active-value')
  }

  /**
  * This function sets the value of the active-value attribute.
  * @param {Boolean/String/number} val - value of the switch when it is enabled.
  */
  set activeValue (val) {
    this.setAttribute('active-value', val)
  }

  /**
  * This function gets the value of the inactive-value attribute.
  * @returns {Boolean/String/number} value of the inactive-value attribute.
  */
  get inactiveValue () {
    return this.getAttribute('inactive-value')
  }

  /**
  * This function sets the value of the inactive-value attribute.
  * @param {Boolean/String/number} val - value of the switch when it is not enabled.
  */
  set inactiveValue (val) {
    this.setAttribute('inactive-value', val)
  }

  /**
  * This function gets the value of the active-color attribute.
  * @returns {color} value of the active-color attribute.
  */
  get activeColor () {
    return this.getAttribute('active-color')
  }

  /**
  * This function sets the value of the active-color attribute.
  * @param {color} val - this is a color.
  */
  set activeColor (val) {
    this.setAttribute('active-color', val)
  }

  /**
  * This function gets the value of the inactive-color attribute.
  * @returns {color} value of the inactive-color attribute.
  */
  get inactiveColor () {
    return this.getAttribute('inactive-color')
  }

  /**
  * This function sets the value of the inactive-color attribute.
  * @param {color} val - this is a color.
  */
  set inactiveColor (val) {
    this.setAttribute('inactive-color', val)
  }

  /**
  * This function gets the value of the name attribute.
  * @returns {String} value of the name attribute.
  */
  get name () {
    return this.getAttribute('name')
  }

  /**
  * This function sets the value of the name attribute.
  * @param {String} val - this is a String.
  */
  set name (val) {
    this.setAttribute('name', val)
  }

  // Sets default values for attributes.
  connectedCallback () {
    // Disable switch if set
    if (this.hasAttribute('disabled')) {
      this.setAttribute('disabled', '')
    }
    // Set default active text to empty
    if (!this.hasAttribute('active-text')) {
      this.setAttribute('active-text', '')
    }
    // Set default inactive text to empty
    if (!this.hasAttribute('inactive-text')) {
      this.setAttribute('inactive-text', '')
    }
    // Set default active-value to true
    if (!this.hasAttribute('active-value')) {
      this.setAttribute('active-value', true)
    }
    // Set default inactive-value to false
    if (!this.hasAttribute('inactive-value')) {
      this.setAttribute('inactive-value', false)
    }
    // Set default active-color to
    if (!this.hasAttribute('active-color')) {
      this.setAttribute('active-color', '#409EFF')
    }
    if (!this.hasAttribute('inactive-color')) {
      this.setAttribute('inactive-color', '#C0CCDA')
    }
    if (!this.hasAttribute('v-model')) {
      this.toggleSwitch()
    } else {
      if (this.getAttribute('v-model') === this.getAttribute('active-value')) {
        this.check.checked = true
      }
    }
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['v-model', 'disabled', 'active-color', 'inactive-color', 'name', 'active-icon-class', 'inactive-icon-class', 'active-text', 'inactive-text']
  }

  // Actions for when an attribute is changed.
  attributeChangedCallback (name, oldValue, newValue) {
    // Disable switch
    if (this.hasAttribute('disabled')) {
      this.check.setAttribute('disabled', true)
    } else {
      this.check.removeAttribute('disabled')
    }
    // Set active color
    if (this.hasAttribute('active-color')) {
      var newColor1 = this.getAttribute('active-color')
      if (this.validColor(newColor1)) {
        this.aColor.setProperty('--active-color', newColor1)
      } else {
        this.setAttribute('active-color', '#409EFF')
      }
    }
    // Set inactive color
    if (this.hasAttribute('inactive-color')) {
      var newColor2 = this.getAttribute('inactive-color')
      if (this.validColor(newColor2)) {
        this.aColor.setProperty('--inactive-color', newColor2)
      } else {
        this.setAttribute('inactive-color', '#C0CCDA')
      }
    }
    // Set active icon
    if (this.hasAttribute('active-icon-class')) {
      var newClass1 = this.getAttribute('active-icon-class')
      this.activeIcon.setAttribute('class', newClass1)
    }
    // Set inactive icon
    if (this.hasAttribute('inactive-icon-class')) {
      var newClass2 = this.getAttribute('inactive-icon-class')
      this.inactiveIcon.setAttribute('class', newClass2)
    }
    // Set active text
    if (this.hasAttribute('active-text')) {
      var activeText = this.getAttribute('active-text')
      this.aText.innerHTML = activeText
      if (this.check.checked) {
        this.aText.style.setProperty('color', '#409EFF')
        // cowow
      } else {
        this.aText.style.setProperty('color', 'black')
      }
    }
    // Set inactive text
    if (this.hasAttribute('inactive-text')) {
      var inactiveText = this.getAttribute('inactive-text')
      this.iaText.innerHTML = inactiveText
      if (!this.check.checked) {
        this.iaText.style.setProperty('color', '#409EFF')
      } else {
        this.iaText.style.setProperty('color', 'black')
      }
    }
    // Set name
    if (this.hasAttribute('name')) {
      this.check.setAttribute('name', this.getAttribute('name'))
    }
  }

  // Change v-model based on active/inactive value
  toggleSwitch () {
    if (this.check.checked) {
      let activeValue = this.getAttribute('active-value')
      this.setAttribute('v-model', activeValue)
      if (activeValue === 'true') {
        this.removeAttribute('title')
      } else {
        // TODO: MAKE TOOLTIP?
        this.setAttribute('title', 'Switch value: ' + activeValue)
      }
    } else {
      let inactiveValue = this.getAttribute('inactive-value')
      this.setAttribute('v-model', inactiveValue)
      if (inactiveValue === 'false') {
        this.removeAttribute('title')
      } else {
        // TODO: MAKE TOOLTIP?
        this.setAttribute('title', 'Switch value: ' + inactiveValue)
      }
    }
  }

  // Check if string is a color
  validColor (stringToTest) {
    if (stringToTest === '') { return false }

    var image = document.createElement('img')
    image.style.color = 'rgb(0, 0, 0)'
    image.style.color = stringToTest
    if (image.style.color !== 'rgb(0, 0, 0)') { return true }
    image.style.color = 'rgb(255, 255, 255)'
    image.style.color = stringToTest
    return image.style.color !== 'rgb(255, 255, 255)'
  }
}

window.customElements.define('core-switch', CoreSwitch)
