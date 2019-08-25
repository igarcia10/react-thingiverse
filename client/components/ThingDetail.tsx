import React from 'react'
import { RouteComponentProps } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Content, Button, DetailContainer, DetailCreatorImage, DetailHeader, DetailImage, DetailFooter, DescriptionContainer, ThingContainer } from '../elements/index';
import { SideBar } from '../elements/SideBar';

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
      <SideBar>
        <Button style={{ marginTop: '6px' }} onClick={props.history.goBack}>BACK</Button>
        <div>💕 {thing.like_count}</div>
        <div>👀 {thing.view_count}</div>
        <div>📥 {thing.download_count}</div>
      </SideBar>
      <DetailContainer>
        <DetailHeader>
          <DetailCreatorImage src={thing.creator.thumbnail} alt="thumbnail" />
          <div className="names">
            <div className="thingName">
              {thing.name}
            </div>
            <div className="creatorName">
              by {thing.creator.name} ({thing.creator.first_name} {thing.creator.last_name})
            </div>
          </div>
        </DetailHeader>
        <ThingContainer>
          <DetailImage src={thing.thumbnail} alt="thumbnail" />
          <DescriptionContainer>
            <h2 style={{ marginTop: '0px' }}>Description: </h2>
            {thing.description}
            <DetailFooter>
              License: {thing.license}
            </DetailFooter>
          </DescriptionContainer>
        </ThingContainer>
      </DetailContainer>
    </Content>
  );
};
