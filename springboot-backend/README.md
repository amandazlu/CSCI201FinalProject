Welcome to TicketPro Presale! Here's some instructions for setting up the server/backend: 

Download Project
- Download entire project as zip and unzip

Software Setup
- Downlaod apache Maven: https://maven.apache.org/download.cgi
- Install apache Maven using these instructions: https://maven.apache.org/install.html
- Download and install MySql Workbench (this is a complicated process, look up instructions online)
- Make sure username and password for your MySql workbench are both 'root'. If they aren't, you must update the springboot-backend/src/main/resources/application.properties file to match

Eclipse Setup
- Open project in Eclipse by Importing an Existing Maven project and selecting the unzipped project
- Update the build path so that the SQL Connector Jar is under the classpath

MySql Schema SetUp
- In your mysql workbench, create a squema named 201_Final_Project. You can do this using the workbench UI, or by running the SQL command: 
        CREATE SCHEMA 201_Final_Project
    Note: If the schema already exists, first drop the schema by running:
        DROP SCHEMA IF EXISTS 201_Final_Project
        
Run for the first time
- Select Run As Java Application. This should start the springboot backend
- If you navigate to http://localhost:8080/api/v1/homepage, you should see a blank page.

Populating MySql Database
- If you navigate to your workbench, you should see new tables titled 'users' 'events' and 'tickets'. If you do not see these tables, right click on the schema and select "Refresh All"
- Now, copy and paste the contents of the springboot-backend/src/init_database.sql file into a sql script in your workbench and run
- You should see that the databse now has data. 
- Reload the page and see the events returned.






