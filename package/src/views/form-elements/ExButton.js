import React from 'react'

import { Grid, Box } from '@mui/material'

import { ColorButtons } from '../../components/forms/Button/ColorButtons'
import { SizeButton } from '../../components/forms/Button/SizeButton'

import { OutlinedColorButtons } from '../../components/forms/Button/OutlinedColorButtons'

import { TextColorButtons } from '../../components/forms/Button/TextColorButtons'

import { IconColorButtons } from '../../components/forms/Button/IconColorButtons'

import { FabDefaultButton } from '../../components/forms/Button/FabDefaultButton'

import { DefaultButtonGroup } from '../../components/forms/Button/DefaultButtonGroup'

const ExButton = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={3}>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <ColorButtons />
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <SizeButton />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <OutlinedColorButtons />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <TextColorButtons />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <IconColorButtons />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <FabDefaultButton />
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}>
          <DefaultButtonGroup />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ExButton
