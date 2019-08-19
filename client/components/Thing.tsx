import React from 'react'

export interface IThing { };

interface IThingProps extends IThing { };

export const Thing: React.FC<IThingProps> = () => {
    return (
        <div>

        </div>
    )
}
