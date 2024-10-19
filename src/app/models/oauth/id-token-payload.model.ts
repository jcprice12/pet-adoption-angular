import { Role } from './role.enum';
import { Scope } from './scope.enum';

export interface IdTokenPayload {
  sub: string;
  given_name: string;
  family_name: string;
  email?: string;
  [Scope.JCPETS_ROLES]?: Role[];
}
