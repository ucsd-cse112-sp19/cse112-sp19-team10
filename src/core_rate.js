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
            --colors: #F7BA2A;
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

        .rate > input:checked ~ label,
        .rate input:not(:disabled):not(:checked) + label:hover,
        .rate input:not(:disabled):not(:checked) + label:hover ~ label {
            color: var(--colors);  
        }

        .rate > input:checked + label:hover,
        .rate > input:checked + label:hover ~ label,
        .rate > input:checked ~ label:hover,
        .rate > input:checked ~ label:hover ~ label,
        .rate > label:hover ~ input:checked ~ label {
            color: var(--colors); 
        }
    </style>
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
    this.setAttribute('max', val)
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

  get iconClasses () {
    return this.getAttribute('icon-classes')
  }

  set iconClasses (val) {
    this.setAttribute('icon-classes', val)
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

  get scoreTemplate () {
    return this.getAttribute('score-template')
  }

  set scoreTemplate (val) {
    this.setAttribute('score-template', val)
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

  get texts () {
    return this.getAttribute('texts')
  }

  set texts (val) {
    this.setAttribute('texts', val)
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

  get textColor () {
    return this.getAttribute('text-color')
  }

  set textColor (val) {
    this.setAttribute('text-color', val)
  }

  get disabledVoidColor () {
    return this.getAttribute('disabled-void-color')
  }

  set disabledVoidColor (val) {
    this.setAttribute('disabled-void-color', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', 0)
    }
    if (!this.hasAttribute('max')) {
      this.setAttribute('max', 5)
    }
    if (!this.hasAttribute('colors')) {
      this.setAttribute('colors', '#F7BA2A')
    }
    if (!this.hasAttribute('void-color')) {
      this.setAttribute('void-color', '#C6D1DE')
    }
    if (!this.hasAttribute('text-color')) {
      this.setAttribute('text-color', '#1F2D3D')
    }
    if (!this.hasAttribute('disabled-void-color')) {
      this.setAttribute('disabled-void-color', '#C6D1DE')
    }
    this.addEventListener('click', this._onClick)
  }

  static get observedAttributes () {
    return ['v-model', 'max', 'colors', 'icon-classes', 'disabled', 'score-template', 'show-score', 'texts', 'show-text', 'text-color', 'disabled-void-color']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (this.hasAttribute('colors')) {
      var newColor1 = this.getAttribute('colors')
      this.colors1.setProperty('--colors', newColor1)
    }
    if (this.hasAttribute('void-color')) {
      var newColor2 = this.getAttribute('void-color')
      this.colors1.setProperty('--void-color', newColor2)
    }
    if (this.hasAttribute('icon-classes')) {
      var newClass1 = this.getAttribute('icon-classes')
      var i
      for (i = 0; i < this.icon.length; i++) {
        this.icon[i].setAttribute('class', newClass1)
      }
    }
    if (this.hasAttribute('disabled')) {
      for (i = 0; i < this.radio.length; i++) {
        this.radio[i].setAttribute('disabled', true)
      }
    }
    if (this.hasAttribute('v-model')) {
      var numStars = this.getAttribute('v-model')
      for (i = 0; i < numStars; i++) {
        this.radio[this.radio.length - numStars].setAttribute('checked', true)
      }
    }
    if (this.hasAttribute('show-score') && this.hasAttribute('score-template')) {
      var scoreTemp = this.getAttribute('score-template')
      var score = this.getAttribute('v-model')
      this.text.innerHTML = score + scoreTemp
    }
    if (this.hasAttribute('show-text') && this.hasAttribute('texts')) {
      var texts = this.getAttribute('texts')
      this.textsArr = texts.split("', '")
      var length = this.textsArr.length
      this.textsArr[0] = this.textsArr[0].substr(2)
      this.textsArr[length - 1] = this.textsArr[length - 1].substr(0, length)
    }
    if (this.hasAttribute('text-color')) {
      this.text.style.setProperty('--text-color', this.getAttribute('text-color'))
    }
    if (this.hasAttribute('disabled-void-color') && this.hasAttribute('disabled')) {
      var dVoid = this.getAttribute('disabled-void-color')
      this.colors1.setProperty('--void-color', dVoid)
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
