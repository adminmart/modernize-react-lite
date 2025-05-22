import React from 'react'

import { Grid } from '@mui/material'

import { FbDefaultForm } from './fb-elements/index'

const FormLayouts = () => {
  return (
    <Grid container spacing={0}>
      <Grid item size={{ sm: 12 }}>
        <FbDefaultForm />
      </Grid>
    </Grid>
  )
}

export default FormLayouts
