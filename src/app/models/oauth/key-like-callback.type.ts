import { FlattenedJWSInput, JWSHeaderParameters, KeyLike } from 'jose';

export type KeyLikeCallback = (
  protectedHeader?: JWSHeaderParameters,
  token?: FlattenedJWSInput
) => Promise<KeyLike>;
