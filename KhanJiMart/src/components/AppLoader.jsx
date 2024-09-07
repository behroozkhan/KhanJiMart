import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

const AppLoader = () => {
    return (
        <Stack sx={{ width: '100%', height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
        </Stack>
    )
}

export default AppLoader