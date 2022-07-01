

# pwa icons
convert -background none -density 1000 -quality 95 -depth 8 -resize 512x docs/logo/icon-logo.svg public/pwa-512x512.png
convert -background none -density 1000 -quality 95 -depth 8 -resize 192x docs/logo/icon-logo.svg public/pwa-192x192.png


# apple touch icon 180x180
convert -background none -density 1000 -quality 95 -depth 8 -resize 180x docs/logo/icon-logo.svg public/apple-touch-icon.png


# favicon 16x16
convert -background none -density 1000 -resize 48x docs/logo/icon-logo.svg public/favicon.ico


# og.image - used for linking to on links like slack, facebook, etc.
convert docs/logo/Chris-Towles-logos_white.png -background '#6da13f' -flatten public/og.png