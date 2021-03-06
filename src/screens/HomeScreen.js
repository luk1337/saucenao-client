import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";
import { Asset, AppLoading, ImagePicker } from "expo";
import Touchable from "react-native-platform-touchable";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f51b5",
  },

  logo: {
    marginBottom: 32,
  },

  logoImage: {
    width: 240,
    height: 80,
  },

  button: {
    elevation: 2,
    width: 128,
    height: 64,
    borderRadius: 2,
    backgroundColor: "#e91e63",
  },

  buttonLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    color: "#fff",
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  state = {
    ready: false,
  };

  async componentDidMount() {
    await this.loadAssets();
    this.setState({ ready: true });
  }

  async loadAssets() {
    const assets = [require("../../assets/logo.png")];
    await Promise.all(assets.map(asset => Asset.loadAsync(asset)));
  }

  handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.props.navigation.navigate("Result", { image: result });
    }
  };

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            fadeDuration={0}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.button}>
          <Touchable
            style={styles.buttonLayout}
            background={Touchable.SelectableBackgroundBorderless()}
            onPress={this.handlePress}
          >
            <Text style={styles.buttonText}>Select Image</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
