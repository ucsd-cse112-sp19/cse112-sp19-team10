let rateTemplate = document.createElement('template')
rateTemplate.innerHTML = ` 
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      .text {
        --text-color: #1F2D3D
        position: absolute;
        color: var(--text-color);
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        font-weight: 400;
        font-size: 14px;
        left: 3px;
        float: right;
        margin-top: 5px;
      }
      .rate {
        --low-color: #F7BA2A;
        --mid-color: #F7BA2A;
        --high-color: #F7BA2A;
        --void-color: #C6D1DE;
        float: left;
        height: 46px;
        padding: 0 10px;
      }
      .rate:not(:checked) > input {
        position:absolute;
        top:-9999px;
      }
      .rate:not(:checked) > label {
        float:right;
        overflow:hidden;
        white-space:nowrap;
        cursor:pointer;
        font-size:20px;
        color:var(--void-color);
        margin:3px;
      }
      .rate > input.low:checked ~ label,
      .rate input.low:not(:disabled):not(:checked) + label:hover,
      .rate input.low:not(:disabled):not(:checked) + label:hover ~ label,
      .rate > input.low:checked + label:hover,
      .rate > input.low:checked + label:hover ~ label,
      .rate > input.low:checked ~ label:hover,
      .rate > input.low:checked ~ label:hover ~ label,
      .rate > label:hover ~ input.low:checked ~ label {
        color: var(--low-color); 
      }
      .rate > input.mid:checked ~ label,
      .rate input.mid:not(:disabled):not(:checked) + label:hover,
      .rate input.mid:not(:disabled):not(:checked) + label:hover ~ label,
      .rate > input.mid:checked + label:hover,
      .rate > input.mid:checked + label:hover ~ label,
      .rate > input.mid:checked ~ label:hover,
      .rate > input.mid:checked ~ label:hover ~ label,
      .rate > label:hover ~ input.mid:checked ~ label {
        color: var(--mid-color); 
      }
      .rate > input.high:checked ~ label,
      .rate input.high:not(:disabled):not(:checked) + label:hover,
      .rate input.high:not(:disabled):not(:checked) + label:hover ~ label,
      .rate > input.high:checked + label:hover,
      .rate > input.high:checked + label:hover ~ label,
      .rate > input.high:checked ~ label:hover,
      .rate > input.high:checked ~ label:hover ~ label,
      .rate > label:hover ~ input.high:checked ~ label {
        color: var(--high-color); 
      }
    </style>
    <html>
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    </head>
    <body>
      <div class="rate">
        <span class="text"></span>
        <input type="radio" id="star5" name="rate"/>
        <label class="fas fa-star" for="star5"></label>
        <input type="radio" id="star4" name="rate"/>
        <label class="fas fa-star" for="star4"></label>
        <input type="radio" id="star3" name="rate"/>
        <label class="fas fa-star" for="star3"></label>
        <input type="radio" id="star2" name="rate"/>
        <label class="fas fa-star" for="star2"></label>
        <input type="radio" id="star1" name="rate"/>
        <label class="fas fa-star" for="star1"></label>
      </div>
    </body>
    </html>
`
/**
 * CoreRate Class
 */
