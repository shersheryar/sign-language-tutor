from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import numpy as np
import tensorflow as tf
from .ai_model import predict_gesture 

class_names = [
    '1-Hay', 'Ain', 'Alif', 'Bay', 'Byeh', 'Chay', 'Cyeh', 'Daal', 'Dal', 'Dochahay', 
    'Fay', 'Gaaf', 'Ghain', 'Hamza', 'Kaf', 'Khay', 'Kiaf', 'Lam', 'Meem', 
    'Nuun', 'Nuungh', 'Pay', 'Ray', 'Say', 'Seen', 'Sheen', 'Suad', 'Taay'
]

class GestureRecognitionView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        image = request.FILES.get("image")
        if not image:
            return Response({"error": "No image provided"}, status=400)

        predicted_index = predict_gesture(image)  # Get the predicted class index
        predicted_label = class_names[predicted_index]  # Map index to class name

        print(f"✅ Prediction result: {predicted_label}")  # Debugging log

        return Response({"prediction": predicted_label})
 # Send result to frontend


# ===============================================================================

# ===============================================================================
