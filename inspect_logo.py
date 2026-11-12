from PIL import Image, ImageEnhance, ImageFilter

im = Image.open('assets/images/brand-logo.png')
print('Size:', im.size)
print('Mode:', im.mode)

# Let's crop the center emblem area where the gold S | S monogram is, as well as test different enhancements
# The image is 1170 x 1150
# Let's see the bounding box of the gold S|S and the text below
