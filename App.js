import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const post = {
  id: "p1",
  createdAt: "9 m",
  User: {
    id: "u1",
    image:
      "https://images.pexels.com/photos/18702616/pexels-photo-18702616/free-photo-of-fincan-kupa-isim-ad.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Esra Elif",
  },
  description:
    "Standing atop the cliff, mesmerized by the azure expanse, waves crashing below, serenity embraces. Nature's masterpiece unfolds, a canvas of beauty.",
  image: "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=600",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: post.User.image }} style={styles.profileImage} />
          <View >
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />

        </View>

        {/* Body*/}
        {/* <View style={styles.body}>

        </View> */}

        {/* Footer*/}
        <View style={styles.footer}>

        </View>


      </View>





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "coral",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "600"
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto"
  }

});
