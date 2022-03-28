import React, {Component} from "react";
import {StyleSheet, View, FlatList, Text, Image, TouchableOpacity} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeImg:require('../src/img/like.png'),
            feed: [
                {
                    id: '1',
                    nome: 'Lucas Silva',
                    descricao: 'Mais um dia de muitos bugs :) Mais um dia de muitos bugs :)Mais um dia de muitos bugs :)Mais um dia de muitos bugs :)',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
                    likeada: false,
                    likers: 0
                },
                {
                    id: '2',
                    nome: 'Matheus',
                    descricao: 'Isso sim é ser raiz!!!!!',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
                    likeada: false,
                    likers: 0
                },
                {
                    id: '3',
                    nome: 'Jose Augusto',
                    descricao: 'Bora trabalhar Haha',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
                    likeada: false,
                    likers: 3
                },
                {
                    id: '4',
                    nome: 'Gustavo Henrique',
                    descricao: 'Isso sim que é TI!',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
                    likeada: false,
                    likers: 1
                },
                {
                    id: '5',
                    nome: 'Guilherme',
                    descricao: 'Boa tarde galera do insta...',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                    likeada: false,
                    likers: 32
                }
            ]
        }
        this.showLikes = this.showLikes.bind(this)
        this.likePhoto = this.likePhoto.bind(this)
    }

    showLikes(likers) {
            if(likers > 0) {
                return (
                    <Text style={styles.likes}>{likers} {likers > 1 ? 'Likes' : 'Like'}</Text>
                )
            }
    }
    likePhoto(id) {
        let feed = this.state.feed[id]
        console.log(feed.likeada)
    }

    render() {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.feed}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.areaView}>
                            <View style={styles.profileView}>
                                <Image source={{uri: item.imgperfil}} style={styles.userPhoto} resizeMode="cover"/>
                                <Text style={styles.userName}>{item.nome}</Text>
                            </View>
                            <Image source={{uri: item.imgPublicacao}} style={styles.publicationImage}
                                   resizeMode="cover"/>
                            <View style={styles.likeBarView}>
                                <TouchableOpacity onPress={() => this.likePhoto(index)}>
                                    <Image source={this.state.likeImg} style={styles.liked}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../src/img/send.png')} style={styles.liked}/>
                                </TouchableOpacity>
                            </View>
                            {this.showLikes(item.likers)}
                            <View style={styles.descriptionView}>
                                <Text style={{fontWeight:"bold"}}>{item.nome}</Text>
                                <Text style={styles.description}>{item.descricao}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        );
    }
}

const
    styles = StyleSheet.create({
        areaView: {
            marginTop: 30
        },
        profileView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        userPhoto: {
            width: 45,
            height: 45,
            borderRadius: 50
        },
        userName: {
            marginLeft: 5,
            fontSize: 16
        },
        publicationImage: {
            flex: 1,
            height: 400,
            marginTop: 3
        },
        descriptionView: {
            flexDirection:"row",
            alignItems:"flex-start",
            padding:5,
        },
        description: {
            flex:1,
            marginLeft:5,
        },
        likeBarView: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 3
        },
        liked: {
            width: 30,
            height: 30
        },
        likes: {
            marginLeft: 5
        }
    });
