import React from 'react'

export enum EThingsType {
    Latest = "latest",
    Newest = "newest",
    Popular = "popular",
    Featured = "featured"
}

export interface IThingsProps {
    thingsType: EThingsType
}

export const Things: React.FC<IThingsProps> = props => (
    <div>
        <h1>{props.thingsType}</h1>
    </div>
);
