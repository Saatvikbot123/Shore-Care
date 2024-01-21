import torch
from PIL import Image

img = Image.open('cans.webp')
# Model
model = torch.hub.load("yolov5", "yolov5n", source="local")  # or yolov5n - yolov5x6, custom

# Images
# img = "file:///Users/saatviksharma/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/E007E8A8-F644-4044-B5D0-071690BDE26B/image1.jpeg"  # or file, Path, PIL, OpenCV, numpy, list

# Inference
results = model(img)

# Results
results.print()
results.show() # or .show(), .save(), .crop(), .pandas(), etc.