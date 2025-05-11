# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install any dependencies (if required)
# RUN pip install -r requirements.txt

# Torne o script executável
ENTRYPOINT ["python", "sample.py"]
