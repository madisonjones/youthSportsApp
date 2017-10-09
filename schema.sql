insert into youthsports.announcements (id, title, comment, createdAt, teamID, updatedAt) values (3, "Practice", "tomorrow", current_date(), 1, current_date());

Insert into youthsports.discussions (id, title, comment, createdAt, userID, updatedAt) values (2, "snacks", "I'll bring snacks to the game this weekend!", current_date(), 1, current_date());
Insert into youthsports.discussions (id, title, comment, createdAt, userID, updatedAt) values (1, "carpool", "can someone please drive Mitchell to practice tomorrow?", current_date(), 1, current_date());

insert into youthsports.schedules (id, title, location, start, end, details, teamID, createdAt) values (1, "Practice", "Field 2", "Date(2017, 10, 10, 0, 0, 0)", "Date(2017, 10, 11, 2, 0, 0)", "We're going over drills", 1, current_date());