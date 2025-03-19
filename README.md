The project includes the following collections in MongoDB:

Agent

agentName
User

firstName, DOB, address, phoneNumber, state, zipCode, email, gender, userType
User's Account

accountName
Policy Category (LOB)

categoryName
Policy Carrier

companyName
Policy Info

policyNumber, policyStartDate, policyEndDate, policyCategoryId, companyId, userId
🎯 Tasks
✅ Task 1: API Development
Upload XLSX/CSV Data:

Create an API to upload XLSX/CSV data into MongoDB using worker threads for better performance.
Search Policy by Username:

Create an API to search for policy information using the username.
Aggregated Policy Info:

Create an API to provide aggregated policy information by each user.
Separate Collections:

Store each type of data in a different MongoDB collection:
Agent, User, User's Account, LOB, Carrier, Policy
✅ Task 2: Server and Scheduling
Track Real-Time CPU Utilization:

Monitor CPU usage of the Node.js server.
If CPU usage exceeds 70%, automatically restart the server.
Post Service for Scheduled Messages:

Create a POST API to accept:
message, day, and time in the body.
Insert the message into the database at the specified day and time.
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Worker Threads for parallel processing
OS Module for CPU tracking
Cron Jobs for scheduling


git clone git@github.com:imrajashish/User-Policy-App.git
