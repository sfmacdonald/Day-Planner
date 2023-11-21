# Day-Planner
Plan your day because if you don't follow the 7 P's, it may lead to poor results.

## Table of Contents

- [Project Name](#project-name)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Description

The purpose of the website is to plan your day working at the company. The schedule shall display hour blocks with details regarding any scheduled meetings, etc. It is also color-coded to provide the user heightened visuals for determining availability.

## Features

This web-based scheduler has the following features and functions:

Leverages jQuery and day.js integrations

1. Display current date/time from user's local time
    - Formatted as DD-MM-YYYY
2. Change start time
    - Nominal start time is 9AM
3. Add new calendar entry with free text
4. Save new calendar entry with save button on each time block
5. Color coding for past, present and future blocks giving the user heightened visibility
    - Gray = Past
    - Red = Current
    - Green = Future

## Usage

The github repository may be found at https://github.com/sfmacdonald/Day-Planner

The live URL for the working website is [insert URL]

When accessed, the website should reflect the following image:

![alt text](<insert png>)

## Testing

1. **Navigate to the Website**
   - Visit [insert URL]

2. **Current Time/Date**
    - Ensure that displayed date/time stamp matches user's date/time:
        1. Date formatted as MM-DD-YYYY (24HRs)
        2. Time formated as HH:mm:ss
    - Rereshing browser shall provide updated date/time stamp

3. **Time Blocks**
    - Ensure that time blocks have correct color coding:
        1. Current time - red
        2. Past time(s) - gray 
        3. Future time(s) - green
    - Ensure that new entries save correctly by:
        1. Click with cursor within time block the user wishes to create an entry
            - Note blinking text cursor appears in selected time block 
            - Note that the border of time block selected shall highlight
        2. Insert free text
        3. Select save button on right-hand side 
            - Save button shall change color from white to black and enlarge when cursor is hovered over.




4. **Completing The Quiz**
    - 
        1. 
        2. 

5. **Store Results**
    - 
        1. 
        2. 
        3. 

6. **Begin A New Quiz**
   - 