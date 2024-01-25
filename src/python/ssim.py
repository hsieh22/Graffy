from PIL import Image
from skimage.metrics import structural_similarity as ssim
from io import BytesIO
import requests
import sys
import numpy as np
import matplotlib.pyplot as plt
from math import *

import logging
logging.basicConfig(filename='python_script.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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

def resize_images(image1, image2):
    # If images are already open (PngImageFile objects), use them directly
    if isinstance(image1, Image.Image): img1 = image1
    else: img1 = Image.open(image1)
    if isinstance(image2, Image.Image): img2 = image2
    else: img2 = Image.open(image2)
        
    # Get the dimensions of the reference image
    ref_width, ref_height = img2.size

    # Resize images to match the dimensions of the reference image
    img1_resized = img1.resize((ref_width, ref_height))
    img2_resized = img2.resize((ref_width, ref_height))

    return img1_resized, img2_resized

def calculate_ssim(img1, img2):
    # Convert images to grayscale
    img1_gray = img1.convert('L')
    img2_gray = img2.convert('L')

    # Convert images to arrays
    array1 = np.array(img1_gray)
    array2 = np.array(img2_gray)

    # Calculate SSIM
    similarity_index, _ = ssim(array1, array2, full=True)

    return similarity_index

def calculate_final_score(a_q_score, a_ref_score, q_ref_score):
    abs_diff_term = abs(a_ref_score - q_ref_score)
    

    penalty1 = - 0.5 * (exp(1+abs_diff_term) - exp(1))
    penalty2 = - pow(a_ref_score,15)/ 2
    compensate = -log(abs_diff_term + 0.05) / 10 - 0.1
    final_score = a_q_score + penalty1 + penalty2 + compensate

    return final_score

def display_images_and_scores(q_img, a_img, a_q_score, a_ref_score, q_ref_score, final_score):
    fig, ax = plt.subplots(1, 2, figsize=(10, 5))

    # Convert images to arrays
    q_img_array = np.array(q_img)
    a_img_array = np.array(a_img)

    # Display side by side
    combined_image = np.hstack([q_img_array, a_img_array])
    ax[0].imshow(combined_image, cmap='gray')
    ax[0].axis('off')

    # Display scores
    ax[1].text(0.5, 0.9, f"a_q_score: {a_q_score:.4f}", fontsize=12, ha='center')
    ax[1].text(0.5, 0.8, f"a_ref_score: {a_ref_score:.4f}", fontsize=12, ha='center')
    ax[1].text(0.5, 0.7, f"q_ref_score: {q_ref_score:.4f}", fontsize=12, ha='center')
    ax[1].text(0.5, 0.6, f"final_score: {final_score:.4f}", fontsize=12, ha='center')
    ax[1].axis('off')

    plt.show()

# Get image URLs from command line arguments
q_img_path = sys.argv[1]
a_img_path = sys.argv[2]
ref_img_path = "./public/assets/ref.jpg"

# List of image URLs and local file paths
image_paths = [q_img_path, a_img_path]

# Open images from URLs or local files
images = open_images_from_urls(image_paths)

# Resize images to match the dimensions of the reference image
q_img_resized, ref_img_resized = resize_images(images[0], ref_img_path)
a_img_resized, _ = resize_images(images[1], ref_img_path)

# Calculate SSIM scores
a_q_score = calculate_ssim(a_img_resized, q_img_resized)
a_ref_score = calculate_ssim(a_img_resized, ref_img_resized)
q_ref_score = calculate_ssim(q_img_resized, ref_img_resized)

# Calculate final score
final_score = calculate_final_score(a_q_score, a_ref_score, q_ref_score)

# Print the final score
sys.argv.append(str(final_score))
print(final_score)

# abs_diff_term = abs(a_ref_score - q_ref_score)
# logging.info("a_q: {}".format(a_q_score))
# logging.info("a_ref: {}".format(a_ref_score))
# logging.info("q_ref: {}".format(q_ref_score))
# logging.info("ar-qr: {}".format(a_ref_score - q_ref_score))
# logging.info("p1: {}".format(0.5*(exp(1+abs_diff_term) - exp(1))))
# logging.info("p2: {}".format(- pow(a_ref_score,15)/ 2))
# logging.info("comp: {}".format(-log(abs_diff_term + 0.05) / 10 - 0.1))
# logging.info("final: {}".format(final_score))
# logging.info("")


# Display images and scores
# display_images_and_scores(q_img_resized, a_img_resized, a_q_score, a_ref_score, q_ref_score, final_score)