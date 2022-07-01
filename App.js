import { View , Text , Dimensions, Image ,StatusBar } from 'react-native-web';
import * as React from "react";
import {
      MaterialCommunityIcons,
      AntDesign,
      SimpleLineIcons
} from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';
import {TouchableOpacity} from 'react-native-web';
const Layout ={
  height:Dimensions.get('window').height,
  width:Dimensions.get('window').width
}
const colors = {
  theme : '#D9B44A',
  white : '#fff' ,
  greyish : '#000'
}
const SkillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-typescript",
  "language-java",

]
const Projects = [
  {
    name : 'Chat-App',
    icon : 'dingding'
  },
  {
    name : 'TODO List React Js',
    icon : 'microphone'
  },
  {
    name : 'Tic Tac Toe',
    icon : 'shopping-music'
  },
]
export default function App(props) {
  return (
    <ScrollView style={{flex : 1}}>
      {/**
       * Partie Présentation
       */}
        <StatusBar 
        translucent={false} 
        barStyle="light-content" 
        backgroundColor={colors.theme} />
        <View style={{ 
          backgroundColor : colors.theme,
          paddingBottom : Layout.height*0.2 ,
          borderBottomLeftRadius : Layout.width * 0.1 ,
          borderBottomRightRadius : Layout.width * 0.1 ,
          }}>
          <View style={{ 
              alignItems : "flex-end" ,
              paddingHorizontal : 32,
              marginVertical : 20,
             
            }}>
              <SimpleLineIcons
              name = "equalizer"
              size = {20}
              style={{
                color : colors.white
              }}
              />
          </View>
          <View style={{
            flexDirection : "row",
            paddingHorizontal : 32,
            marginVertical : 36,
            alignItems : "center",
            justifyContent : "flex-start"
          }}>
            <Image style={{
              width : 90,
              height : 90,
              borderRadius : 50
            }}
            source={
              require("./assets/image.jpg")
            }
            />
            <View>
            <Text style={{
              fontSize : 20,
              color : colors.white,
              paddingHorizontal : 13,
            }}>
              Ylan Rab
            </Text>
            <Text style={{
              color : colors.greyish,
              paddingHorizontal : 13,
              }}>
                React Native Dev Junior
            </Text>
            </View>
          </View>
        </View>

        <View style={{
          backgroundColor : colors.white,
          marginHorizontal : 32,
          padding : 20,
          borderRadius : 20,
          borderColor : colors.theme,
          elevation : 8,
          marginBottom : 16,
          marginTop : -Layout.height * 0.15
        }}>
          <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginVertical : 8,
            
            }}>
            <Text style={{
              paddingHorizontal : Layout.width - 1000,
              fontSize : 20,
              color : '#000'
            }}> Bio </Text> 
              <AntDesign name="user" size={30}/>
          </View>
          <View style={{
              marginVertical : 8
          }}>
            <Text style={{
              color : colors.greyish
            }}>
              Passionné de l'Informatique , commençant un nouveau monde dans une école d'informatique nommée
              <Text style={{
                color : 'blue'
              }}> HAUTE ECOLE D'INFORMATIQUE</Text> .
              Fier de vous présentez mon premier Application faite par REACT NATIVE .
            </Text>
          </View>
        </View>

        {/**
       * Partie Présentation Projets
       */}
         <View style={{
          backgroundColor : colors.white,
          marginHorizontal : 62,
          padding : 10,
          borderRadius : 20,
          borderColor : colors.theme,
          elevation : 8,
          marginBottom : 12,
        }}>
          <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginVertical : 8,
            
            }}>
            <Text style={{
              paddingHorizontal : Layout.width - 1000,
              fontSize : 20,
              color : '#000'
            }}>Skills </Text> 
              <MaterialCommunityIcons name="pen" size={30}/>
          </View>
          <ScrollView horizontal style={{
              marginVertical : 8
          }}>
            {SkillIcons.map(skill=>(
            <View style={{
              width : 48,
              height : 48,
              borderRadius : 24,
              borderWidth : 2 ,
              borderColor : colors.theme ,
              justifyContent : 'center',
              alignItems : 'center'
            }}>
              
            <MaterialCommunityIcons
              name={skill}
              size={30}
              style={{
                color : colors.theme
              }}
              />
              
            </View>
              
            ))}
          </ScrollView>
        </View>
        
        <ScrollView horizontal>
          {
            Projects.map(p=>(
                <View key={p.name} style={{
                  backgroundColor : colors.theme,
                  marginHorizontal : 8,
                  padding :10,
                  borderRadius :16,
                  marginBottom : 16,
                  alignItems : "center",
                  width : Layout.width * 0.7,
                  borderColor : colors.theme,
                }} >                  
                <Text style={{
                    fontSize:20,
                    color : colors.white
                  }}>{p.name}</Text>
                    <MaterialCommunityIcons
                    name={p.icon} 
                    size={150}
                    style={{
                      color : colors.theme,
                      marginVertical : 20
                    }}
                    />
                    <TouchableOpacity>
                      <View style={{
                        backgroundColor : colors.white,
                        borderRadius :10,
                        paddingHorizontal : 20,
                        paddingVertical : 10
                      }}>
                        <Text style={{
                          color : colors.greyish
                        }}>View Project</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            ))
          }
        </ScrollView>
      {/**
       * Partie Présentation de mes projets GITHUB
       */}
        <View style={{
          backgroundColor : colors.white,
          marginHorizontal : 62,
          padding : 10,
          borderRadius : 20,
          elevation : 8,
          marginBottom : 12,
          borderColor : colors.theme,
        }}>
          <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginVertical : 8,
            
            }}>
            <Text style={{
              paddingHorizontal : Layout.width - 1000,
              fontSize : 20,
              color : '#000'
            }}>STATS GITHUB </Text> 
              <MaterialCommunityIcons name="trending-up" size={30}/>
          </View>
          <View style={{
            flexDirection : "row" ,
            justifyContent : "center",
            marginVertical : 8,
            alignItems : 'flex-end'
          }}>
          <Text style={{
            fontSize : 50,
            color : colors.theme
          }}>17
          </Text>
          <Text style={{
            color : colors.greyish
          }}>Repositories github
          </Text>
          </View>        
          <View>
          <ScrollView horizontal style={{
              marginVertical : 8
          }}>
           
          </ScrollView>
          </View>

          <View style={{
            flexDirection : "row" ,
            justifyContent : "center",
            marginVertical : 8,
            alignItems : 'flex-end'
          }}>
          <Text style={{
            color : colors.greyish
          }}>Project DONE</Text>
          <Text style={{
            fontSize : 50,
            color : colors.theme
          }}>5</Text>
          
          </View>
          <View style={{
            flexDirection : "row" ,
            justifyContent : "center",
            marginVertical : 8,
            alignItems : 'flex-end'
          }}>
          <Text style={{
            fontSize : 50,
            color : colors.theme
          }}>10
          </Text>
          <Text style={{
            color : colors.greyish
          }}>Project in Progress</Text>
          
          
          </View>
        </View>
        {/**
       * About Me
       */}
         <View style={{
          backgroundColor : '#000',
          marginHorizontal : 0,
          padding : 30,
          borderRadius : 20,
          elevation : 8,
          marginBottom : 12,
        }}>
          <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginVertical : 8,
            
            }}>
            <Text style={{
              color : colors.white
            }}>Mes Réseaux de Communication</Text> 
          </View>
          <ScrollView horizontal style={{
              marginVertical : 8
          }}>
            
            <MaterialCommunityIcons
              name='facebook'
              size={30}
              style={{
                color : colors.theme
              }}
              />
              <MaterialCommunityIcons
              name='github'
              size={30}
              style={{
                color : colors.theme
              }}
              />
              <MaterialCommunityIcons
              name='linkedin'
              size={30}
              style={{
                color : colors.theme
              }}
              />
              <MaterialCommunityIcons
              name='gmail'
              size={30}
              style={{
                color : colors.theme
              }}
              />
              <MaterialCommunityIcons
              name='pinterest'
              size={30}
              style={{
                color : colors.theme
              }}
              />
          </ScrollView>
          </View>
    </ScrollView>
  );
}
