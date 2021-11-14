import { Module } from '@nestjs/common';

import { AuthService } from './service/auth.service';
import { UserRoleService } from './service/user-role.service';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserRoleEntity } from './entity/user-role.entity';
import { UserCredentialsEntity } from './entity/user-credentials.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserRoleEntity,
      UserCredentialsEntity,
    ]),
  ],
  providers: [AuthService, UserRoleService, UserService],
})
export class UserModule {}
