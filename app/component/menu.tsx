import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Menu(props:any)
{
    return(
        <TouchableOpacity>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create(
    {
        text: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
);