import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <NotificationsIcon
                onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '30px' }}
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "#E8E1D9",
                            padding: '16px', // Adicione espaçamento interno se necessário
                        },
                    },
                }}
            >
                <Typography sx={{ p: 2 }}>
                    {/*TODO - Trazer as notificações*/}
                    Notificações de inclusão de frutas...
                </Typography>
            </Popover>
        </>
    );
}

export default Notification
