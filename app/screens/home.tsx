import { MOVIESWATCHING } from '@/app/utils/moviesWatching';
import AmazonLogo from '@/assets/images/amazon_logo.png';
import MovieTheWhell from '@/assets/images/movies/the_wheel_of_time.png';
import PrimeVideoLogo from '@/assets/images/prime_video.png';
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Menu from '../component/menu';

export default function Home ()
{
    return (
        <View style={style.container}>
        {/* CONTAINER */}
            <View style={style.banner}>
                {/* BANNER */}
                <Image source={PrimeVideoLogo}/>
                <Image source={AmazonLogo} style={style.amazonImg}/>
            </View>
            <View style={style.menu}>
                {/* MENU */}
                <Menu text="Home"/>
                <Menu text="TV Show"/>
                <Menu text="Movies"/>
                <Menu text="Kids"/>
            </View>
            <ScrollView>
                <TouchableOpacity style={style.imgButton}>
                    <Image source={MovieTheWhell}/>
                </TouchableOpacity>

                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}) => (
                        
                    )}
                />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#232F3E'
    },
    banner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    amazonImg: {
        marginTop: -40,
        marginLeft: 37
    },
    menu: {
       flexDirection: 'row', 
       justifyContent: 'space-evenly',
       width: '100%',
       marginTop: 20
    },
    imgButton: {
        width: '100%',
        alignItems: 'center',
        flex: 1
    }
});