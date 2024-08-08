# CISM-Project
CIMS APP: Corporate Device Inventory Management System
1. Title Slide
•	Project Name: CIMS: Corporate Device Inventory Management System
•	Team Members: [List of team members with roles, Abdullahi Warsame]
•	Date: [Date]
•	Client: Local Government [Specify the name]
•	Version: 1.0
2. Introduction
•	Project Overview:
The CIMS app is a specialized Corporate Device Inventory Management System tailored for county governments. It is designed to streamline the management, tracking, and accountability of devices such as computers, tablets, and other electronic equipment used by local county employees. The system automates the processes of device issuance, return, maintenance, and real-time inventory management, providing a robust solution for minimizing device loss, reducing operational inefficiencies, and ensuring secure and transparent device handling.
3. Business Case
•	Client Description:
The client is the Local Government of [Specify Name], responsible for managing a large number of devices used across various departments. The county government requires an efficient and secure system to track and manage these devices, ensuring they are used responsibly and maintained properly.
•	Business Problem:
The local county government currently faces challenges in managing its device inventory due to manual processes that are time-consuming and prone to errors. Devices are often misplaced, lost, or not properly maintained, leading to increased costs, security risks, and decreased productivity. The lack of real-time inventory data also hinders the ability to make informed decisions regarding device allocation and maintenance.
•	Current Business Process:
Currently, device management is handled manually using spreadsheets and paper forms. This process involves significant administrative effort and often leads to discrepancies in the inventory, delays in updating records, and difficulties in tracking device usage and maintenance.


•	Goals and Objectives:
The CIMS system aims to automate the device management process, providing real-time inventory tracking, automated logging of device transactions, and secure access to device data. These objectives will help the county government reduce costs, improve operational efficiency, enhance device security, and ensure that devices are maintained and used appropriately.
4. Proposed Solution
•	Target Process Overview:
The CIMS system will replace the current manual device management process with an automated, centralized platform. Key features include; real-time inventory updates, automated logging of device check-ins and check-outs, maintenance tracking, and detailed reporting capabilities. This solution will reduce administrative burden, improve accuracy, and provide county managers with the data they need to manage resources effectively.
•	System Functionality Overview:
Device Check-In/Check-Out: Users can log the issuance and return of devices through a user-friendly interface. The system automatically updates inventory levels and logs the transaction, ensuring accurate tracking.
Real-Time Inventory Management: The CIMS app provides a dashboard where managers can view the status of all devices, including those checked out, available, or under maintenance. This feature allows for better planning and resource allocation.
Usage Reporting: The system generates comprehensive reports on device usage, maintenance history, and trends. These reports can be filtered by department, device type, and period, providing valuable insights for decision-making.
User Authentication and Role Management: The system includes secure user authentication to ensure that only authorized personnel can access the device management system. Role-based access controls allow different levels of access for administrators, managers, and users.
•	Data Model Overview:
The CIMS app's data model includes the following key tables:
Devices: Tracks all devices, including attributes such as Device ID, Type, Status, Location, and Maintenance Schedule.
Users: Stores user information, including Employee ID, Name, Department, Role, and Access Level.
Transactions: Logs every device check-in/check-out with details such as User, Device, Timestamp, and Purpose.
Maintenance Records: Tracks maintenance activities, including scheduled and completed maintenance, repairs, and associated costs.
Inventory: Provides an overview of the current inventory, with real-time updates on device availability and status.

5. Design Diagrams
1. Use Case Diagram
•	Textual Description:
The Use Case Diagram for the CIMS app outlines the interactions between various users (e.g., Administrators, Department Managers, Employees) and the system’s functionalities.
Actors:
Administrator: Manages user accounts, system settings, and oversees all device transactions.
Department Manager: Views inventory, schedules maintenance, and generates usage reports.
Employee: Checks out and returns devices.
Key Use Cases:
Check-Out Device: Employees check out devices for use.
Check-In Device: Employees return devices after use.
View Inventory: Managers and Administrators can view current inventory levels.
Generate Reports: Managers generate usage and inventory reports.

2. Activity Diagrams
a. Device Check-Out Process
•	Textual Description:
The Activity Diagram for the Device Check-Out Process shows the steps an employee follows to check out a device. The process includes logging into the CIMS system, selecting the desired device, confirming the check-out, and updating the inventory.
Steps:
1.	Login: Employee logs into the system with secure credentials.
2.	Select Device: Employee selects the device from the available inventory.
3.	Confirm Check-Out: Employee confirms the check-out, and the system updates the device's status to "Checked Out."
4.	Inventory Update: The system automatically updates the inventory to reflect the device's new status.
b. Maintenance Scheduling
•	Textual Description:
The Activity Diagram for Maintenance Scheduling illustrates how a manager schedules maintenance for devices. The manager selects a device, sets a maintenance date, and the system updates the maintenance schedule accordingly.
Steps:
1.	Login: Manager logs into the system.
2.	Select Device: Manager selects the device needing maintenance.
3.	Set Maintenance Date: Manager sets the date and time for the maintenance.
4.	Notify Personnel: The system sends a notification to the responsible maintenance team.
5.	Update Schedule: The system updates the device's status to "Scheduled for Maintenance."

