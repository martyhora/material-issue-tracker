import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import { pink500 } from 'material-ui/styles/colors';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';

const ProjectsMenu = ({
  projects,
  selectedProject,
  onProjectSelect,
  onProjectEditSelect,
}) => (
  <List>
    {projects.map((project, i) => (
      <ListItem
        key={i}
        primaryText={project.name}
        onClick={() => {
          onProjectSelect(project.id);
        }}
        style={{ color: selectedProject === project.id ? pink500 : '#000' }}
        rightIcon={
          <ModeEditIcon
            onClick={() => {
              onProjectEditSelect(project.id);
            }}
          />
        }
      />
    ))}
  </List>
);

export default ProjectsMenu;
