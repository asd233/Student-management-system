/*
 Navicat Premium Data Transfer

 Source Server         : localhost3306
 Source Server Type    : MySQL
 Source Server Version : 50612
 Source Host           : localhost:3306
 Source Schema         : system

 Target Server Type    : MySQL
 Target Server Version : 50612
 File Encoding         : 65001

 Date: 11/06/2021 15:51:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `passWord` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`userName`, `passWord`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('admin', '123');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `edu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `salary` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bonus` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('2', '2', '男', '2', '大专', '2', '2', '2');
INSERT INTO `student` VALUES ('3', '3', '男', '3', '大专', '3', '3', '3');
INSERT INTO `student` VALUES ('4', '4', '男', '4', '大专', '4', '4', '4');
INSERT INTO `student` VALUES ('5', '5', '男', '5', '大专', '5', '5', '5');
INSERT INTO `student` VALUES ('6', '6', '男', '6', '大专', '6', '6', '6');
INSERT INTO `student` VALUES ('7', '7', '男', '7', '大专', '7', '7', '7');
INSERT INTO `student` VALUES ('8', '8', '男', '8', '大专', '8', '8', '8');
INSERT INTO `student` VALUES ('9', '9', '男', '9', '大专', '9', '9', '9');
INSERT INTO `student` VALUES ('10', '10', '男', '10', '大专', '10', '10', '10');
INSERT INTO `student` VALUES ('11', '11', '男', '11', '大专', '11', '11', '11');
INSERT INTO `student` VALUES ('12', '12', '男', '12', '大专', '12', '12', '12');
INSERT INTO `student` VALUES ('13', '13', '男', '13', '大专', '13', '13', '13');
INSERT INTO `student` VALUES ('14', '14', '男', '14', '大专', '14', '14', '14');
INSERT INTO `student` VALUES ('15', '15', '男', '15', '大专', '15', '15', '15');
INSERT INTO `student` VALUES ('16', '16', '男', '16', '大专', '16', '16', '16');
INSERT INTO `student` VALUES ('17', '17', '男', '17', '大专', '17', '17', '17');
INSERT INTO `student` VALUES ('18', '18', '男', '18', '大专', '18', '18', '18');
INSERT INTO `student` VALUES ('19', '21', '男', '21', '大专', '21', '21', '21');
INSERT INTO `student` VALUES ('20', '22', '男', '22', '大专', '22', '22', '22');

SET FOREIGN_KEY_CHECKS = 1;
