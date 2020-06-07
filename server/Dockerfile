FROM frolvlad/alpine-python3
WORKDIR /app

# Install backend dependencies.
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy backend executable file to the image filesystem.
COPY src/server.py server.py

# Expose and Run the server app.
EXPOSE 8000
ENTRYPOINT ["python", "server.py"]