import numpy as np
import tensorflow as tf
from .preprocess import preprocess_image
import os
 # Forces TensorFlow to use CPU


# Load the trained MobileNetV2 model
MODEL_PATH = "/home/noone/Documents/jupyternotebookk/Sign-language-tutor-with-real-time-feedback/sign_language_10_epoch_mobilelNETv2.h5"
model = tf.keras.models.load_model(MODEL_PATH)
os.environ["CUDA_VISIBLE_DEVICES"] = "-1" 

def predict_gesture(image):
  
    processed_image = preprocess_image(image)  # Convert image to MobileNetV2 format
    prediction = model.predict(processed_image)  # Run inference
    print("prediction",prediction)
    # predicted_class = tf.argmax(prediction, axis=1).numpy()[0]
    predicted_class = np.argmax(prediction, axis=-1)[0] 
    print("predicted_class", predicted_class) # Get predicted class
    return predicted_class

