# this file contains the code to preprocess the image for the model
# import numpy as np
# from PIL import Image
# import io
# # import tensorflow as tf

# def preprocess_image(image):
#     """
#     Preprocess the image for MobileNetV2:
#     - Resize to 224x224
#     - Normalize pixel values to [0,1]
#     - Expand dimensions to match MobileNetV2 input shape
#     """
#     image = Image.open(io.BytesIO(image.read())).convert("RGB")
#     image = image.resize((224, 224))  # Resize for MobileNetV2
#     image_array = np.array(image) / 255.0  # Normalize pixel values
#     image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
#     return image_array
# ================================================================================================
# codo  detects the hand in the image, crops the hand region, and preprocesses it for MobileNetV2.
# import cv2
# import numpy as np
# import io
# from PIL import Image
# import mediapipe as mp
# import os

# mp_hands = mp.solutions.hands
# hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.5)

# SAVE_PATH = "media/preprocessed/"  # Folder to save preprocessed images
# os.makedirs(SAVE_PATH, exist_ok=True)  # Create folder if it doesn't exist

# def preprocess_image(image):
#     """
#     Preprocess the image:
#     - Detects the hand using MediaPipe
#     - Crops only the hand region
#     - Saves the cropped image for verification
#     - Resize, normalize & prepare for MobileNetV2
#     """

#     # Convert uploaded file to image
#     image.seek(0)
#     image = Image.open(io.BytesIO(image.read())).convert("RGB")
#     image = np.array(image)  # Convert PIL to NumPy array (H, W, C)

#     # Convert to BGR for OpenCV
#     image_bgr = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

#     # Detect hand landmarks
#     results = hands.process(cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB))

#     if results.multi_hand_landmarks:
#         # Get hand bounding box
#         h, w, _ = image.shape
#         x_min, y_min, x_max, y_max = w, h, 0, 0

#         for hand_landmarks in results.multi_hand_landmarks:
#             for lm in hand_landmarks.landmark:
#                 x, y = int(lm.x * w), int(lm.y * h)
#                 x_min, y_min = min(x, x_min), min(y, y_min)
#                 x_max, y_max = max(x, x_max), max(y, y_max)

#         # Expand bounding box slightly
#         margin = 20
#         x_min, y_min = max(x_min - margin, 0), max(y_min - margin, 0)
#         x_max, y_max = min(x_max + margin, w), min(y_max + margin, h)

#         # Crop only the hand region
#         hand_crop = image[y_min:y_max, x_min:x_max]

#         # Save cropped image for verification
#         save_filename = os.path.join(SAVE_PATH, "cropped_hand.jpg")
#         cv2.imwrite(save_filename, cv2.cvtColor(hand_crop, cv2.COLOR_RGB2BGR))
#         print(f"Cropped hand image saved at: {save_filename}")

#         # Resize cropped image to 224x224
#         hand_crop = cv2.resize(hand_crop, (224, 224))

#     else:
#         print("⚠ No hand detected, using full image")
#         hand_crop = cv2.resize(image, (224, 224))

#     # Normalize pixel values
#     hand_crop = hand_crop / 255.0
#     hand_crop = np.expand_dims(hand_crop, axis=0)  # Add batch dimension

#     return hand_crop



# ================================================================
# import cv2
# import numpy as np
# import io
# from PIL import Image
# import mediapipe as mp
# from tensorflow.keras.preprocessing import image  # Import Keras image processing

# mp_hands = mp.solutions.hands
# hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.5)

# def preprocess_image(image_file):
#     """
#     Detects and crops the hand sign before passing it to MobileNetV2.
#     Uses Keras `image.img_to_array()` for resizing and normalization.
#     """

#     # Read image from Django request
#     image_pil = Image.open(io.BytesIO(image_file.read())).convert("RGB")
#     image_np = np.array(image_pil)

#     # Convert to BGR for OpenCV
#     image_bgr = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)

#     # Detect hand landmarks
#     results = hands.process(cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB))

#     if results.multi_hand_landmarks:
#         h, w, _ = image_np.shape
#         x_min, y_min, x_max, y_max = w, h, 0, 0

#         for hand_landmarks in results.multi_hand_landmarks:
#             for lm in hand_landmarks.landmark:
#                 x, y = int(lm.x * w), int(lm.y * h)
#                 x_min, y_min = min(x, x_min), min(y, y_min)
#                 x_max, y_max = max(x_max, w), min(y_max, h)

#         # Expand bounding box
#         margin = 20
#         x_min, y_min = max(x_min - margin, 0), max(y_min - margin, 0)
#         x_max, y_max = min(x_max + margin, w), min(y_max + margin, h)

#         # Crop the hand region
#         hand_crop = image_np[y_min:y_max, x_min:x_max]

#         # Convert cropped hand to PIL format for Keras preprocessing
#         hand_pil = Image.fromarray(hand_crop)

#         # Resize, Normalize & Expand Dimensions using Keras
#         hand_pil = hand_pil.resize((224, 224))  # Resize
#         img_array = image.img_to_array(hand_pil) / 255.0  #  Normalize
#         img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    
#     else:
#         print("⚠ No hand detected, using full image")
#         image_pil = image_pil.resize((224, 224))  # Resize full image
#         img_array = image.img_to_array(image_pil) / 255.0
#         img_array = np.expand_dims(img_array, axis=0)

#     return img_array  # Ready for MobileNetV2


# ===========================================================================
import numpy as np
import io
from PIL import Image
from tensorflow.keras.preprocessing import image 

def preprocess_image(image_file):
    """
    Prepares the image for MobileNetV2:
    - Reads image from Django request
    - Converts it to RGB (ensuring 3 channels)
    - Resizes it to 224x224 (MobileNetV2 requirement)
    - Normalizes pixel values to [0,1]
    - Expands dimensions to match model input shape
    """

    # Read image from request (Django's `request.FILES['image']`)
    image_pil = Image.open(io.BytesIO(image_file.read())).convert("RGB")

    # Resize image to 224x224 (Required by MobileNetV2)
    image_pil = image_pil.resize((224, 224))

    # Convert image to NumPy array & normalize pixel values
    img_array = image.img_to_array(image_pil) / 255.0

    # Expand dimensions (MobileNetV2 expects batch shape)
    img_array = np.expand_dims(img_array, axis=0)

    return img_array  