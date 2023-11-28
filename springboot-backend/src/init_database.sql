/* Drop and create the schema in case it already exists using the following commands: 
DROP SCHEMA IF EXISTS 201_Final_Project;
CREATE SCHEMA 201_Final_Project;

Then run the program. This will create empty tables. Then run the following scrip:
*/ 

/* Create events */
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('1', '12052023', 'This is a fun event', 'Los Angeles, CA', 'Lil Nas X', '8:30 PM', '20.13', '500', '18.90', '100', '400.10', '60');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('2', '11062023', 'This is a fun event', 'New York, NY', 'Taylor Swift', '9:30 PM', '100.13', '5000', '189.92', '3000', '4900.10', '98');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('3', '11152023', 'This is a fun event', 'St. Louis, MO', 'Adele', '7:00 PM', '190.13', '550', '600.10', '190', '3400.20', '90');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('4', '12062023', 'This is a fun event', 'Palo Alto, CA', 'Olivia Rodrigo', '8:30 PM', '19.13', '500', '39.90', '1000', '470.10', '80');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('5', '12092023', 'This is a fun event', 'Santa Barbara, CA', 'Lady Gaga', '8:45 PM', '50.17', '50', '22.95', '800', '90.10', '80');
INSERT INTO `201_Final_Project`.`events` (`id`, `date`, `description`, `location`, `name`, `time`, `floor_ticket_price`, `floor_tickets_left`, `genad_ticket_price`, `genad_tickets_left`, `vip_ticket_price`, `vip_tickets_left`) VALUES ('6', '12102023',  'This is a fun event', 'Los Angeles, CA','Katy Perry', '10:00 PM', '70.16', '560', '34.87', '180', '102.12', '69');

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
