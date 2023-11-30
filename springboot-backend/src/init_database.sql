/* Drop and create the schema in case it already exists using the following commands: 
DROP SCHEMA IF EXISTS 201_Final_Project;
CREATE SCHEMA 201_Final_Project;

Then run the program. This will create empty tables. Then run the following scrip:
*/ 

/* Create events */
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('1', '11292023', 'Experience an electrifying night of indie-synth music with The Ivy at The Moroccan Lounge in Los Angeles, CA.', 'Los Angeles, CA', 'The Ivy', '6:30 PM', '20.13', '56', '18.90', '3', '400.10', '1');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('2', '12012023', 'Join us for a night of pure fun and entertainment in New York City with Taylor Swift.', 'New York, NY', 'Taylor Swift Tour', '9:30 PM', '100.13', '5000', '189.92', '3000', '4900.10', '98');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('3', '01232023', 'Be moved by Adele\'s soulful voice in St. Louis, MO.', 'St. Louis, MO', 'Adele Live in St. Louis', '7:00 PM', '190.13', '550', '600.10', '190', '3400.20', '90');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('4', '12062023', 'Experience high-energy music and excitement with Olivia Rodrigo in Palo Alto, CA.', 'Palo Alto, CA', 'Olivia Rodrigo Live', '8:30 PM', '19.13', '500', '39.90', '1000', '470.10', '80');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('5', '12092023', 'Join us for an exhilarating evening with Lady Gaga in Santa Barbara, CA.', 'Santa Barbara, CA', 'Lady Gaga Live', '8:45 PM', '50.17', '50', '22.95', '800', '90.10', '80');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('6', '12102023', 'Enjoy a night of music and entertainment with Katy Perry in Los Angeles, CA.', 'Los Angeles, CA','Katy Perry Live', '10:00 PM', '70.16', '560', '34.87', '180', '102.12', '69');

/* Create users */
INSERT INTO `201_Final_Project`.`users` (`email`, `first_name`, `last_name`, `password`, `verified`) VALUES ('testaccount@usc.edu', 'test', 'account', 'hello', b'1');
INSERT INTO `201_Final_Project`.`users` (`email`, `first_name`, `last_name`, `password`, `verified`) VALUES ('krugler@usc.edu', 'sophia', 'krugler', 'password', b'1');
INSERT INTO `201_Final_Project`.`users` (`email`, `first_name`, `last_name`, `password`, `verified`) VALUES ('tommy@usc.edu', 'tommy', 'trojan', 'abcde', b'1');

/* Creat tickets */
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('1', 'floor', '4', 'testaccount@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('2', 'vip', '4', 'krugler@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('3', 'floor', '4', 'tommy@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('4', 'genad', '3', 'krugler@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('5', 'vip', '3', 'tommy@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('6', 'floor', '2', 'tommy@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('7', 'floor', '2', 'testaccount@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('8', 'genad', '1', 'krugler@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('9', 'vip', '1', 'tommy@usc.edu');
INSERT INTO `201_Final_Project`.`tickets` (`id`, `ticket_type`, `event_id`, `user_id`) VALUES ('10', 'floor', '1', 'testaccount@usc.edu');
