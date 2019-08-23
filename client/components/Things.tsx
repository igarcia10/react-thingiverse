import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Creator } from './Thing';

export enum EThingsType {
  Newest = "newest",
  Popular = "popular",
  Featured = "featured",
  Verified = "verified"
};

export interface IThingsProps {
  thingsType: EThingsType
};

interface IThingListModel {
  id: number,
  name: string,
  thumbnail: string,
  creator: Creator
};

export const Things: React.FC<IThingsProps> = ({ thingsType }) => {

  const { loading, error, data } = useQuery<IThingListModel>(gql`
    {
      ${thingsType} {
          id
          name
          thumbnail
          creator{
            name
            first_name
            last_name
            thumbnail
          }
        }
      }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data[thingsType].map(({ id, name, thumbnail, creator }) => (
    <Link key={id} to={`/things/${id}`}>
      <div>
        <p>
          {name}
        </p>
      </div>
      <img src={thumbnail} alt="thumbnail" />
      <div>
        <div>
          <img src={creator.thumbnail} alt="thumbnail" />
          <div>
            {creator.name}
          </div>
          <div>
            {creator.first_name}
          </div>
          <div>
            {creator.last_name}
          </div>
        </div>
      </div>
    </Link>
  ));
};
