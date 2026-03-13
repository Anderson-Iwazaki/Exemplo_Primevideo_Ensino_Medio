import AmazonLogo from '@/assets/images/amazon_logo.png';
import PrimeVideoLogo from '@/assets/images/prime_video.png';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <View>
                {/* MENU */}
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
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
    }
});