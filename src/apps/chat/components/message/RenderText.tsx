import * as React from 'react';

import { Chip, Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

import { extractCommands } from '../../commands';

import { TextBlock } from './blocks';

import { Button} from '@mui/joy';

const myButton = (
  <Button>
    My Button
  </Button>
);


export const RenderText = ({ textBlock, sx }: { textBlock: TextBlock; sx?: SxProps; }) => {
  const elements = extractCommands(textBlock.content);

  const handleCustomButtonClicked = async () => {
    console.log('Custom button clicked');
  };  

  return (
    <Typography
      sx={{
        lineHeight: 1.75,
        mx: 1.5,
        display: 'flex', alignItems: 'baseline',
        overflowWrap: 'anywhere',
        whiteSpace: 'break-spaces',
        ...(sx || {}),
      }}
    >
          {/* <Button onClick={handleCustomButtonClicked}>
            {myButton}
          </Button> */}
          {elements.map((element, index) =>
            element.type === 'cmd'
              ? <Chip key={index} component='span' size='md' variant='solid' color='neutral' sx={{ mr: 1 }}>{element.value}</Chip>
              : <span key={index}>{element.value}</span>,
          )}
        </Typography>
      );
};