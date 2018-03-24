-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2018-03-24 08:37:33.631

-- tables
-- Table: CampusMajorPassed
CREATE TABLE CampusMajorPassed (
    id bigint NOT NULL,
    majorID bigint NULL COMMENT '专业ID',
    campusID bigint NULL COMMENT '学校ID',
    passed int NULL DEFAULT 0 COMMENT '通过人数',
    CONSTRAINT CampusMajorPassed_pk PRIMARY KEY (id)
) COMMENT '学校-分类-通过数
关系表 用于排行';

-- Table: UserpassedQ
CREATE TABLE UserpassedQ (
    id bigint NOT NULL,
    uid bigint NULL COMMENT '用户ID',
    qid bigint NULL COMMENT '通过的题目ID',
    CONSTRAINT UserpassedQ_pk PRIMARY KEY (id)
) COMMENT '用户-通过的题目 关系表
用于统计用户通过了哪些题目
统计用户通过的题目分类占比';

-- Table: campus
CREATE TABLE campus (
    id bigint NOT NULL,
    name varchar(30) NOT NULL COMMENT '学校名字',
    members int NULL DEFAULT 0 COMMENT '成员数',
    CONSTRAINT campus_pk PRIMARY KEY (id)
) COMMENT '高校表';

-- Table: group
CREATE TABLE `group` (
    id bigint NOT NULL,
    name varchar(15) NULL COMMENT '群组名字',
    creator bigint NULL COMMENT '创建者ID',
    members varchar(500) NOT NULL COMMENT '群组成员ID 以“，”分隔',
    CONSTRAINT group_pk PRIMARY KEY (id)
) COMMENT '群组表 群组人数限制100';

-- Table: label
CREATE TABLE label (
    id bigint NOT NULL,
    name varchar(10) NULL COMMENT '标签名 不可重复',
    CONSTRAINT label_pk PRIMARY KEY (id)
) COMMENT '标签表';

-- Table: major
CREATE TABLE major (
    id bigint NOT NULL,
    name char(20) NULL COMMENT '专业名字',
    parent bigint NULL COMMENT '专业类的id',
    ranklist varchar(100) NOT NULL,
    CONSTRAINT major_pk PRIMARY KEY (id)
) COMMENT '专业表';

-- Table: question
CREATE TABLE question (
    id bigint NOT NULL,
    type int NULL COMMENT '题型 选择1 判断2 填空3',
    q varchar(255) NULL COMMENT '问题内容',
    A char(1) NOT NULL COMMENT '选项A',
    B char(1) NOT NULL COMMENT '选项B',
    C char(1) NOT NULL COMMENT '选项C',
    D char(1) NOT NULL COMMENT '选项D',
    TF char(1) NOT NULL COMMENT '正确/错误选项 只可能有T/F两种值',
    blank varchar(255) NOT NULL COMMENT '填空的答案',
    correct varchar(10) NULL COMMENT '正确答案',
    majorID bigint NULL COMMENT '所在分类ID',
    challenges int NULL DEFAULT 0 COMMENT '挑战人数',
    passed int NULL DEFAULT 0 COMMENT '通过人数',
    level int NULL COMMENT '问题难度星级',
    balels varchar(255) NOT NULL COMMENT '标签 多个用逗号分开',
    CONSTRAINT question_pk PRIMARY KEY (id)
) COMMENT '问题表';

-- Table: user
CREATE TABLE user (
    id bigint NOT NULL,
    name varchar(15) NULL COMMENT '用户名',
    pass varchar(20) NULL COMMENT '密码',
    identify int NULL COMMENT '管理员1 普通用户2',
    email varchar(40) NOT NULL COMMENT '用户邮箱',
    tel varchar(20) NOT NULL COMMENT '用户电话',
    campusID bigint NOT NULL COMMENT '所在学校ID',
    major bigint NOT NULL COMMENT '所在专业ID',
    vice int NOT NULL COMMENT '副专业 多个用“，”分隔',
    CONSTRAINT user_pk PRIMARY KEY (id)
) COMMENT '用户表';

-- End of file.

