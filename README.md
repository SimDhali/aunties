🚀 How to Run Your Project
Option 1: Run client only (React frontend)
bash



npm run dev:client
* Frontend runs on: http://localhost:5173/
Option 2: Run server only (Express backend)
bash



npm run dev:server  
* Backend runs on: http://localhost:5000/
Option 3: Run both simultaneously
bash



npm run dev:both
* Frontend: http://localhost:5173/
* Backend: http://localhost:5000/
📁 Project Structure
* Root: Contains server code and configuration
* client/: Contains React frontend code
* server/: Contains Express backend code
* shared/: Shared types/schemas
The client folder doesn't have its own 

package.json - everything runs from the root package.json with different scripts for different parts of the application.
