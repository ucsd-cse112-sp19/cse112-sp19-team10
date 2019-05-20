let template = document.createElement('template')
template.innerHTML = ` 
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        .rate {
            --colors: #F7BA2A;
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
            color:#ccc;
            margin:3px;
        }

        .rate > input:checked ~ label {
            color: var(--colors);    
        }

        .rate:not(:checked) > label:hover,
        .rate:not(:checked) > label:hover ~ label {
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
        <input type="radio" id="star5" name="rate"/>
        <label class="fas fa-star" for="star5" title="text"></label>
        <input type="radio" id="star4" name="rate"/>
        <label class="fas fa-star" for="star4" title="text"></label>
        <input type="radio" id="star3" name="rate"/>
        <label class="fas fa-star" for="star3" title="text"></label>
        <input type="radio" id="star2" name="rate"/>
        <label class="fas fa-star" for="star2" title="text"></label>
        <input type="radio" id="star1" name="rate"/>
        <label class="fas fa-star" for="star1" title="text"></label>
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

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', 0)
    }
    if (!this.hasAttribute('max')) {
      this.setAttribute('max', 5)
    }
  }

  static get observedAttributes () {
    return ['v-model', 'colors']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (this.hasAttribute('colors')) {
      var newColor1 = this.getAttribute('colors')
      this.colors1.setProperty('--colors', newColor1)
    }
  }
}

window.customElements.define('core-rate', CoreRate)