class CoreRate extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(rateTemplate.content.cloneNode(true))

    // Place holder for colors property
    this.colors1 = shadowRoot.querySelector('.rate').style
    // Place holder for icon property
    this.icon = shadowRoot.querySelectorAll('.fas')
    // Place holder for radios
    this.radio = shadowRoot.querySelectorAll('input[type=radio]')
    // Place holder for text
    this.text = shadowRoot.querySelector('.text')
  }

  /**
  * This function gets the value of the v-model attribute.
  * @returns {integer} value of the v-model attribute.
  */
  get vModel () {
    return this.getAttribute('v-model')
  }

  /**
  * This function sets the value of the v-model attribute.
  * @param {integer} val - value of the v-model attribute.
  */
  set vModel (val) {
    this.setAttribute('v-model', val)
  }

  /**
  * This function gets the value of the disabled attribute.
  * @returns {Boolean} whether Rate is read-only.
  */
  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
  * This function sets the value of the disabled attribute.
  * @param {Boolean} val - whether Rate is read-only.
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
  * This function gets the value of the low-threshold attribute.
  * @returns {integer} threshold value between low and medium level.
  * The value itself will be included in low level.
  */
  get lowThreshold () {
    return this.getAttribute('low-threshold')
  }

  /**
  * This function sets the value of the low-threshold attribute.
  * @param {integer} threshold value between low and medium level.
  * The value itself will be included in low level.
  */
  set lowThreshold (val) {
    this.setAttribute('low-threshold', val)
  }

  /**
  * This function gets the value of the high-threshold attribute.
  * @returns {integer} threshold value between medium and high level.
  * The value itself will be included in high level.
  */
  get highThreshold () {
    return this.getAttribute('high-threshold')
  }

  /**
  * This function sets the value of the high-threshold attribute.
  * @param {integer} threshold value between medium and high level.
  * The value itself will be included in high level.
  */
  set highThreshold (val) {
    this.setAttribute('high-threshold', val)
  }

  /**
  * This function gets the value of the colors attribute.
  * @returns {array} array of colors for icons.
  */
  get colors () {
    return this.getAttribute('colors')
  }

  /**
  * This function sets the value of the colors attribute.
  * @param {array} val - this is an array of colors for icons,
  * it should have 3 elements each of which corresponds with a score level.
  */
  set colors (val) {
    this.setAttribute('colors', val)
  }

  /**
  * This function gets the value of the void-color attribute.
  * @returns {color} color of unselected icons.
  */
  get voidColor () {
    return this.getAttribute('void-color')
  }

  /**
  * This function sets the value of the void-color attribute.
  * @param {color} val - color of unselected icons.
  */
  set voidColor (val) {
    this.setAttribute('void-color', val)
  }

  /**
  * This function gets the value of the disabled-void-color attribute.
  * @returns {color} color of unselected read-only icons.
  */
  get disabledVoidColor () {
    return this.getAttribute('disabled-void-color')
  }

  /**
  * This function sets the value of the disabled-void-color attribute.
  * @param {color} val - color of unselected read-only icons.
  */
  set disabledVoidColor (val) {
    this.setAttribute('disabled-void-color', val)
  }

  /**
  * This function gets the value of the icon-classes attribute.
  * @returns {array} array of class names of icons.
  */
  get iconClasses () {
    return this.getAttribute('icon-classes')
  }

  /**
  * This function sets the value of the icon-classes attribute.
  * @param {array} val - array of class names of icons, it should have 3
  * elements each of which corresponds with a score level.
  */
  set iconClasses (val) {
    this.setAttribute('icon-classes', val)
  }

  /**
  * This function gets the value of the void-icon-class attribute.
  * @returns {String} class name of unselected icons.
  */
  get voidIconClass () {
    return this.getAttribute('void-icon-class')
  }

  /**
  * This function sets the value of the void-icon-class attribute.
  * @param {String} val - class name of unselected icons.
  */
  set voidIconClass (val) {
    this.setAttribute('void-icon-class', val)
  }

  /**
  * This function gets the value of the disabled-void-icon-class attribute.
  * @returns {String} class name of unselected read-only icons.
  */
  get disabledVoidIconClass () {
    return this.getAttribute('disabled-void-icon-class')
  }

  /**
  * This function sets the value of the disabled-void-icon-class attribute.
  * @param {String} val - class name of unselected read-only icons.
  */
  set disabledVoidIconClass (val) {
    this.setAttribute('disabled-void-icon-class', val)
  }

  /**
  * This function gets the value of the show-text attribute.
  * @returns {Boolean} whether to display texts.
  */
  get showText () {
    return this.hasAttribute('show-text')
  }

  /**
  * This function sets the value of the show-text attribute.
  * @param {Boolean} val - whether to display texts.
  */
  set showText (val) {
    if (val) {
      this.setAttribute('show-text', '')
    } else {
      this.removeAttribute('show-text')
    }
  }

  /**
  * This function gets the value of the show-score attribute.
  * @returns {Boolean} whether to display current score. show-score and
  * show-text cannot be true at the same time.
  */
  get showScore () {
    return this.hasAttribute('show-score')
  }

  /**
  * This function sets the value of the show-score attribute.
  * @param {Boolean} val - whether to display current score. show-score and
  * show-text cannot be true at the same time.
  */
  set showScore (val) {
    if (val) {
      this.setAttribute('show-score', '')
    } else {
      this.removeAttribute('show-score')
    }
  }

  /**
  * This function gets the value of the text-color attribute.
  * @returns {color} color of texts.
  */
  get textColor () {
    return this.getAttribute('text-color')
  }

  /**
  * This function sets the value of the text-color attribute.
  * @param {color} val - color of texts.
  */
  set textColor (val) {
    this.setAttribute('text-color', val)
  }

  /**
  * This function gets the value of the texts attribute.
  * @returns {array} text array.
  */
  get texts () {
    return this.getAttribute('texts')
  }

  /**
  * This function sets the value of the texts attribute.
  * @param {array} val - text array.
  */
  set texts (val) {
    this.setAttribute('texts', val)
  }

  /**
  * This function gets the value of the score-template attribute.
  * @returns {String} score template.
  */
  get scoreTemplate () {
    return this.getAttribute('score-template')
  }

  /**
  * This function sets the value of the score-template attribute.
  * @param {String} val - score template.
  */
  set scoreTemplate (val) {
    this.setAttribute('score-template', val)
  }

  // Sets default values for attributes.
  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', 0)
    }
    if (this.hasAttribute('v-model') && isNaN(this.getAttribute('v-model'))) {
      this.setAttribute('v-model', 0)
    }
    if (!this.hasAttribute('low-threshold')) {
      this.setAttribute('low-threshold', 2)
    }
    if (this.hasAttribute('low-threshold') && isNaN(this.getAttribute('low-threshold'))) {
      this.setAttribute('low-threshold', 2)
    }
    if (!this.hasAttribute('high-threshold')) {
      this.setAttribute('high-threshold', 4)
    }
    if (this.hasAttribute('high-threshold') && isNaN(this.getAttribute('high-threshold'))) {
      this.setAttribute('high-threshold', 4)
    }
    if (!this.hasAttribute('colors')) {
      this.setAttribute('colors', '[#F7BA2A,#F7BA2A,#F7BA2A]')
    }
    if (this.hasAttribute('colors')) {
      var colors = this.getAttribute('colors').slice(1, this.getAttribute('colors').length - 1).split(',')
      if (!this.validColor(colors[0])) {
        colors[0] = '#F7BA2A'
      }
      if (!this.validColor(colors[1])) {
        colors[1] = '#F7BA2A'
      }
      if (!this.validColor(colors[2])) {
        colors[2] = '#F7BA2A'
      }
      this.setAttribute('colors', '[' + colors[0] + ',' + colors[1] + ',' + colors[2] + ']')
    }
    if (!this.hasAttribute('icon-classes')) {
      this.setAttribute('icon-classes', 'fas fa-star')
    }
    if (!this.hasAttribute('score-template')) {
      this.setAttribute('score-template', ' points')
    }
    if (this.hasAttribute('show-score')) {
      this.setAttribute('show-score', '')
    }
    if (!this.hasAttribute('texts')) {
      this.setAttribute('texts', "['oops','disappointed','normal','good','great']")
    }
    if (this.hasAttribute('show-text')) {
      this.setAttribute('show-text', '')
    }
    if (!this.hasAttribute('void-color')) {
      this.setAttribute('void-color', '#C6D1DE')
    }
    if (this.hasAttribute('void-color')) {
      if (!this.validColor(this.getAttribute('void-color'))) {
        this.setAttribute('void-color', '#C6D1DE')
      }
    }
    if (!this.hasAttribute('disabled-void-color')) {
      this.setAttribute('disabled-void-color', '#C6D1DE')
    }
    if (this.hasAttribute('disabled-void-color')) {
      if (!this.validColor(this.getAttribute('disabled-void-color'))) {
        this.setAttribute('disabled-void-color', '#C6D1DE')
      }
    }
    if (!this.hasAttribute('text-color')) {
      this.setAttribute('text-color', '#1F2D3D')
    }
    if (this.hasAttribute('text-color')) {
      if (!this.validColor(this.getAttribute('text-color'))) {
        this.setAttribute('text-color', '#1F2D3D')
      }
    }
    if (this.hasAttribute('disabled')) {
      this.setAttribute('disabled', '')
    }
    this.addEventListener('click', this._onClick)
  }

  // Gets the attribute values when they change.
  static get observedAttributes () {
    return ['v-model', 'disabled', 'low-threshold', 'high-threshold', 'colors', 'void-color', 'disabled-void-color', 'icon-classes', 'void-icon-class', 'disabled-void-icon-class', 'show-text', 'show-score', 'text-color', 'texts', 'score-template']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    var i
    // Check stars based on v-model
    if (this.hasAttribute('v-model')) {
      var numStars = this.getAttribute('v-model')
      for (i = 0; i < numStars; i++) {
        this.radio[this.radio.length - numStars].setAttribute('checked', true)
      }
    }
    // Set disabled
    if (this.hasAttribute('disabled')) {
      for (i = 0; i < this.radio.length; i++) {
        this.radio[i].setAttribute('disabled', true)
      }
    }
    // Set low and high threshold
    if (this.hasAttribute('low-threshold') || this.hasAttribute('high-threshold')) {
      var low = parseInt(this.getAttribute('low-threshold'))
      var high = parseInt(this.getAttribute('high-threshold'))
      for (i = this.radio.length - 1; i >= this.radio.length - low; i--) {
        this.radio[i].classList.add('low')
        this.icon[i].classList.add('low')
      }
      for (i = this.radio.length - low - 1; i > this.radio.length - high; i--) {
        this.radio[i].classList.add('mid')
        this.icon[i].classList.add('mid')
      }
      for (i = this.radio.length - high; i >= 0; i--) {
        this.radio[i].classList.add('high')
        this.icon[i].classList.add('high')
      }
    }
    // Set colors
    if (this.hasAttribute('colors')) {
      var newColor1 = this.getAttribute('colors')
      var colors = newColor1.slice(1, newColor1.length - 1).split(',')
      this.colors1.setProperty('--low-color', colors[0])
      this.colors1.setProperty('--mid-color', colors[1])
      this.colors1.setProperty('--high-color', colors[2])
    }
    // Set void color
    if (this.hasAttribute('void-color')) {
      var newColor2 = this.getAttribute('void-color')
      this.colors1.setProperty('--void-color', newColor2)
    }
    // Set disabled void color
    if (this.hasAttribute('disabled-void-color') && this.hasAttribute('disabled')) {
      var dVoid = this.getAttribute('disabled-void-color')
      this.colors1.setProperty('--void-color', dVoid)
    }
    // Set icon classes
    if (this.hasAttribute('icon-classes')) {
      var newClass1 = this.getAttribute('icon-classes')
      for (i = 0; i < this.icon.length; i++) {
        this.icon[i].setAttribute('class', newClass1)
      }
    }
    // Set void icon class
    if (this.hasAttribute('void-icon-class')) {
      var newClass2 = this.getAttribute('void-icon-class')
      for (i = this.icon.length - 1; i >= this.getAttribute('v-model'); i--) {
        this.icon[this.icon.length - i - 1].setAttribute('class', newClass2)
      }
    }
    // Set disabled void icons
    if (this.hasAttribute('disabled-void-icon-class') && this.hasAttribute('disabled')) {
      var newClass3 = this.getAttribute('disabled-void-icon-class')
      for (i = 0; i < this.getAttribute('v-model') - 1; i++) {
        this.icon[i].setAttribute('class', newClass3)
      }
    }
    // Set score
    if (this.hasAttribute('show-score') && this.hasAttribute('score-template') &&
       !this.hasAttribute('show-text') && (this.getAttribute('show-score') === '')) {
      var scoreTemp = this.getAttribute('score-template')
      var score = this.getAttribute('v-model')
      this.text.innerHTML = score + scoreTemp
    }
    // Set texts
    if (this.hasAttribute('show-text') && this.hasAttribute('texts') &&
       !this.hasAttribute('show-score')) {
      var texts = this.getAttribute('texts')
      this.textsArr = texts.split("', '")
      var length = this.textsArr.length
      this.textsArr[0] = this.textsArr[0].substr(2)
      this.textsArr[length - 1] = this.textsArr[length - 1].substr(0, length)
    }
    // Set text-color
    if (this.hasAttribute('text-color')) {
      this.text.style.setProperty('--text-color', this.getAttribute('text-color'))
    }
  }

  // Update v-model and texts when rate is changed
  _onClick (event) {
    this._updateVmodel()
    this._updateTexts()
  }

  // Update v-model value
  _updateVmodel () {
    if (this.disabled) {
      return
    }
    var i
    var numStars = 0
    for (i = 0; i < this.radio.length; i++) {
      if (this.radio[i].checked) {
        numStars = this.radio.length - i
        break
      }
    }
    this.setAttribute('v-model', numStars)
  }

  // Update texts value
  _updateTexts () {
    var index = this.getAttribute('v-model')
    if (index !== 0 && this.textsArr) {
      this.text.innerHTML = this.textsArr[index - 1]
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

// Connect class to 'core-rate' custom element
window.customElements.define('core-rate', CoreRate)
