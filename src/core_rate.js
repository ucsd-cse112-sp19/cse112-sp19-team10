let template = document.createElement('template')
template.innerHTML = ` 
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
class CoreRate extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

    // Place holder for colors property
    this.colors1 = shadowRoot.querySelector('.rate').style
    // Place holder for icon property
    this.icon = shadowRoot.querySelectorAll('.fas')
    // Place holder for radios
    this.radio = shadowRoot.querySelectorAll('input[type=radio]')
    // Place holder for text
    this.text = shadowRoot.querySelector('.text')
  }

  get vModel () {
    return this.getAttribute('v-model')
  }

  set vModel (val) {
    this.setAttribute('v-model', val)
  }

  get max () {
    return this.getAttribute('max')
  }

  set max (val) {
    this.setAttribute('max', 5)
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

  get lowThreshold () {
    return this.getAttribute('low-threshold')
  }

  set lowThreshold (val) {
    this.setAttribute('low-threshold', val)
  }

  get highThreshold () {
    return this.getAttribute('high-threshold')
  }

  set highThreshold (val) {
    this.setAttribute('high-threshold', val)
  }

  get colors () {
    return this.getAttribute('colors')
  }

  set colors (val) {
    this.setAttribute('colors', val)
  }

  get voidColor () {
    return this.getAttribute('void-color')
  }

  set voidColor (val) {
    this.setAttribute('void-color', val)
  }

  get disabledVoidColor () {
    return this.getAttribute('disabled-void-color')
  }

  set disabledVoidColor (val) {
    this.setAttribute('disabled-void-color', val)
  }

  get iconClasses () {
    return this.getAttribute('icon-classes')
  }

  set iconClasses (val) {
    this.setAttribute('icon-classes', val)
  }

  get disabledVoidIcon () {
    return this.getAttribute('disabled-void-icon-class')
  }

  set disabledVoidIcon (val) {
    this.setAttribute('disabled-void-icon-class', val)
  }

  get showText () {
    return this.hasAttribute('show-text')
  }

  set showText (val) {
    if (val) {
      this.setAttribute('show-text', '')
    } else {
      this.removeAttribute('show-text')
    }
  }

  get showScore () {
    return this.hasAttribute('show-score')
  }

  set showScore (val) {
    if (val) {
      this.setAttribute('show-score', '')
    } else {
      this.removeAttribute('show-score')
    }
  }

  get textColor () {
    return this.getAttribute('text-color')
  }

  set textColor (val) {
    this.setAttribute('text-color', val)
  }

  get texts () {
    return this.getAttribute('texts')
  }

  set texts (val) {
    this.setAttribute('texts', val)
  }

  get scoreTemplate () {
    return this.getAttribute('score-template')
  }

  set scoreTemplate (val) {
    this.setAttribute('score-template', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', 0)
    }
    if (!this.hasAttribute('max')) {
      this.setAttribute('max', 5)
    }
    if (!this.hasAttribute('low-threshold')) {
      this.setAttribute('low-threshold', 2)
    }
    if (!this.hasAttribute('high-threshold')) {
      this.setAttribute('high-threshold', 4)
    }
    if (!this.hasAttribute('colors')) {
      this.setAttribute('colors', '[#F7BA2A,#F7BA2A,#F7BA2A]')
    }
    if (!this.hasAttribute('void-color')) {
      this.setAttribute('void-color', '#C6D1DE')
    }
    if (!this.hasAttribute('disabled-void-color')) {
      this.setAttribute('disabled-void-color', '#C6D1DE')
    }
    if (!this.hasAttribute('text-color')) {
      this.setAttribute('text-color', '#1F2D3D')
    }
    this.addEventListener('click', this._onClick)
  }

  static get observedAttributes () {
    return ['v-model', 'disabled', 'low-threshold', 'high-threshold', 'colors', 'void-color', 'disabled-void-color', 'icon-classes', 'disabled-void-icon-class', 'show-text', 'show-score', 'text-color', 'texts', 'score-template']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    var i
    if (this.hasAttribute('v-model')) {
      var numStars = this.getAttribute('v-model')
      for (i = 0; i < numStars; i++) {
        this.radio[this.radio.length - numStars].setAttribute('checked', true)
      }
    }
    if (this.hasAttribute('disabled')) {
      for (i = 0; i < this.radio.length; i++) {
        this.radio[i].setAttribute('disabled', true)
      }
    }
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
    if (this.hasAttribute('colors')) {
      var newColor1 = this.getAttribute('colors')
      var colors = newColor1.slice(1,newColor1.length-1).split(",")
      this.colors1.setProperty('--low-color', colors[0])
      this.colors1.setProperty('--mid-color', colors[1])
      this.colors1.setProperty('--high-color', colors[2])
    }
    if (this.hasAttribute('void-color')) {
      var newColor2 = this.getAttribute('void-color')
      this.colors1.setProperty('--void-color', newColor2)
    }
    if (this.hasAttribute('disabled-void-color') && this.hasAttribute('disabled')) {
      var dVoid = this.getAttribute('disabled-void-color')
      this.colors1.setProperty('--void-color', dVoid)
    }
    if (this.hasAttribute('icon-classes')) {
      var newClass1 = this.getAttribute('icon-classes')
      var classes = newClass1.slice(1,newClass1.length-1).split(",")
      for (i = 0; i < this.icon.length; i++) {
        if(this.icon[i].classList.contains('low')){
          this.icon[i].setAttribute('class', 'low ' + classes[0])
        } else if(this.icon[i].classList.contains('mid')){
          this.icon[i].setAttribute('class', 'mid ' + classes[1])
        } else if(this.icon[i].classList.contains('high')){
          this.icon[i].setAttribute('class', 'high ' + classes[2])
        }
      }
    }
    if (this.hasAttribute('disabled-void-icon-class') && this.hasAttribute('disabled')) {
      var newClass2 = this.getAttribute('disabled-void-icon-class')
      for (i = 0; i < this.getAttribute('v-model') - 1; i++) {
        if(this.icon[i].classList.contains('low')){
          this.icon[i].setAttribute('class', 'low ' + newClass2)
        } else if(this.icon[i].classList.contains('mid')){
          this.icon[i].setAttribute('class', 'mid ' + newClass2)
        } else if(this.icon[i].classList.contains('high')){
          this.icon[i].setAttribute('class', 'high ' + newClass2)
        }
      }
    }
    if (this.hasAttribute('show-text') && this.hasAttribute('texts')) {
      var texts = this.getAttribute('texts')
      this.textsArr = texts.split("', '")
      var length = this.textsArr.length
      this.textsArr[0] = this.textsArr[0].substr(2)
      this.textsArr[length - 1] = this.textsArr[length - 1].substr(0, length)
    }
    if (this.hasAttribute('show-score') && this.hasAttribute('score-template')) {
      var scoreTemp = this.getAttribute('score-template')
      var score = this.getAttribute('v-model')
      this.text.innerHTML = score + scoreTemp
    }
    if (this.hasAttribute('text-color')) {
      this.text.style.setProperty('--text-color', this.getAttribute('text-color'))
    }
  }

  _onClick (event) {
    this._updateVmodel()
    this._updateTexts()
  }

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

  _updateTexts () {
    var index = this.getAttribute('v-model')
    if (index !== 0 && this.textsArr) {
      this.text.innerHTML = this.textsArr[index - 1]
    }
  }
}

window.customElements.define('core-rate', CoreRate)
