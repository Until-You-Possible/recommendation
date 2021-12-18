CREATE TABLE `dianpingDB`.`user` (
                                     `id` int NOT NULL AUTO_INCREMENT,
                                     `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
                                     `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
                                     `telephone` varchar(40) NOT NULL DEFAULT '',
                                     `password` varchar(200) NOT NULL DEFAULT '',
                                     `nick_name` varchar(40) NOT NULL DEFAULT '',
                                     `gender` int NOT NULL DEFAULT 0,
                                     PRIMARY KEY (`id`),
                                     UNIQUE `telphone_unique_index` USING BTREE (`telphone`) comment ''
) COMMENT='';


CREATE TABLE `dianpingDB`.`seller` (
                                       `id` INT NOT NULL,
                                       `name` VARCHAR(45) NOT NULL AUTO_INCREMENT,
                                       `created_at` DATETIME NOT NULL,
                                       `updated_at` DATETIME NOT NULL,
                                       `disable_flag` INT NOT NULL DEFAULT 0,
                                       `remark_score` INT NOT NULL DEFAULT 0,
                                       PRIMARY KEY (`id`));

CREATE TABLE `dianpingDB`.`category` (
                                         `id` INT NOT NULL AUTO_INCREMENT,
                                         `name` VARCHAR(45) NOT NULL,
                                         `created_at` DATETIME NOT NULL,
                                         `updated_at` DATETIME NOT NULL,
                                         `icon_url` VARCHAR(200) NOT NULL,
                                         `sort` INT NOT NULL,
                                         PRIMARY KEY (`id`));

]
CREATE TABLE `dianpingDB`.`shop`  (
                                      `id` int(0) NOT NULL AUTO_INCREMENT,
                                      `created_at` datetime(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
                                      `updated_at` datetime(0) NOT NULL DEFAULT '0000-00-00 00:00:00',
                                      `name` varchar(80) NOT NULL DEFAULT '',
                                      `remark_score` decimal(2, 1) NOT NULL DEFAULT 0,
                                      `price_per_man` int(0) NOT NULL DEFAULT 0,
                                      `latitude` decimal(10, 6) NOT NULL DEFAULT 0,
                                      `longitude` decimal(10, 6) NOT NULL DEFAULT 0,
                                      `category_id` int(0) NOT NULL DEFAULT 0,
                                      `tags` varchar(2000) NOT NULL DEFAULT '',
                                      `start_time` varchar(200) NOT NULL DEFAULT '',
                                      `end_time` varchar(200) NOT NULL DEFAULT '',
                                      `address` varchar(200) NOT NULL DEFAULT '',
                                      `seller_id` int(0) NOT NULL DEFAULT 0,
                                      `icon_url` varchar(100) NOT NULL DEFAULT '',
                                      PRIMARY KEY (`id`)
);