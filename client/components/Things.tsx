import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ListedThingCard, ThingHeader, ListImage, InteractionFooter, CreatorImage } from '../elements/index'
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

interface IData {
  newest?: IThingListModel[],
  popular?: IThingListModel[],
  featured?: IThingListModel[],
  verified?: IThingListModel[],
}

export const Things: React.FC<IThingsProps> = ({ thingsType }) => {

  const { loading, error, data } = useQuery<IData>(gql`
    {
      ${thingsType} {
          id
          name
          thumbnail
          creator{
            name
            thumbnail
          }
        }
      }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data[thingsType].map(({ id, name, thumbnail, creator }) => (

        <ListedThingCard key={id}>
          <ThingHeader>
            <CreatorImage src={creator.thumbnail} alt="thumbnail" />
            <div>
              <span>{name}</span>
              <span>by {creator.name}</span>
            </div>
          </ThingHeader>
          <Link to={`/things/${id}`} >
            <ListImage src={thumbnail} alt="thumbnail" />
          </Link>
          <InteractionFooter>
            <div>

            </div>
          </InteractionFooter>
        </ListedThingCard>
      ))}
    </div>
  );
};
