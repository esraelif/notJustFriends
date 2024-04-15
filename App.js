import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import LikeImage from "./assets/images/like.png";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
        {post.description && (<Text style={styles.description}>{post.description}</Text>)}
        {post.image && (<Image source={{ uri: post.image }} style={styles.image} />)}
        {/* Footer*/}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>Nur Zehra and {post.numberOfLikes} others</Text>
            <Text style={styles.numberOfShares}>{post.numberOfShares} shares</Text>
          </View>
          {/* Buttons Row */}
          <View style={styles.buttonsRow}>
            <View style={styles.iconButton}>
              <AntDesign name='like2' size={18} color='gray' />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            <View style={styles.iconButton}>
              <FontAwesome5 name='comment-alt' size={18} color='gray' />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>


            <View style={styles.iconButton}>
              <MaterialCommunityIcons name='share-outline' size={18} color='gray' />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>


          </View>
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
  //Header
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
  },
  //Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },

  //Footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {

  },
  numberOfShares: {
    marginLeft: "auto",

  },
  //Buttons row:
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  }

});
