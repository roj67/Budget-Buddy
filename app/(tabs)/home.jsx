import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import MonthSelector from 'react-native-month-selector'
import AntDesign from '@expo/vector-icons/AntDesign';
import moment from 'moment';
import { LineChart, PieChart } from "react-native-chart-kit";

export default function Home() {
  const [month, setMonth] = useState();
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visible);
  }

  useEffect(() => {
    const date = moment()
    setMonth(date)
  }, [])
  return (
    <ScrollView style={{
      padding: 20,
      paddingTop: 50,
      height: '100%'
    }} contentContainerStyle={{paddingBottom: 70}}>
      <Text style={{
        fontFamily: 'dm-sans-semi-bold',
        fontSize: 30,
        color: Colors.TEXT_COLOR
      }}>Home</Text>
      <TouchableOpacity 
      onPress={toggleVisibility}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 15
      }}>
        <Text style={{
          fontFamily: 'dm-sans-semi-bold',
          fontSize: 18
        }}>
          { month && moment(month).format('MMMM YYYY')}
        </Text>
        <AntDesign name="caretdown" size={12} color="black" />  
      </TouchableOpacity>
      <Text style={{
          fontFamily: 'dm-sans-semi-bold',
          fontSize: 32,
          marginTop: 10,
          textAlign: 'center',
          color: Colors.TEXT_COLOR
        }}>
          $1,400
        </Text>
      { 
        visible && 
        <View style={styles.container}>
          <MonthSelector 
          selectedDate={month} 
          selectedBackgroundColor={Colors.PURPLE}
          onMonthTapped={(month) => setMonth(month)}/>
        </View>
      }
      <View style={styles.container}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'Column',
            justifyContent: 'space-between'
          }}>
            <Text style={styles.text1}>
              Total Spent
            </Text>
            <Text style={styles.text2}>
              $800
            </Text>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'Column',
            justifyContent: 'space-between'
          }}>
            <Text style={styles.text1}>
              Total Budget
            </Text>
            <Text style={styles.text2}>
              $2000
            </Text>
          </View>
        </View>
        <View style={{
          backgroundColor: Colors.FRENCH_GRAY,
          height: 8,
          borderRadius: 15,
          marginTop: 5
        }}>
          <View style={{
            backgroundColor: Colors.PURPLE,
            height: 8,
            width: '40%',
            borderRadius: 15
          }}>
          </View>
        </View>
      </View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <View style={styles.container}>
        <PieChart
          data={[
            {
              name: 'Bitcoin',
              population: 63,
              color: 'orange'
            },
            {
              name: 'Dogecoin',
              population: 9,
              color: 'gold'
            },
            {
              name: 'Ethereum',
              population: 19,
              color: 'darkblue'
            },
            {
              name: 'Tether',
              population: 6,
              color: 'green'
            },
            {
              name: 'Polygon',
              population: 3,
              color: 'purple'
            },
        ]}
          width={Dimensions.get('window').width- 60}
          height={200}
          chartConfig={{
              color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: Colors.BACKGROUND,
        borderColor: Colors.DIVIDER,
        borderWidth: 1,
        borderRadius: 15,
        padding: 16,
        elevation: 2
    },
    text1: {
        fontFamily: 'dm-sans-medium',
        color: Colors.GRAY,
        fontSize: 14
    },
    text2: {
        fontFamily: 'dm-sans-medium',
        color: Colors.TEXT_COLOR,
        fontSize: 16
    }
})