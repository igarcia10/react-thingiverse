import React from 'react'
import { AThing } from './Thing';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export enum EThingsType {
    Newest = "newest",
    Popular = "popular",
    Featured = "featured",
    Verified = "verified"
}

export interface IThingsProps extends AThing {
    thingsType: EThingsType
}

export const Things: React.FC<IThingsProps> = ({ thingsType }) => {
    const { loading, error, data } = useQuery(gql`
    {
      ${thingsType} {
        id
        name
      }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data[thingsType].map(({ id, name }) => (
        <div key={id}>
            <p>
                {id}: {name}
            </p>
        </div>
    ));
};
