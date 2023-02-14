import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator'



export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  @IsNotEmpty()
  password: string;

}


