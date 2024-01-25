from sentence_transformers import SentenceTransformer, util
from PIL import Image
import glob
import os
import sys
import requests
from io import BytesIO

# Code Reference: https://stackoverflow.com/questions/11541154/checking-images-for-similarity-with-opencv

# Set up virtual environment
# https://www.youtube.com/watch?v=snqgWx5tOzY&t=1s&ab_channel=thabish

# Load the image paths from the command line
question = sys.argv[1]
answer = sys.argv[2]
# print('Image 1:', img1, 'Image 2:', img2)

# Load the OpenAI CLIP Model
# print('Loading CLIP Model...')
model = SentenceTransformer('clip-ViT-B-32')

# Next we compute the embeddings
# To encode an image, you can use the following code:
# from PIL import Image
# encoded_image = model.encode(Image.open(filepath))


# image_paths = list(glob.glob('./*.jpg'))
# image_paths = [img1, img2]

# List of image URLs
image_urls = [question, answer]
# image_urls = ["https://firebasestorage.googleapis.com/v0/b/wp-final-82996.appspot.com/o/QuestionBank%2FLevelOne%2Fmoon.png?alt=media&token=4abaf62a-8219-4222-aa96-06770e8ebf02",
# "https://firebasestorage.googleapis.com/v0/b/wp-final-82996.appspot.com/o/QuestionBank%2FLevelOne%2Fcircle.png?alt=media&token=158f53e1-08c0-4ac6-9466-369c78e044c6"]

# print('Loading images...')
# print(image_urls)

# Function to open images from URLs
def open_images_from_urls(urls):
    images = []
    for url in urls:
        response = requests.get(url)
        if response.status_code == 200:
            # Open the image from the content of the response
            image = Image.open(BytesIO(response.content))
            images.append(image)
        else:
            print(f"Failed to download image from URL: {url}")

    return images

# Open images from URLs
images = open_images_from_urls(image_urls)

# print(image_paths)
# print("Images:", len(image_paths))
# encoded_image = model.encode([Image.open(filepath) for filepath in image_paths], batch_size=128, convert_to_tensor=True, show_progress_bar=True)
encoded_image = model.encode(images, batch_size=128, convert_to_tensor=True, show_progress_bar=True)

# Now we run the clustering algorithm. This function compares images aganist 
# all other images and returns a list with the pairs that have the highest 
# cosine similarity score
processed_images = util.paraphrase_mining_embeddings(encoded_image)
# NUM_SIMILAR_IMAGES = 10

# =================
# DUPLICATES
# =================
# print('Finding duplicate images...')
# # Filter list for duplicates. Results are triplets (score, image_id1, image_id2) and is scorted in decreasing order
# # A duplicate image will have a score of 1.00
# # It may be 0.9999 due to lossy image compression (.jpg)
# duplicates = [image for image in processed_images if image[0] >= 0.999]

# # Output the top X duplicate images
# for score, image_id1, image_id2 in duplicates[0:NUM_SIMILAR_IMAGES]:
#     print("\nScore: {:.3f}%".format(score * 100))
#     print(image_names[image_id1])
#     print(image_names[image_id2])

# =================
# NEAR DUPLICATES
# =================
# print('Finding near duplicate images...')
# Use a threshold parameter to identify two images as similar. By setting the threshold lower, 
# you will get larger clusters which have less similar images in it. Threshold 0 - 1.00
# A threshold of 1.00 means the two images are exactly the same. Since we are finding near 
# duplicate images, we can set it at 0.99 or any number 0 < X < 1.00.
# threshold = 0.99
near_duplicates = [image for image in processed_images]

sys.argv.append(near_duplicates[0][0])
# print(sys.argv[3])  # This print command is needed for the api to get the score
print(near_duplicates[0][0])  # This print command is needed for the api to get the score

# for score, image_id1, image_id2 in near_duplicates[0:NUM_SIMILAR_IMAGES]:
#     print("\nScore: {:.3f}%".format(score * 100))
    # print(image_names[image_id1])
    # print(image_names[image_id2])

