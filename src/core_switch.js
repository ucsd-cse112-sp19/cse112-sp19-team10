let template = document.createElement('template')
template.innerHTML = `
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
    <input type="checkbox">
    <span class="slider round"></span>
    <i id="inactive_icon"></i>
    <i id="active_icon"></i>
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


    // Event listener for toggling switch
    this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return
      }
      this.toggleSwitch()
    })
  }

  get vModel () {
    return this.hasAttribute('v-model')
  }

  set vModel (val) {
    this.setAttribute('v-model', val)
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

  get activeValue () {
    return this.getAttribute('active-value')
  }

  set activeValue (val) {
    this.setAttribute('active-value', val)
  }

  get inactiveValue () {
    return this.getAttribute('inactive-value')
  }

  set inactiveValue (val) {
    this.setAttribute('inactive-value', val)
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

  get name () {
    return this.getAttribute('name')
  }

  set name (val) {
    this.setAttribute('name', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', false)
    }
    if (!this.hasAttribute('active-value')) {
      this.setAttribute('active-value', true)
    }
    if (!this.hasAttribute('inactive-value')) {
      this.setAttribute('inactive-value', false)
    }
    if (!this.hasAttribute('active-color')) {
      this.setAttribute('active-color', '#409EFF')
    }
    if (!this.hasAttribute('inactive-color')) {
      this.setAttribute('inactive-color', '#C0CCDA')
    }
    this.toggleSwitch()
  }

  static get observedAttributes () {
    return ['v-model', 'disabled', 'active-color', 'inactive-color', 'name', 'active-icon-class', 'inactive-icon-class']
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
    }
    if (this.hasAttribute('inactive-icon-class')) {
      var newClass2 = this.getAttribute('inactive-icon-class')
      this.inactiveIcon.setAttribute('class', newClass2)
    } 
    if (this.hasAttribute('name')) {
      this.disable.setAttribute('name', this.getAttribute('name'))
    }
  }

  toggleSwitch () {
    if (this.disable.checked) {
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
}

window.customElements.define('core-switch', CoreSwitch)
