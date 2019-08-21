import React from 'react'
import { AThing } from './Thing';

export enum EThingsType {
    Newest = "newest",
    Popular = "popular",
    Featured = "featured",
    Verified = "verified"
}

export interface IThingsProps extends AThing {
    thingsType: EThingsType
}

export const Things: React.FC<IThingsProps> = ({ thingsType }) => (
    <div>
        <h1>{thingsType}</h1>
    </div>
);
