import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import './resume.css'

export default function Resume(){
    return(
        <div class="resume">
            <div class="about">
                <div class="aboutText">
                    <h2>About</h2>
                    <p>Senior software engineer who loves learning and also mentoring others. 
                        My biggest advantage is flexibility and ability to jump into different technologies.
                    </p>
                </div>
                <contacts>
                    <h2>Contacts</h2>
                    <li>martins@techbearcoding.lv</li>
                </contacts>
                <div class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Angular,VueJs, React</li>
                    </ul>
                </div>
            </div>

            <div class="experience">
                <List sx={{ 
                        width: '100%', 
                        maxWidth: 360
                    }}
                >
                    <ListItem>
                        <ListItemIcon>
                            <FolderOpenIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Lead Software engineer, SIA Kleintech"
                            secondary="Nov 2023 - Now"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FolderOpenIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary="CEO/Lecturer, Techbear Coding"
                            secondary="Nov 2020 - Now"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FolderOpenIcon />
                        </ListItemIcon>                        
                        <ListItemText 
                            primary="Senior Software engineer, Luminor"
                            secondary="Apr 2022 - Nov 2023"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FolderOpenIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Senior Software engineer, Avalanche Laboratory"
                            secondary="May 2021 - Feb 2022"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FolderOpenIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Software engineer, Swedbank"
                            secondary="May 2019 - Apr 2021"
                        />
                    </ListItem>
                    
                </List>
            </div>
            
        </div>
    );
}