const React = require('react');
const Root = require('../components/Root');
const Button = require('../components/Button')
const Navigation = require('../services/Navigation');
const {
  OPEN_LEFT_SIDE_MENU_BTN,
  OPEN_RIGHT_SIDE_MENU_BTN,
  CENTER_SCREEN_HEADER
} = require('../testIDs');
const Screens = require('./Screens');

class SideMenuCenterScreen extends React.Component {
  static options() {
    return {
      topBar: {
        testID: CENTER_SCREEN_HEADER,
        title: {
          text: 'Center'
        }
      }
    };
  }

  render() {
    return (
      <Root componentId={this.props.componentId}>
        <Button label='Open Left' testID={OPEN_LEFT_SIDE_MENU_BTN} onPress={() => this.open('left')} />
        <Button label='Open Right' testID={OPEN_RIGHT_SIDE_MENU_BTN} onPress={() => this.open('right')} />
        <Button label='MERGE OPTIONS' testID={'MERGE_OPTIONS_TEST'} onPress={this.execMergeOptions} />
      </Root>
    );
  }

  execMergeOptions = () => {
    Navigation.mergeOptions(this, {
      topBar: {
        leftButtons: [
          {
            id: 'CUSTOM_BUTTON_ID',
            component: {
              name: 'CUSTOM_TOP_BAR_BUTTON',
            }
          }
        ],
      }
    })
  }

  open = (side) => Navigation.mergeOptions(this, {
    sideMenu: {
      [side]: { visible: true }
    }
  });
}

module.exports = SideMenuCenterScreen;
