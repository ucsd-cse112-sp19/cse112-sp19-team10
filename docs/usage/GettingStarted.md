# Getting Started
## Using Shinobi is as easy as one, two, three!  
### 1) Install Shinobi  
Whether you used npm to install or downloaded the project itself, simply link to the library in your HTML pages.
```
<script src="../src/core_rate.js"></script>
<script src="../src/core_switch.js"></script>
<script src="../src/core_tooltip.js"></script>
```

```
<core-tooltip content="This is a switch" tabindex="1" id="exampleSwitch">
    <div class="switch_group">
        <core-switch></core-switch>
    </div>
</core-tooltip>
<core-tooltip content="Show us some love!" tabindex="2" id="exampleRate">
    <div class="rate_group">
        <core-rate></core-rate>
    </div>
</core-tooltip>
```
### 2) Customize!
While all components have specific attributes, many share common ones such as active color and the option to use an icon library like [font-awesome](https://fontawesome.com/). 
```
//change color 
<core-switch active-color='#53D96D'></core-switch>
<core-rate colors="[red,gold,green]" void-color="black" low-threshold="1" high-threshold="5"></core-rate>
```

```
//change icon
<core-rate icon-classes="fas fa-smile" void-icon-class="fas fa-frown"></core-rate>
```
### 3) And you're done! 
Visit the [API docs](../index.html) for a complete list of attributes. 