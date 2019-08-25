import React from 'react'
import { RouteComponentProps } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Content, Button, ThingDetailCard, CreatorDetailCard, DetailContainer, DetailImage, CreatorDetailImage, ThingDetailFooter } from '../elements/index';

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

export const ThingDetail: React.FC<RouteComponentProps<PathParams>> = props => {

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
        license
      }
    }
  `);

  if (loading) return <Content>&#x231B; Loading...</Content>;
  if (error) return <Content>&#x274C; There was an error</Content>;

  return (
    <Content>
      <DetailContainer>
        <CreatorDetailCard>
          <CreatorDetailImage src={thing.creator.thumbnail} alt="thumbnail" />
          <div>
            {thing.creator.name}
          </div>
          <div>
            {thing.creator.first_name}
          </div>
          <div>
            {thing.creator.last_name}
          </div>
        </CreatorDetailCard>
        <ThingDetailCard>
          <h1 className="title">
            {thing.name}
          </h1>
          <DetailImage src={thing.thumbnail} alt="thumbnail" />
          <div>
            <div>
              {thing.description}
            </div>
          </div>
          <ThingDetailFooter>
            License: {thing.license}
            <span>💕{thing.like_count}</span>
            <span>👀{thing.view_count}</span>
            <span>📥{thing.download_count}</span>
          </ThingDetailFooter>
        </ThingDetailCard>
        <Button onClick={props.history.goBack}>Back</Button>
      </DetailContainer>
    </Content>
  );
};
