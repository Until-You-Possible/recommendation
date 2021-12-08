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
