import React from 'react';
import {
    GridWrapper,
    TableStyles,
    TdStyles,
    ThStyles
} from "../styles/GridStylesWrapper";


const GridTable = ({config, data, footer}) => (

    <GridWrapper>
        <TableStyles>

            <tr>
                {config.map((item, index) =>
                    <ThStyles scope='col' key={`th${index}`}>
                        {item}
                    </ThStyles>
                )}
            </tr>


            {data.map((item, index) =>

                <tr key={`tb1${index}`}>
                   <TdStyles key={`td0${index}`}>{item.id} </TdStyles>
                    <TdStyles key={`td1${index}`}> {item.weight}</TdStyles>
                    <TdStyles key={`td2${index}`}> {item.price}</TdStyles>
               </tr>
            )}

            <tr>
                {footer.map((item, index) =>
                    <ThStyles scope='col' key={`fo${index}`}>
                        {item}
                    </ThStyles>
                )}
            </tr>
        </TableStyles>
    </GridWrapper>

);

export default GridTable;