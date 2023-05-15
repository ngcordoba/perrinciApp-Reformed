import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native';
import { theme } from '../../../theme';


const ButtonRegular = styled.TouchableOpacity`
    background-color: #0984E3;
    width: 65%;
    height: 55px;
    border-radius: 18px;
    margin-bottom: 30px;  
    margin: 20px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px;
`;

const ButtonText = styled.Text`
  color: ${props => theme.colors.text.white} 
  fontSize: ${props => theme.fontSizes.buttonText};
`;

const Profile = () => {

    const navigation = useNavigation ();

    return (
      
      <View>
          <Text> Perfil usuario </Text>
          <ButtonRegular onPress={() => navigation.navigate ("DogProfile")}>
                <ButtonText style={{textAlign:"center"}}> Visualizar perfil de mi mascota </ButtonText>
              </ButtonRegular>
          </View>
      
      
    )
  }
  
  export default Profile