# Chris Towles Blog Logo

Really like the terminal and the #FFFFFF color blue.


## tools

```bash
sudo apt update
#sudo apt install imagemagick
sudo apt install inkscape



```

## resize svg to needed pngs. 


```bash

convert -background none -density 1024 -resize 1024 public/logo.svg compass.png

inkscape -w 1024 -h 1024 input.svg -o output.png
```
