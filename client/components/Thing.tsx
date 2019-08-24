import React from 'react'
import { RouteComponentProps } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Content } from '../elements/index';

interface PathParams {
  id: string,
}

export interface Creator {
  name: string,
  first_name: string,
  last_name: string,
  thumbnail: string
}

interface IThingModel {
  name: string,
  thumbnail: string,
  creator: Creator,
  like_count: number,
  download_count: number,
  view_count: number,
  description: string,
  instructions: string,
  details: string,
  license: string
};

interface IData {
  thing: IThingModel
}

export const Thing: React.FC<RouteComponentProps<PathParams>> = props => {

  const { loading, error, data: { thing } } = useQuery<IData>(gql`
    {
      thing(id: ${props.match.params.id}) {
        name
        thumbnail
        creator{
          name
          first_name
          last_name
          thumbnail
        }
        like_count
        download_count
        view_count
        description
        instructions
        details
        license
      }
    }
  `);

  if (loading) return <Content>&#x231B; Loading...</Content>;
  if (error) return <Content>&#x274C; Error :(</Content>;

  return (
    <div>
      <div>
        <div>
          <p>
            {thing.name}
          </p>
        </div>
        <img src={thing.thumbnail} alt="thumbnail" />
        <div>
          <div>
            {thing.description}
          </div>
          <div>
            {thing.instructions}
          </div>
          <span>{thing.like_count}</span>
          <span>{thing.view_count}</span>
          <span>{thing.download_count}</span>
        </div>
        <div>
          License: {thing.license}
        </div>
      </div>
      <div>
        <img src={thing.creator.thumbnail} alt="thumbnail" />
        <div>
          {thing.creator.name}
        </div>
        <div>
          {thing.creator.first_name}
        </div>
        <div>
          {thing.creator.last_name}
        </div>
        <div>
          💕
            </div>
        <div>
          👀
            </div>
        <div>
          📥
            </div>
      </div>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
};
