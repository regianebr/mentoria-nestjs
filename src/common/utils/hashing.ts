import * as bcrypt from 'bcrypt';

export const hash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, await bcrypt.genSalt());
};

export const compare = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
