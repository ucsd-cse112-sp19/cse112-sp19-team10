let template = document.createElement('template')
template.innerHTML = ` 
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .rate {
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
            width:1em;
            overflow:hidden;
            white-space:nowrap;
            cursor:pointer;
            font-size:30px;
            color:#ccc;
        }
        .rate:not(:checked) > label:before {
            content: '★ ';
        }
        .rate > input:checked ~ label {
            color: #ffc700;    
        }
        .rate:not(:checked) > label:hover,
        .rate:not(:checked) > label:hover ~ label {
            color: #deb217;  
        }
        .rate > input:checked + label:hover,
        .rate > input:checked + label:hover ~ label,
        .rate > input:checked ~ label:hover,
        .rate > input:checked ~ label:hover ~ label,
        .rate > label:hover ~ input:checked ~ label {
            color: #c59b08;
        }
    </style>
    <div class="rate">
        <input type="radio" id="star5" name="rate"/>
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate"/>
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate"/>
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate"/>
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate"/>
        <label for="star1" title="text">1 stars</label>
    </div>
`
class CoreRate extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))
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

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', 0)
    }
    if (!this.hasAttribute('max')) {
      this.setAttribute('max', 5)
    }
  }

  static get observedAttributes () {
    return ['v-model']
  }

  attributeChangedCallback (name, oldValue, newValue) {

  }
}

window.customElements.define('core-rate', CoreRate)
