import React, { useEffect,useState } from 'react';
import {
    View, Text, Button
} from 'react-native'
import axios from "axios";
const home1 = ({ navigation }) => {
    const [data, setData] = useState({
        NewConfirmed: 100282,
        TotalConfirmed: 1162857,
        NewDeaths: 5658,
        TotalDeaths: 63263,
        NewRecovered: 15405,
        TotalRecovered: 230845
      })
    useEffect(() => {
        let getData = async () => {
            try {
                console.log("useeffect1")

                const res = await axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
                setData(res.data.Global)
                console.log(res.data.Global)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 50 }}>
                <Button title="tgr" onPress={() => navigation.openDrawer()}>
                </Button>
                <Text>
                    COVID -19
                </Text>
                <Text>
                    ikon
                </Text>

            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",marginBottom:80 }}>
                <View style={{ backgroundColor: "#ffd384", height: 80, width: 80 }} >
                <Text>
                Total:
                    {data.NewConfirmed}
                    
                </Text>
                <Text>{data.TotalConfirmed}</Text>
                </View>
                <View style={{ backgroundColor: "#00af91", height: 80, width: 80 }} >
                <Text>
                Recovered
                    {data.NewRecovered}
                    
                </Text>
                <Text>{data.TotalRecovered}</Text>
                </View>
                <View style={{ backgroundColor: "#7868e6", height: 80, width: 80 }} >
                <Text>
                Deaths:
                    {data.TotalDeaths} 
                </Text>
                <Text>+ {data.NewDeaths}</Text>
                </View>


            </View>

                <Text style={{marginLeft:10,marginBottom:15}}>Health Tips</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",flexWrap:"wrap" }}>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                </View>
        </View>
    );
};

export default home1;
