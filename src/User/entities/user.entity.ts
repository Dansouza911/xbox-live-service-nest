import { Profile } from "src/Profile/entities/profile.entity";

export class User {
  id?: string;
  user_name: string;
  email: string;
  password: string;
  is_admin: boolean;
  cpf: string;
  profiles?: Partial<Profile>[]
  created_at?: Date;
  updated_at?: Date;
}
