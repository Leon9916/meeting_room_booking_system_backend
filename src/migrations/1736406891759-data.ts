import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1736406891759 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `users`(`id`,`username`,`password`,`email`,`isFrozen`,`createTime`,`updateTime`,`isAdmin`,`nick_name`,`headPic`,`phoneNumber`) VALUES (1,'leon','e10adc3949ba59abbe56e057f20f883e','xxx@xx.com',1,'2024-10-10 07:20:20.241668','2024-12-12 09:16:17.000000',0,'逆风哭泣',NULL,NULL),(2,'leon2','e10adc3949ba59abbe56e057f20f883e','2476288442@qq.com',1,'2024-10-10 09:07:42.914823','2024-12-12 09:17:39.000000',0,'逆风哭泣',NULL,NULL),(3,'zhangsan','e10adc3949ba59abbe56e057f20f883e','2476288442@qq.com',1,'2024-10-10 09:32:49.808740','2024-12-19 08:41:26.000000',1,'李四','uploads\\1734597050894-40488869-å°é¸¡æ¯.jpg','13233323333'),(4,'lisi','e10adc3949ba59abbe56e057f20f883e','yy@yy.com',1,'2024-10-10 09:32:49.819927','2024-12-12 09:22:42.000000',0,'liao','liao.png',NULL),(7,'liao','e10adc3949ba59abbe56e057f20f883e','2476288442@qq.com',0,'2024-12-03 09:03:17.913436','2024-12-12 06:54:58.000000',0,'liao666','uploads\\1733986496043-534623916-å½å¾½.jpg',NULL)",
    );
    await queryRunner.query(
        "INSERT INTO `meeting_room` VALUES (1,'木星2',10,'一层西','白板','',0,'2024-12-30 08:29:46.099000','2024-12-30 08:29:46.099000'),(2,'金星',5,'二层东','','',0,'2024-12-30 08:29:46.099481','2024-12-30 08:29:46.099481'),(17,'123',1,'ewq','123','',0,'2024-12-31 08:16:47.989584','2024-12-31 08:16:47.989584')",
      );
    await queryRunner.query(
      "INSERT INTO `booking`(`id`,`startTime`,`endTime`,`status`,`note`,`createTime`,`updateTime`,`userId`,`roomId`) VALUES (5,'2023-12-31 09:40:59','2023-12-31 09:57:39','已解除','','2025-01-02 08:39:16.100303','2025-01-06 06:26:12.000000',1,2),(12,'2023-12-31 09:42:39','2023-12-31 09:40:59','审核通过','','2025-01-02 08:49:20.976434','2025-01-06 08:16:35.028521',2,1),(13,'2023-12-31 09:42:39','2023-12-31 09:40:59','审批驳回','','2025-01-02 08:49:25.077584','2025-01-06 08:16:35.030154',3,1),(14,'2023-12-31 09:42:39','2023-12-31 09:40:59','已解除','','2025-01-02 08:49:40.549219','2025-01-06 08:16:35.031308',4,1),(15,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','','2025-01-06 07:16:09.914484','2025-01-06 08:16:35.032330',7,1),(16,'2023-12-31 09:42:39','2023-12-31 09:40:59','已解除','','2025-01-02 08:49:40.549219','2025-01-06 07:17:25.000000',1,1),(17,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','','2025-01-06 07:16:09.914484','2025-01-06 07:16:09.914484',2,1),(18,'2023-12-31 09:42:39','2023-12-31 09:40:59','已解除','','2025-01-02 08:49:40.549219','2025-01-06 07:17:25.000000',3,1),(19,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','','2025-01-06 07:16:09.914484','2025-01-06 07:16:09.914484',4,1),(20,'2023-12-31 09:42:39','2023-12-31 09:40:59','已解除','','2025-01-02 08:49:40.549219','2025-01-06 07:17:25.000000',7,1),(21,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','','2025-01-06 07:16:09.914484','2025-01-06 07:16:09.914484',1,1)",
    );
    await queryRunner.query(
      "INSERT INTO `permissions` VALUES (1,'ccc','访问CCC接口'),(2,'ddd','访问DDD接口'),(3,'ccc','访问CCC接口'),(4,'ddd','访问DDD接口')",
    );
    await queryRunner.query(
      "INSERT INTO `roles` VALUES (1,'管理员'),(2,'普通用户'),(3,'管理员'),(4,'普通用户')",
    );
    await queryRunner.query(
      'INSERT INTO `role_permissions` VALUES (1,1),(1,2),(2,1),(3,3),(3,4),(4,3)',
    );
    await queryRunner.query('INSERT INTO `user_roles` VALUES (3,1),(4,2)');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE booking');
  }
}
