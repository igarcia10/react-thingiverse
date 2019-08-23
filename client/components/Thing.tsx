import React from 'react'
import { RouteComponentProps } from 'react-router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const Thing: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const { loading, error, data } = useQuery(gql`
    {
      thing(id: ${match.params.id}) {
        id
        name
      }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {Object.keys(data.thing).map((k, i) => (
                <div key={i}>
                    <p>
                        {data.thing[k]}
                    </p>
                </div>))}
        </div>
    );
};
