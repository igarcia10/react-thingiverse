import React from 'react'

export interface AThing { };

interface IThingProps extends AThing { };

export const Thing: React.FC<IThingProps> = () => {
    return (
        <div>

        </div>
    )
}
