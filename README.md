SVG Navigator
=============

SVG Navigator is an SVG panning and zooming javascript library which adds
functionalities like Inkscape and Adobe Illustrator to embedded svg files in 
html

Usage
-----

```html
    <!-- You need to have an svg element on the page -->
    <svg id="theSVGElement"></svg>

    <!-- include the script -->
    <script src="svgnavigator.js"></script>

    <script>
      // Put this in your main script
      var theSVGElement = document.getElementById("theSVGElement");
      SVGNavigator(theSVGElement);
    </script>
```
