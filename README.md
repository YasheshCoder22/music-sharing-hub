# Tune Share Hub

**A Web Application for Synchronized Music Sharing and Playback**

---

## **Overview**
Tune Share Hub allows users to create or join rooms to share and listen to their favorite YouTube music videos together in real-time. The platform ensures a synchronized playback experience for all participants in the room, making it ideal for virtual hangouts, parties, or collaborative listening sessions.

---

## **Features**

### 1. **User Authentication**
- Secure signup, login, and profile management for users.

### 2. **Room Management**
- Create or join rooms with unique codes.
- Room-based isolation for private or public listening sessions.

### 3. **Song Queue**
- Add YouTube links to a shared playlist visible to all participants.
- View and manage the current song queue.

### 4. **Synchronized Playback**
- Real-time playback so all users in the room hear the same song simultaneously.

### 5. **Real-Time Updates**
- WebSocket-based updates for song queue and playback status.

### 6. **Responsive Frontend**
- Built with React.js for a smooth and user-friendly interface.

### 7. **Scalable Backend**
- Node.js and Express for server-side functionality.
- MongoDB for storing user, room, and queue data.

### 8. **YouTube Integration**
- Uses the YouTube Player API for playback.

### 9. **Optional Features**
- Voting system to skip or reorder songs.
- Chat functionality within rooms.

---

## **Tech Stack**

### **Frontend**
- React.js
- Mantine UI Library

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB

### **Others**
- WebSockets for real-time communication
- YouTube Player API for video playback

---

## **How to Run Locally**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (locally or cloud-based, e.g., MongoDB Atlas)

### **Steps**
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd tune-share-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     PORT=5000
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5000`.


[[img1.png]]
[[img2.png]]