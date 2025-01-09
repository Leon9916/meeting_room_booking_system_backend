import { ApiProperty } from '@nestjs/swagger';

interface Permission {
  id: number;
  code: string;
  description: string;
}

export class UserInfo {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: 'zhansgan' })
  username: string;

  @ApiProperty({ example: '张三' })
  nickName?: string;

  @ApiProperty({ example: 'xx@xx.com' })
  email?: string;

  @ApiProperty({ example: 'xxx.png' })
  headPic?: string;

  @ApiProperty({ example: '13122222222' })
  phoneNumber?: string;

  @ApiProperty()
  isFrozen?: boolean;

  @ApiProperty()
  isAdmin?: boolean;

  @ApiProperty()
  createTime?: number;

  @ApiProperty({ example: ['管理员'] })
  roles: string[];

  @ApiProperty({ example: 'query_aaa' })
  permissions: Permission[];
}

export class LoginUserVo {
  @ApiProperty()
  userInfo: UserInfo;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