3. State Diagrams
Device Lifecycle
•	Textual Description:
The State Diagram for the Device Lifecycle displays the different states a device can be in within the CIMS system. These states include "Available," "Checked Out," "Under Maintenance," and "Decommissioned." The diagram also shows the transitions between these states based on user actions or system updates.
States:
Available: The device is ready for use and can be checked out.
Checked Out: The device is currently in use by an employee.
Under Maintenance: The device is undergoing maintenance and is not available for check-out.
Decommissioned: The device is no longer in use and has been removed from the active inventory.
Transitions:
From "Available" to "Checked Out" when an employee checks out the device.
From "Checked Out" to "Available" when the device is returned.
From "Available" to "Under Maintenance" when the device is scheduled for maintenance.
From "Under Maintenance" to "Available" once maintenance is complete.
From "Available" or "Under Maintenance" to "Decommissioned" when the device is retired.
4. Class Diagrams
CISM System Classes
•	Textual Description:
The Class Diagram outlines the structure of the CIMS system, including classes such as Device, User, Transaction, Maintenance, and Inventory.
Classes and Attributes:
Device:
Attributes: DeviceID, Type, Status, Location, MaintenanceSchedule
Methods: checkOutDevice(), returnDevice(), scheduleMaintenance()

User:
Attributes: UserID, Name, Department, Role, AccessLevel
Methods: login(), viewInventory(), generateReport()
Transaction:
Attributes: TransactionID, DeviceID, UserID, Timestamp, TransactionType
Methods: logTransaction()
Maintenance:
Attributes: MaintenanceID, DeviceID, ScheduledDate, CompletedDate, Cost
Methods: scheduleMaintenance(), completeMaintenance()
Inventory:
Attributes: InventoryID, DeviceID, CurrentStatus, LastUpdated
Methods: updateInventory(), generateInventoryReport()

6. Prototype
1. Prototype Overview
•	Textual Description:
The prototype of the CIMS app showcases the core functionalities of the system, allowing users to interact with the basic features of device check-in/check-out, inventory viewing, and report generation. The prototype is connected to a backend database that updates in real time, demonstrating how the system will function once fully implemented.
Key Screens:
a.	Login Screen: The login interface requires users to enter their credentials (username and password) to access the system. Upon successful login, users are directed to their respective dashboards based on their roles.
b.	Inventory Dashboard: The dashboard provides an overview of the current inventory status, showing devices that are available, checked out, or under maintenance. Users can filter devices by type, department, or status.
c.	Device Transaction Log: This screen lists all recent transactions, including device check-ins and check-outs. Each entry includes the device ID, user, date, and transaction type.
d.	Maintenance Schedule: This interface allows managers to view scheduled maintenance tasks, including the devices involved, scheduled dates, and the status of the maintenance.

7. Domain Model Refinement
•	Generalizations:
The domain model includes generalizations such as a Device superclass with subclasses like Laptop, Tablet, and Peripheral. Each subclass inherits common attributes and methods from the Device superclass.
•	Conceptual Classes:
Abstract Classes: The model defines abstract classes like Electronic Device, which is the parent class for more specific device types such as Laptops and Tablets. This abstraction helps manage shared attributes and behaviors across different types of devices.
•	Association Classes:
An association class, Transaction, represents the relationship between User and Device, capturing the details of each interaction (e.g., check-in, check-out, purpose).
•	Composition:
The model demonstrates composition relationships, such as a Device composed of Components like Battery, Screen, and Hard Drive, emphasizing that these components cannot exist independently outside the context of the device.

9. Conclusion
•	Summary of Findings:
The CIMS app provides a comprehensive solution to the challenges faced by the county government in managing its device inventory. The system automates key processes, enhances accountability, and provides valuable insights through real-time data and detailed reporting.
•	Closing Statement:
By implementing the CIMS system, the county government will achieve significant improvements in operational efficiency, device security, and resource management. The system's robust features and user-friendly interface will ensure that devices are managed effectively, reducing costs and enhancing overall productivity.
10. Appendices
Additional Diagrams and Documentation:
Glossary of Terms: Definitions of key terms used in the CIMS app, such as "Check-Out," "Inventory," "Maintenance," etc.
Technical Specifications: Detailed technical requirements for the implementation of the CIMS system, including hardware and software prerequisites, database schema, and network requirements.
User Manuals: Drafts of user manuals or guides that explain how different user roles (e.g., Administrators, Managers, Employees) can interact with the system.



