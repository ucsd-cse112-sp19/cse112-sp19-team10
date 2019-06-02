
let template = document.createElement('template')
template.innerHTML = `
<style>
  .switch {
    --custom-width: 40;
    position: relative;
    display: inline-block;
    width: var(--custom-width);
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
    --iaText-offset: 45px;
    right: var(--iaText-offset);
    float: left;
  }
  #active_text {
    --aText-offset: 45px;
    float: right;
    left: var(--aText-offset);
  }
  .slider {
    --active-color: #409EFF;
    --inactive-color: #C0CCDA;
    --custom-width: 18px;
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
    transform: translateX(var(--custom-width));
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
    --active-color: #409EFF;
    position: absolute;
    right: 45px;
    top: 2px;
    color: var(--active-color);
  }
  input:checked ~ #active_icon {
    --active-color: #409EFF;
    color: var(--active-color);
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

class CoreSwitch extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

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
    // Place holder for switch width
    this.switchWidth = shadowRoot.querySelector('.switch').style
    // Place holder for slider width
    this.sliderWidth = shadowRoot.querySelector('.slider').style
  }

  get disabled () {
    return this.hasAttribute('disabled')
  }

  set disabled (val) {
    if (val) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get vModel () {
    return this.hasAttribute('v-model')
  }

  set vModel (val) {
    const isChecked = Boolean(val)
    if (isChecked) {
      this.setAttribute('v-model', '')
    } else {
      this.removeAttribute('v-model')
    }
  }

  get activeColor () {
    return this.getAttribute('active-color')
  }

  set activeColor (val) {
    this.setAttribute('active-color', val)
  }

  get inactiveColor () {
    return this.getAttribute('inactive-color')
  }

  set inactiveColor (val) {
    this.setAttribute('inactive-color', val)
  }

  get activeIconClass () {
    return this.getAttribute('active-icon-class')
  }

  set activeIconClass (val) {
    this.setAttribute('active-icon-class', val)
  }

  get inactiveIconClass () {
    return this.getAttribute('inactive-icon-class')
  }

  set inactiveIconClass (val) {
    this.setAttribute('inactive-icon-class', val)
  }

  get activeText () {
    return this.getAttribute('active-text')
  }

  set activeText (val) {
    this.setAttribute('active-text', val)
  }

  get inactiveText () {
    return this.getAttribute('inactive-text')
  }

  set inactiveText (val) {
    this.setAttribute('inactive-text', val)
  }

  get width () {
    return this.getAttribute('width')
  }

  set width (val) {
    this.setAttribute('width', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', false)
    }
    if (!this.hasAttribute('active-color')) {
      this.setAttribute('active-color', '#409EFF')
    }
    if (!this.hasAttribute('inactive-color')) {
      this.setAttribute('inactive-color', '#C0CCDA')
    }
    if (!this.hasAttribute('active-text')) {
      this.setAttribute('active-text', '')
    }
    if (!this.hasAttribute('inactive-text')) {
      this.setAttribute('inactive-text', '')
    }
    //if (!this.hasAttribute('width')) {
    //  this.setAttribute('width', 40)
    //}
    this.addEventListener('click', this._onClick)
  }

  static get observedAttributes () {
    return ['v-model', 'disabled', 'active-color', 'inactive-color', 'active-icon-class', 'inactive-icon-class', 'active-text', 'inactive-text']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (this.hasAttribute('disabled')) {
      this.check.setAttribute('disabled', true)
    }
    if (this.hasAttribute('active-color')) {
      var newColor1 = this.getAttribute('active-color')
      this.aColor.setProperty('--active-color', newColor1)
    }
    if (this.hasAttribute('inactive-color')) {
      var newColor2 = this.getAttribute('inactive-color')
      this.aColor.setProperty('--inactive-color', newColor2)
    }
    if (this.hasAttribute('active-icon-class')) {
      var newClass1 = this.getAttribute('active-icon-class')
      this.activeIcon.setAttribute('class', newClass1)
      var actIconColor = this.getAttribute('active-color')
      this.activeIcon.style.setProperty('--active-color', actIconColor)
    }
    if (this.hasAttribute('inactive-icon-class')) {
      var newClass2 = this.getAttribute('inactive-icon-class')
      this.inactiveIcon.setAttribute('class', newClass2)
      var inactIconColor = this.getAttribute('active-color')
      this.inactiveIcon.style.setProperty('--active-color', inactIconColor)
    }
    if (this.hasAttribute('active-text')) {
      var activeText = this.getAttribute('active-text')
      this.aText.innerHTML = activeText
      var actColor1 = this.getAttribute('active-color')
      if (this.check.checked) {
        this.aText.style.setProperty('color', actColor1)
      } else {
        this.aText.style.setProperty('color', 'black')
      }
    }
    if (this.hasAttribute('inactive-text')) {
      var inactiveText = this.getAttribute('inactive-text')
      this.iaText.innerHTML = inactiveText
      var actColor2 = this.getAttribute('active-color')
      if (!this.check.checked) {
        this.iaText.style.setProperty('color', actColor2)
      } else {
        this.iaText.style.setProperty('color', 'black')
      }
    }
    if (this.hasAttribute('width')) {
      var newWidth = this.getAttribute('width')
      this.switchWidth.setProperty('--custom-width', newWidth)
      // The slider's transform px amount is 22 less than the width of the switch
      this.sliderWidth.setProperty('--custom-width', String(newWidth - 22) + "px")
      var test11 = newWidth + 5
      var testS = test11.toString()
      var testS0 = testS + "px"
      this.aText.style.setProperty('--aText-offset', testS0)
      //this.aText.style.setProperty('left', "105px")
      //this.iaText.style.setProperty('right', String(newWidth + 5) + "px")
      //this.iaText.style.setProperty('right', "105px")
    }
  }

  _onClick (event) {
    this._updateVmodel()
  }

  _updateVmodel () {
    if (this.disabled) {
      return
    }
    var isChecked = this.check.checked
    this.setAttribute('v-model', isChecked)
  }
}

window.customElements.define('core-switch', CoreSwitch)
