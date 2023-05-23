import { AppBar, Toolbar, Typography, Box, Menu, MenuItem } from "@mui/material";
import { useLocation } from "wouter";
import useUser from '../../hooks/useUser'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { ExitToApp } from "@mui/icons-material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useEffect, useState } from "react";
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from 'dayjs'
import { DateField } from '@mui/x-date-pickers/DateField'
import { getReportQualification } from "../../services/report/reportService";
import MoreVertIcon from '@mui/icons-material/MoreVert'

function convertDate(date) {
    const aux = new Date(date);
    const newDate = `${aux.getFullYear()}-${(aux.getMonth() + 1).toString().padStart(2, '0')}-${aux.getDate().toString().padStart(2, '0')}`;
    return newDate
}

export default function Header({ showReport }) {

    const { signOut, token } = useUser()
    const [, navigation] = useLocation()
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState(dayjs(new Date()))
    const [endDate, setEndDate] = useState(dayjs(new Date()))
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    function logout() {
        signOut()
        navigation('/')
    }

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange)

        return () => {
            document.removeEventListener("fullscreenchaneg", handleFullScreenChange)
        }
    }, [])

    const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement)
    }

    const fullScreen = () => {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else if (document.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen()
            } else if (document.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen()
            }
        }
        handleCloseMenu()
    }

    const downloadReport = () => {
        const start = convertDate(startDate)
        const end = convertDate(endDate)
        const result = getReportQualification(token, start, end)
        result.then((res) => {
            if (res.ok) {
                const blob = res.data
                const url = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.click()
                URL.revokeObjectURL(url)
                setOpen(false)
            }
        })
    }
    const getReport = () => {
        setOpen(true)
        handleCloseMenu()
    }

    const theme = createTheme({
        palette: {
            background: {
                default: '#ffffff'
            },
            borderBotton: {
                default: '#7BE421'
            }
        },
    })

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                color="default"
                sx={{ bgcolor: "background.default" }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >
                        <img src="/muserpol-logo2.png" alt="logo" height="50px" width="150px" style={{ marginTop: '6px' }} />
                    </Typography>
                    <IconButton
                        aria-label="more"
                        onClick={handleClick}
                        id="long-button"
                        color="primary"
                        sx={{ border: 1 }}
                        aria-controls={openMenu ? 'long-menu' : undefined}
                        aria-expanded={openMenu ? 'true' : undefined}
                        aria-haspopup="true"
                    >
                        <MoreVertIcon fontSize="medium" />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        PaperProps={{
                            style: {
                                width: '25ch'
                            }
                        }}
                    >
                        <MenuItem onClick={fullScreen}>
                            <IconButton color="primary" sx={{ border: 1, marginRight: 2 }}>
                                <FullscreenIcon fontSize="medium" />
                            </IconButton>
                            Pantalla completa
                        </MenuItem>
                        {
                            showReport && (
                                <MenuItem onClick={getReport}>
                                    <IconButton color="primary" sx={{ border: 1, marginRight: 2 }}>
                                        <SimCardDownloadOutlinedIcon fontSize="medium" />
                                    </IconButton>
                                    Descargar reporte
                                </MenuItem>
                            )
                        }
                        <MenuItem onClick={logout}>
                            <IconButton color="primary" sx={{ border: 1, marginRight: 2 }}>
                                <ExitToApp fontSize="small" />
                            </IconButton>
                            Salir
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Descargar reporte</DialogTitle>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DialogContent sx={{ width: '500px', paddingBottom: 0, }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', height: 70, paddingTop: 1 }}>
                            <DateField
                                label="Fecha inicial"
                                value={startDate}
                                onChange={(newStartDate) => setStartDate(newStartDate)}
                                sx={{
                                    marginRight: 2
                                }}
                            />
                            <DateField
                                label="Fecha final"
                                value={endDate}
                                onChange={(newEndDate) => setEndDate(newEndDate)}
                            />
                        </Box>
                    </DialogContent>
                </LocalizationProvider>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outlined" onClick={downloadReport}>Descargar</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}