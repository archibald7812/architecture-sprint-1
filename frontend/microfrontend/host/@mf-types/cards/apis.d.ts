
    export type RemoteKeys = 'cards/Cards';
    type PackageType<T> = T extends 'cards/Cards' ? typeof import('cards/Cards') :any;