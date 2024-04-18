import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from "react-native";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";


const user = {
    "id": "u1",
    "image": "https://images.pexels.com/photos/8233556/pexels-photo-8233556.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1",
    "name": "Zehra",
}



const CreatePostScreen = () => {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    // const insets = useSafeAreaInsets();


    const onSubmit = () => {
        console.warn("On Submit", description)
        setDescription("")

        navigation.goBack();
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, { marginBottom: 10 }]}
            contentContainerStyle={{ flex: 1 }}

        >
            <View style={styles.header}>
                <Image source={{ uri: user.image }} style={styles.images} />
                <Text style={styles.name}> {user.name}</Text>
                <Entypo
                    onPress={pickImage}
                    name="images"
                    size={24}
                    color="limegreen"
                    style={styles.icon}
                />
            </View>
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder='What is on your mind?' multiline />

            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.buttonContainer}>
                <Button title="Post" onPress={onSubmit} />
            </View>


        </KeyboardAvoidingView>





    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        paddingTop: 50,
        backgroundColor: "#fff"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",

        marginBottom: 10,
    },
    images: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        fontWeight: "500"
    },
    buttonContainer: {
        marginTop: "auto",
    },
    icon: {
        marginLeft: "auto"
    },
    image: {
        width: "50%",
        aspectRatio: 4 / 3,
        alignSelf: "center",

    }
})

export default CreatePostScreen;
