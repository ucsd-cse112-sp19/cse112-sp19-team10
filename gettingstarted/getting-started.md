## Shinobi
### *Let Shinobi do the dirty work*
Shinobi is a library of standard web components that act as reliable and easy to use building blocks for your next web app.  
<img src="../img/rockstar_ninja.PNG" title="Team Logo" alt="Team Logo" width="500px"/>

## Getting Started
Using Shinobi is as easy as one, two, three!  
1) Copy paste the code below:  
```
<script src="../src/core_rate.js"></script>
<script src="../src/core_switch.js"></script>
<script src="../src/core_tooltip.js"></script>
```

```
<core-tooltip content="This is a switch" tabindex="1">
    <div class="switch_group">
        <core-switch></core-switch>
    </div>
</core-tooltip>
<core-tooltip content="Show us some love!" tabindex="2">
    <div class="rate_group">
        <core-rate></core-rate>
    </div>
</core-tooltip>
```
2) Customize!  
```
//change color 
<core-switch active-color='green' inactive-color='red'></core-switch>
<core-rate colors="[red,gold,green]" void-color="black" low-threshold="1" high-threshold="5"></core-rate>
```

```
//change icon
<core-rate icon-classes="fas fa-smile" void-icon-class="fas fa-frown"></core-rate>
```
3) And you're done!