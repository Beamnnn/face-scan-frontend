import streamlit as st
import requests

st.title("Face Recognition System")

st.write("เลือกไฟล์ภาพเพื่อสแกนใบหน้า")
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "png"])

if uploaded_file is not None:
    files = {"file": uploaded_file.getvalue()}
    response = requests.post("http://127.0.0.1:8000/scan-face/", files=files)
    st.write(response.json())
