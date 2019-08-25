import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ListedThingCard, ThingHeader, ListImage, ListFooter, CreatorImage, Content } from '../elements/index'
import { Creator } from './ThingDetail';

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

export const ThingList: React.FC<IThingsProps> = ({ thingsType }) => {

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

  if (loading) return <Content>&#x231B; Loading...</Content>;
  if (error) return <Content>&#x274C; There was an error</Content>;

  return (
    <Content>
      {data[thingsType].map(({ id, name, thumbnail, creator }) => (
        <ListedThingCard key={id}>
          <Link to={`/things/${id}`} style={{ textDecoration: 'none' }}>
            <ThingHeader>
              <CreatorImage src={creator.thumbnail} alt="thumbnail" />
              <div className="headerContent">
                {creator.name}
              </div>
            </ThingHeader>
            <ListImage src={thumbnail} alt="thumbnail" />
            <ListFooter>
              <div>{name}</div>
            </ListFooter>
          </Link>
        </ListedThingCard>
      ))}
    </Content>
  );
};
