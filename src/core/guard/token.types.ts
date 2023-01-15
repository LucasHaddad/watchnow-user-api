export type TokenData = {
    userId: string;
    sub: string;
    roles?: string[];
};

export type DecodedJwtToken = {
    globalId: string;
    sub: string;
    uid: string;
    iat: number;
    exp: number;
    roles: string[];
    _ts: number;
};
  