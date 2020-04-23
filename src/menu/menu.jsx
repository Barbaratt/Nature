import React from 'react';
import './menu.scss';
import { FontIcon, ListItem, MenuButton } from 'react-md';

const MenuButtonExamples = () => {
    return (
    <div className="menu">
        <MenuButton
            id="menu-button-2"
            icon
            menuItems={[
            <ListItem key={1} primaryText="1" />,
            <ListItem key={2} primaryText="2" />,
            ]}
            listInline
            centered
            anchor={{
            x: MenuButton.HorizontalAnchors.CENTER,
            y: MenuButton.VerticalAnchors.CENTER,
            }}
        >
            Mais opções
      </MenuButton>
    </div>
    )
}

export default MenuButtonExamples;