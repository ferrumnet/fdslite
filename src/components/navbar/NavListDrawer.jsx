import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export default function NavListDrawer({navLinks}){
    return (
        <Box sx={{width: 250, bgcolor:"#inherit"}}>
        
        <nav>
            <List>
                {
                    navLinks.map(item => (
                        <ListItem key={item.title}>
                        <ListItemButton component="a" href={item.path}>
                        <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        </nav>

        </Box>
    )
 }