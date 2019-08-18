import React, { Component } from 'react'

export enum ThingsType {
    Latest = "latest",
    Newest = "newest",
    Popular = "popular",
    Featured = "featured"
}

interface ThingsProps {
    thingsType: ThingsType;
}

export const Things = (props: ThingsProps) => (
    <div>
        <h1>{props.thingsType}</h1>
    </div>
);
