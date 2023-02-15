import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'src/common/utils/hashing';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Partial<User> | null> {
    const user = await this.usersService.findByUsername(username);
    const result = await compare(password, user.password);
    if (user && result) {
      const { _id } = user;
      return { _id };
    }
    return null;
  }

  async login(payload: Partial<User>) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
