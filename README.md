<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1VbCwxO6omxwagvFzgKlbZRdDMTNfC7Xt

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Run with Docker

You can also run the application using Docker:

### Using Docker Compose (Recommended)

1. Create a `.env` file (if you haven't) and add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
2. Build and run the container:
   ```bash
   docker-compose up --build
   ```
3. Open your browser at `http://localhost:8080`.

### Using Docker Directly

1. Build the image:
   ```bash
   docker build --build-arg GEMINI_API_KEY=your_api_key_here -t kec-portal .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:80 kec-portal
   ```
